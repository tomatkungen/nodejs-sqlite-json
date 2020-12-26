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
            this._cSqlite
                .executeQuery(
                    this._cSqlite
                        .f_alterTableAddColumn(this._packageName)
                        .f_AddColumn(`${docName} json`)
                        .f_buildRawQuery()
                );
        });

        return this; 
    }

    public toJson(): { [key: string]: any } {

        return this._cSqlite
            .selectQuery(
                this._cSqlite
                    .f_Select('*')
                    .f_From(this._packageName)
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
                    .f_Select('*')
                    .f_From(this._packageName)
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