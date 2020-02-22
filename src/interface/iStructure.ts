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

interface iSqlite {
    json(json: string): string;
    json_array(...args: any[]): string;
    json_array_length(json: string): number;
    json_array_length(json: string, path: string) : number;
    json_extract(json: string, path: string,): string;
    json_insert(json: string, path: string, ...value: number[]): string;
    json_object(...arg: (number | string )[]): string;
    json_patch(json1: string ,json2: string): string;
    json_remove(json: string, path: string, ...args: string[]): string;
    json_replace(json: string, path: string, ...value: (number | string)[]): string;
    json_set(json: string, path: string, ...value: (string | number)[]): string;
    json_type(json: string): tValueType;
    json_type(json: string, path: string): tValueType;
    json_valid(json: string): 0 | 1;
    json_quote(value: (number | string)): string;
}

interface iSqliteNode {
    Version: () => string;
    Execute(rawQuery: string): any;
    Select(rawQuery: string): any;
}

export {
    iDocument,
    iPackage,
    iKey,
    tValueType,
    iSqliteNode,
    iSqlite 
};