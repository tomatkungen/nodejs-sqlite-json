import { iDocument } from "../interface/iStructure";
import { cProperty } from "./cProperty";
declare class cDocument implements iDocument {
    private _packageName;
    private _documentName;
    private _cSqlite;
    constructor(documentName: string, packageName?: string);
    merge<T extends {
        [key: string]: any;
    }>(json: T): boolean;
    toJson(): object | null;
    append<T extends {
        [key: string]: any;
    }>(json: T): boolean;
    removeProperty(property: string): boolean;
    removePropertys(...propertys: string[]): boolean;
    property(property: string): cProperty;
}
export { cDocument };
