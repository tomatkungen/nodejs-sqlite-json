import { tValueType, iProperty } from "../interface/iStructure";

class cProperty implements iProperty {

    private _property: string;

    constructor(property: string, public navigateKey: string[]) {

        this._property = property;
        navigateKey.push(property);

    }

    public Property(key: string) {
        return new cProperty(key, this.navigateKey);
    }

    public value(): any {
        
        return '';
    }

    public insert<T extends {}>(json: T): boolean { return true; }

    public replace<T extends {}>(json: T): boolean { return true; }

    public set<T extends {}>(json: T): boolean { return true; }

    public removeKey(key: string): boolean { return true; }

    public removeKeys(key: string[]): boolean { return true; }

    public removeAtIndex(index: number): boolean { return true; }

    public removeAtIndexs(index: number[]): boolean { return true; }

    public valueType(): tValueType { return 'object'; }

}

export { cProperty };