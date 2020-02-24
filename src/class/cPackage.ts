import { cDocument } from "./cDocument";
import { iPackage } from "../interface/iStructure";

class cPackage implements iPackage {

    private _packageName: string;

    constructor(packageName: string) {
        this._packageName = packageName;
    }

    public toJson(): object { return {}; }

    public toArray(): Array<object> { return []; }

    public document(documentName: string): cDocument {
        return new cDocument(documentName);
    }
}

export {cPackage};