import { cDocument } from "../class/cDocument";
import { cPackage } from "../class/cPackage";
import { cProperty } from "../class/cProperty";
import { cSqlite } from "../class/cSqlite";

interface iDocument {
    merge<T extends {}>(json: T): boolean;
    toJson(): object | null;
    append<T extends { [property: string ]: any }>(json: T): boolean;

    removeProperty(property: string): boolean;
    removePropertys(...propertys: string[]): boolean;

    property(property: string): cProperty;
};

interface iPackage {
    add(...documentName: string[]): cPackage;
    toJson(): { [key: string]: any };
    toArray(): { [column: string]: any }[];
    document(documentName: string): cDocument;
}

type tValueType = 'object' | 'array' | 'integer' | 'real' | 'true' | 'false' | 'null' | 'text' | 'NULL';

interface iProperty {
    Property(property: string): cProperty;

    value(): { [key: string]: any };
    insert<T extends {}>(json: T): boolean;
    replace<T extends {}>(json: T): boolean;
    set<T extends {}>(json: T): boolean;

    removeProperty(property: string): boolean;
    removePropertys(...propertys: string[]): boolean

    removeAtIndex(index: number): boolean;
    removeAtIndexes(...index: number[]): boolean;
    valueType(): tValueType;
}

interface iSqlite {
    f_buildRawQuery(): string;
    f_Select(): cSqlite;
    f_as(alias: string): cSqlite;
    f_From(table: string): cSqlite;
    f_limit(upperBound: number): cSqlite;
    f_createTable(table: string, ...columns: string[]): cSqlite;
    f_alterTableAddColumn(table: string): cSqlite;
    f_AddColumn(columnDefinition: string): cSqlite;
    f_insertIntoTable(table: string, ...columns: string[]): cSqlite;
    f_pragmaInfo(table: string): cSqlite;
    f_updateTable(table: string): cSqlite;
    f_setColumn(column: string, expr: string): cSqlite;
    f_whereExpr(expr: string): cSqlite;

    f_json(json: { [key: string] : any }): string;
    f_json_array(...args: ((string | number | null)[])): string;
    f_json_array_length(json: { [key: string]: any} | any[], path?: string): string;
    f_json_extract(json: { [key: string]: any}, ...paths: string[]): string;
    f_json_extract_column(column: string, ...paths: string[]): string;
    f_json_insert(json: { [key: string]: any} | any[], path: string, value: any): string;
    f_json_insert_column(column: string, path: string, value: any): string;
    f_json_object(json: { [key: string] : (string | number)}): string;
    f_json_patch(json1: { [key: string] : any}, json2: { [key: string] : any}): string;
    f_json_patch_colum(json: { [key: string] : any}, column: string): string;
    f_json_remove(json: { [key: string] : any} | any[], ...path: string[]): string;
    f_json_remove_columns(column: string, ...path: string[]): string;
    f_json_replace(json: { [key: string]: any} | any[], path: string, value: any): string;
    f_json_replace_column(column: string, path: string, value: any): string;
    f_json_set(json: { [key: string]: any} | any[], path: string, value: any): string;
    f_json_set_column(column: string, path: string, value: any): string;
    f_json_type(json: { [key: string]: any}, path: string): string;
    f_json_type_column(column: string, path: string): string;
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
    tValueType,
    iSqliteNode,
    iSqlite,
    iProperty
};