interface iDocument {
    create(documentName: string): this;
    merge<T extends {}>(json: T): this;
    getDocument(documentName: string): this;
    toJson(): object;
    append<T extends {}>(json: T): boolean;

    removeKey(key: string): boolean;
    removeKeys(keys: string[]): boolean;

    package(packageName: string): iPackage;
    property(key: string): iKey;
};

interface iPackage {
    toJson(): object;
    toArray(): Array<object>;
    getDocument(documentName: string): iDocument;
}

type tValueType = 'object' | 'array' | 'integer' | 'real' | 'true' | 'false' | 'null' | 'text' | 'NULL';

interface iKey {
    key: string;
    value(): any;
    insert<T extends {}>(json: T): boolean;
    replace<T extends {}>(json: T): boolean;
    set<T extends {}>(json: T): boolean;

    removeKey(key: string): boolean;
    removeKeys(keys: string[]): boolean;

    removeAtIndex(index: number): boolean;
    removeAtIndexs(indexs: number[]): boolean;
    valueType(): tValueType;
}

export {iDocument, iPackage, iKey, tValueType};