import { cDocument } from "./cDocument";
import { iPackage } from "../interface/iStructure";
declare class cPackage implements iPackage {
    private _packageName;
    private _documentName;
    private _cSqlite;
    constructor(packageName: string);
    add(...documentName: string[]): cPackage;
    toJson(): {
        [key: string]: any;
    };
    toArray(): {
        [column: string]: any;
    }[];
    Document(documentName: string): cDocument;
}
export { cPackage };
