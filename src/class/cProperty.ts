import { tValueType, iProperty } from "../interface/iStructure";
import { cSqlite } from "./cSqlite";

class cProperty implements iProperty {

    private _packageName: string;
    private _documentName: string;
    private _property: string;
    private _cSqlite: cSqlite;

    constructor(property: string, documentName: string, packageName: string) {
        this._cSqlite = new cSqlite();

        this._packageName = packageName;
        this._documentName = documentName;
        this._property = property;
    }

    public Property(property: string) {
        return new cProperty(
            `${this._property}.${property}`,
            this._packageName,
            this._documentName
        );
    }

    public value(): { [key: string]: any } {
        const select = this._cSqlite.selectQuery(
            this._cSqlite
                .f_Select(
                    this._cSqlite
                        .f_json_extract_column(
                            this._documentName,
                            this._property
                        )
                )
                .f_as(this._documentName)
                .f_From(this._packageName)
                .f_buildRawQuery()
        );

        return (
            Array.isArray(select) && select.length === 0 ?
            null :
            select[0][this._documentName]
        );
    }

    public insert<T extends {}>(json: T): boolean {
        return this._cSqlite.executeQuery(
            this._cSqlite
                .f_updateTable(this._packageName)
                .f_setColumn(
                    this._documentName,
                    this._cSqlite.f_json_insert_column(
                        this._documentName,
                        this._property,
                        this._cSqlite.f_json(json)
                    )
                ).f_buildRawQuery()
        );

    }

    public replace<T extends {}>(json: T): boolean { 
        return this._cSqlite.executeQuery(
            this._cSqlite
                .f_updateTable(this._packageName)
                .f_setColumn(
                    this._documentName,
                    this._cSqlite
                        .f_json_replace_column(
                            this._documentName,
                            this._property,
                            this._cSqlite.f_json(json)
                        )
                ).f_buildRawQuery()
        );
    }

    public set<T extends {}>(json: T): boolean {
        return this._cSqlite.executeQuery(
            this._cSqlite
                .f_updateTable(this._packageName)
                .f_setColumn(
                    this._documentName,
                    this._cSqlite
                        .f_json_set_column(
                            this._documentName,
                            this._property,
                            this._cSqlite.f_json(json)
                        )
                ).f_buildRawQuery()
        );
    }

    public removeProperty(property: string): boolean {
        return this.removePropertys(property);
    }

    public removePropertys(...propertys: string[]): boolean {
        return this._cSqlite.executeQuery(
            this._cSqlite
                .f_updateTable(this._packageName)
                .f_setColumn(
                    this._documentName,
                    this._cSqlite.f_json_remove_columns(
                        this._documentName,
                        ...propertys
                    )
                )
                .f_buildRawQuery()
        );
    }

    public removeAtIndex(index: number): boolean {
        return this.removeAtIndexes(index);
    }

    public removeAtIndexes(...indexes: number[]): boolean {
        return this._cSqlite.executeQuery(
            this._cSqlite
                .f_updateTable(this._packageName)
                .f_setColumn(
                    this._documentName,
                    this._cSqlite.f_json_remove_columns_property(
                        this._documentName,
                        this._property,
                        ...indexes
                    )
                )
                .f_buildRawQuery()
        );
     }

    public valueType(): tValueType {
        return this._cSqlite.selectQuery(
            this._cSqlite
                .f_Select(
                    this._cSqlite
                    .f_json_type_column(
                        this._documentName,
                        this._property
                    )
                )
                .f_as('TYPE')
            .f_From(this._packageName)
            .f_buildRawQuery()
        )[0]['TYPE'];
    }

}

export { cProperty };