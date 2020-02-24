import { iDocument } from "../interface/iStructure";
import { cKey } from "./cKey";
import { cSqlite } from "./cSqlite";


class cDocument implements iDocument {

    private _documentName: string;
    private _cSqlite: cSqlite;

    constructor(document: string = 'document') {
        this._documentName  = document;
        this._cSqlite       = new cSqlite();
    }

    public merge(json: {}): this { return this; }

    public document(documentName: string): this { return this;}

    public toJson(): object { return {};}

    public append<T extends { [key: string]: any; }>(json: T): boolean {
        return true;
    }

    public removeKey(key: string): boolean { return true;}

    public removeKeys(keys: string[]): boolean { return true;}

    public property(key: string): cKey {
        return new cKey(key);
    }
}

export {cDocument};