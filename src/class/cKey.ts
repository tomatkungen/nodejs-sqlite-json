import { iKey, tValueType } from "../interface/iStructure";

class cKey implements iKey {

    constructor(public key: string) {}

    public value(): any { return '';}

    public insert<T extends {}>(json: T): boolean { return true; }

    public replace<T extends {}>(json: T): boolean { return true; }

    public set<T extends {}>(json: T): boolean { return true; }

    public removeKey(key: string): boolean { return true; }

    public removeKeys(key: string[]): boolean { return true; }

    public removeAtIndex(index: number): boolean { return true; }

    public removeAtIndexs(index: number[]): boolean { return true; }

    public valueType(): tValueType { return 'object'; }

}

export {cKey};