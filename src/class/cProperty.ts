import { tValueType, iProperty } from "../interface/iStructure";

class cProperty implements iProperty {

    private _property: string;

    constructor(property: string) {
        this._property = property;
    }

    public Property(property: string) {
        return new cProperty(`${this._property}.${property}`);
    }

    public value(): any {
        
        return '';
    }

    public insert<T extends {}>(json: T): boolean { return true; }

    public replace<T extends {}>(json: T): boolean { return true; }

    public set<T extends {}>(json: T): boolean { return true; }

    public removeKey(property: string): boolean { return true; }

    public removeKeys(property: string[]): boolean { return true; }

    public removeAtIndex(index: number): boolean { return true; }

    public removeAtIndexs(index: number[]): boolean { return true; }

    public valueType(): tValueType { return 'object'; }

}

export { cProperty };