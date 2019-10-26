import {cDocument} from "./cDocument";
import { iPackage, iDocument } from "../interface/iStructure";

class cPackage implements iPackage{
    constructor() {}

    public toJson(): object { return {}; }

    public toArray(): Array<object> { return []; }

    public getDocument(documentName: string): iDocument {
        return new cDocument(documentName);
    }
}

export {cPackage};