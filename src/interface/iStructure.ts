import { cDocument } from "../class/cDocument";

interface iDocument {
    merge<T extends {}>(json: T): this;
    document(documentName: string): this;
    toJson(): object;
    append<T extends { [key: string ]: any }>(json: T): boolean;

    removeKey(key: string): boolean;
    removeKeys(keys: string[]): boolean;

    property(key: string): iKey;
};

interface iPackage {
    toJson(): object;
    toArray(): Array<object>;
    document(documentName: string): cDocument;
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
    f_json(json: { [key: string] : any }): string;
    f_json_array(...args: ((string | number | null)[])): string;
    f_json_array_length(json: { [key: string]: any} | any[], path?: string): string;
    f_json_extract(json: { [key: string]: any}, ...paths: string[]): string;
    f_json_insert(json: { [key: string]: any} | any[], path: string, value: any): string;
    f_json_object(json: { [key: string] : any}): string;
    f_json_patch(json1: { [key: string] : any}, json2: { [key: string] : any}): string;
    f_json_remove(json: { [key: string] : any} | any[], ...path: string[]): string;
    f_json_replace(json: { [key: string]: any} | any[], path: string, value: any): string;
    f_json_set(json: { [key: string]: any} | any[], path: string, value: any): string;
    f_json_type(json: { [key: string]: any}, path: string): string;
    f_json_valid(json: { [key: string]: any}): string;
    f_json_quote(value: (number | string)): string;
}

interface iSqliteNode {
    Version: () => string;
    Execute(databse: string, rawQuery: string): any;
    Select(database: string, rawQuery: string): any;
}

export {
    iDocument,
    iPackage,
    iKey,
    tValueType,
    iSqliteNode,
    iSqlite 
};