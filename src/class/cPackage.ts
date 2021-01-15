import { cDocument } from "./cDocument";
import { iPackage } from "../interface/iStructure";
import { cSqlite } from "./cSqlite";

class cPackage implements iPackage {

    private _packageName: string;
    private _documentName: string;

    private _cSqlite: cSqlite;

    constructor(packageName: string, ...documentNames: string[]) {
        this._documentName  = cSqlite.documentName();
        this._packageName   = packageName || cSqlite.packageName();

        this._cSqlite       = new cSqlite();

        this._cSqlite
            .executeQuery(
                this._cSqlite
                    .f_createTable(
                        this._packageName,
                        ...[
                            ...cSqlite.columns(),
                            `${this._documentName} json`,
                            ...documentNames.map(
                                (documentName) => `${documentName} json`
                            )
                        ]
                    )
                    .f_buildRawQuery()
            );
    }

    public add(...documentName: string[]): cPackage {
        
        documentName.forEach((docName: string) => {

            const rawQueryCount = this._cSqlite
                .f_select('count(*)')
                .f_as('cnt')
                .f_from(`pragma_table_info('${this._packageName}')`)
                .f_whereExpr(`name = '${docName}'`)
                .f_buildRawQuery();

            const result = this._cSqlite.selectQuery(
                this._cSqlite
                    .f_select('')
                    .f_caseExpr('cnt')
                    .f_whenExpr('0').f_thenExpr('0')
                    .f_elseExpr('1')
                    .f_end()
                    .f_as('total')
                    .f_from(`(${rawQueryCount})`)
                    .f_buildRawQuery()
            );

            if (result && result.length > 0 && result[0].total > 0)
                return;

            this._cSqlite
                .executeQuery(
                    this._cSqlite
                        .f_alterTableAddColumn(this._packageName)
                        .f_addColumn(`${docName} json`)
                        .f_buildRawQuery()
                );
        });

        return this; 
    }

    public toJson(): { [key: string]: any } {

        return this._cSqlite
            .selectQuery(
                this._cSqlite
                    .f_select('*')
                    .f_from(this._packageName)
                    .f_limit(1)
                    .f_buildRawQuery()
            )
            .reduce((prev: { [key: string]: any }, curr: { [key: string]: any }) => {
                Object.keys(curr).forEach((key: string) => { curr[key] = JSON.parse(curr[key]); });
                return {...prev, ...curr};
            }, {});

    }

    public toArray(): { [column: string]: any }[] {

        return this._cSqlite
            .selectQuery(
                this._cSqlite
                    .f_select('*')
                    .f_from(this._packageName)
                    .f_limit(1)
                    .f_buildRawQuery()
            )
            .reduce((prev: any[], obj: { [column: string]: any }) => {

                Object.keys(obj).forEach((key: string) => {
                    let newObj: { [column: string]: any } = {};
                    newObj[key] = JSON.parse(obj[key]);
                    prev.push(newObj);
                });

                return prev;
            }, []);
    }

    public Document(documentName: string = this._documentName): cDocument {
        return new cDocument(documentName, this._packageName);
    }

}

export {cPackage};