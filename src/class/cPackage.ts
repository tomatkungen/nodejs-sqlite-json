import { cDocument } from "./cDocument";
import { iPackage } from "../interface/iStructure";
import { cSqlite } from "./cSqlite";

class cPackage implements iPackage {

    private _packageName: string;
    private _cSqlite: cSqlite;

    constructor(packageName: string) {
        this._packageName   = packageName;
        this._cSqlite       = new cSqlite();

        this._cSqlite
            .createTable(this._packageName);
    }

    public toJson(): object { return {}; }

    public toArray(): Array<object> { return []; }

    public document(documentName: string): cDocument {
        return new cDocument(documentName);
    }
}

export {cPackage};