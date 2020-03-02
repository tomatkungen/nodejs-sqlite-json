import { iDocument } from "../interface/iStructure";
import { cProperty } from "./cProperty";
import { cSqlite } from "./cSqlite";


class cDocument implements iDocument {

    private _package: string;
    private _documentName: string;
    private _cSqlite: cSqlite;

    constructor(documentName: string, packageName?: string) {
        this._cSqlite       = new cSqlite();

        this._documentName  = documentName || this._cSqlite.databaseName();
        this._package       = packageName || this._cSqlite.packageName();

        this._cSqlite
            .exePreQuery('CreateTable', this._package);

        this._cSqlite
            .exePreQuery('AlterTableAddColumn', this._package, this._documentName);
    }

    public merge(json: {}): this { return this; }

    public document(documentName: string): this { return this;}

    public toJson(): object | null {
        return JSON.parse(
            this._cSqlite.selPreQuery(
                'SelectLimitOne',
                this._package,
                this._documentName
            )[0][this._documentName]
        )
    }

    public append<T extends { [key: string]: any; }>(json: T): boolean {
        return this._cSqlite.exePreQuery(
            'InsertIntoTable',
            this._package,
            this._documentName,
            JSON.stringify(json)
        );
    }

    public removeKey(key: string): boolean { return true;}

    public removeKeys(keys: string[]): boolean { return true;}

    public property(key: string): cProperty {
        return new cProperty(key, []);
    }
}

export {cDocument};