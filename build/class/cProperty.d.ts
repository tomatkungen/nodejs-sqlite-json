import { tValueType, iProperty } from "../interface/iStructure";
declare class cProperty implements iProperty {
    private _packageName;
    private _documentName;
    private _property;
    private _cSqlite;
    constructor(property: string, documentName: string, packageName: string);
    Property(property: string): cProperty;
    value(): {
        [key: string]: any;
    };
    insert<T extends {}>(json: T): boolean;
    replace<T extends {}>(json: T): boolean;
    set<T extends {}>(json: T): boolean;
    removeProperty(property: string): boolean;
    removePropertys(...propertys: string[]): boolean;
    pushEnd<T extends {}>(json: T): boolean;
    removeAtIndex(index: number): boolean;
    removeAtIndexes(...indexes: number[]): boolean;
    valueType(): tValueType;
}
export { cProperty };
