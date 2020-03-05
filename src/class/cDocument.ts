import { iDocument } from "../interface/iStructure";
import { cProperty } from "./cProperty";
import { cSqlite } from "./cSqlite";


class cDocument implements iDocument {

    private _packageName: string;
    private _documentName: string;
    private _cSqlite: cSqlite;

    constructor(documentName: string, packageName?: string) {
        this._cSqlite       = new cSqlite();

        this._documentName  = documentName || cSqlite.databaseName();
        this._packageName   = packageName || cSqlite.packageName();

        // Create table
        this._cSqlite
            .executeQuery(
                this._cSqlite
                    .f_createTable(this._packageName , this._documentName)
                    .f_buildRawQuery()
            );

        // Add Column to table
        this._cSqlite
            .executeQuery(
                this._cSqlite
                    .f_alterTableAddColumn(this._packageName)
                    .f_AddColumn(`${this._documentName} json`)
                    .f_buildRawQuery()
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
        return JSON.parse(
            this._cSqlite.selectQuery(
                this._cSqlite
                    .f_Select(this._documentName)
                    .f_From(this._packageName)
                    .f_limit(1)
                    .f_buildRawQuery()
            )[0][this._documentName]
        )
    }

    public append<T extends { [key: string]: any; }>(json: T): boolean {
        return this._cSqlite.executeQuery(
            this._cSqlite
                .f_insertIntoTable(this._packageName, this._documentName)
                .f_values(JSON.stringify(json))
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
            this._packageName,
            this._documentName
        );
    }
}

export {cDocument};