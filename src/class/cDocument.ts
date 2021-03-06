import { iDocument } from "../interface/iStructure";
import { cProperty } from "./cProperty";
import { cSqlite } from "./cSqlite";


class cDocument implements iDocument {

    private _packageName: string;
    private _documentName: string;
    private _cSqlite: cSqlite;

    constructor(documentName: string, packageName?: string) {
        this._cSqlite       = new cSqlite();

        this._documentName  = documentName || cSqlite.documentName();
        this._packageName   = packageName || cSqlite.packageName();

        // Create table with default json column
        this._cSqlite
            .executeQuery(
                this._cSqlite
                    .f_createTable(
                        this._packageName,
                        ...[
                            ...cSqlite.columns(),
                            `${this._documentName} json`
                        ]
                    ).f_buildRawQuery()
            );
    }

    public merge<T extends { [key: string]: any; }>(json: T): boolean {
        return this._cSqlite.executeQuery(
            this._cSqlite
                .f_updateTable(this._packageName)
                .f_setColumn(
                    this._documentName,
                    this._cSqlite.f_json_patch_colum(json, this._documentName)
                ).f_buildRawQuery()
        );
    }

    public toJson(): object | null {
        const select = this._cSqlite.selectQuery(
                this._cSqlite
                    .f_select(this._documentName)
                    .f_from(this._packageName)
                    .f_limit(1)
                    .f_buildRawQuery()
            );

        return (
            Array.isArray(select) && select.length === 0 ?
            null :
            JSON.parse(select[0][this._documentName])
        );
    }

    public append<T extends { [key: string]: any; }>(json: T): boolean {
        return this._cSqlite.executeQuery(
            this._cSqlite
                .f_insertOrIgnoreIntoTable(
                    this._packageName,
                    cSqlite.idColumn(),
                    this._documentName
                )
                .f_values(
                    '1',
                    `'${JSON.stringify(json)}'`
                )
                .f_onConflictDo(cSqlite.idColumn())
                .f_update()
                .f_setColumn(this._documentName, `'${JSON.stringify(json)}'`)
                .f_whereExpr(`${cSqlite.idColumn()} = 1`)
                .f_andExpr(this._documentName)
                .f_isNull()
                .f_buildRawQuery()
        );
    }

    public removeProperty(property: string): boolean { 
        return this._cSqlite.executeQuery(
            this._cSqlite
                .f_updateTable(this._packageName)
                .f_setColumn(
                    this._documentName,
                    this._cSqlite
                        .f_json_remove_columns(
                        this._documentName,
                        property
                    )
                )
                .f_buildRawQuery()
        );
    }

    public removePropertys(...propertys: string[]): boolean { 
        return this._cSqlite.executeQuery(
            this._cSqlite
                .f_updateTable(this._packageName)
                .f_setColumn(
                    this._documentName,
                    this._cSqlite
                        .f_json_remove_columns(
                            this._documentName,
                            ...propertys
                        )
                ).f_buildRawQuery()
        );
    }

    public property(property: string): cProperty {
        return new cProperty(
            property,
            this._documentName,
            this._packageName
        );
    }
}

export {cDocument};