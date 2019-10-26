interface iDocument {
    create(documentName: string): this;
    merge<T extends {}>(json: T): this;
    getDocument(documentName: string): this;
    toJson<T extends {}>(): T;
    append<T extends {}>(json: T): boolean;

    removeKey(key: string): boolean;
    removeKeys(keys: string[]): boolean;

    getPackage(packageName: string): iPackage;
    property(key: string): iKey;
};

interface iPackage {
    toJson<T extends {}>(): T;
    toArray<T extends {}>(): Array<T>;
    getDocument(documentName: string): iDocument;
}

type tValueType = 'object' | 'array' | 'integer' | 'real' | 'true' | 'false' | 'null' | 'text' | 'NULL';

interface iKey {
    key: string;
    value<T>(): T;
    insert<T extends {}>(json: T): boolean;
    replace<T extends {}>(json: T): boolean;
    set<T extends {}>(json: T): boolean;

    removeKey(key: string): boolean;
    removeKeys(keys: string[]): boolean;

    removeAtIndex(index: number): boolean;
    removeAtIndexs(indexs: number[]): boolean;
    valuetupe(): tValueType;
}

export {iDocument, iPackage, iKey};