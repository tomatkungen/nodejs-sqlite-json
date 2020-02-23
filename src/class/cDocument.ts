import { iDocument } from "../interface/iStructure";
import { cPackage } from "./cPackage";
import { cKey } from "./cKey";


class cDocument implements iDocument {
    private _documentName: string;

    constructor() {
        this._documentName = 'document';
    }

    public create(documentName: string): this {
        this._documentName = documentName;

        return this;
    }

    public merge(json: {}): this { return this; }

    public getDocument(documentName: string): this { return this;}

    public toJson(): object { return {};}

    public append<T extends {}>(json: T): boolean { return true;}

    public removeKey(key: string): boolean { return true;}

    public removeKeys(keys: string[]): boolean { return true;}

    public package(packageName: string): cPackage {
        return new cPackage();
    };

    public property(key: string): cKey {
        return new cKey(key);
    }
}

export {cDocument};