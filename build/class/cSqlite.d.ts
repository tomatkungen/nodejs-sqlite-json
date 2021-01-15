import { aSqliteNode } from "../abstract/aSqliteNode";
import { iSqlite } from "../interface/iStructure";
declare class cSqlite extends aSqliteNode implements iSqlite {
    private _queryBuild;
    constructor();
    selectQuery(query: string): {
        [column: string]: any;
    }[];
    executeQuery(query: string): boolean;
    private addQuery;
    private addSpace;
    private addLeftParenthes;
    private addRightParenthes;
    private getQuery;
    private initQuery;
    f_buildRawQuery(): string;
    f_select(...columns: string[]): cSqlite;
    f_as(alias: string): cSqlite;
    f_from(table: string): cSqlite;
    f_limit(upperBound: number): cSqlite;
    f_createTable(table: string, ...columns: string[]): cSqlite;
    f_alterTableAddColumn(table: string): cSqlite;
    f_addColumn(columnDefinition: string): cSqlite;
    f_insertOrIgnoreIntoTable(table: string, ...columns: string[]): cSqlite;
    f_insertIntoTable(table: string, ...columns: string[]): cSqlite;
    f_values(...values: string[]): cSqlite;
    f_onConflictDo(...indexColumn: string[]): cSqlite;
    f_update(): cSqlite;
    f_updateTable(table: string): cSqlite;
    f_setColumn(column: string, expr: string): cSqlite;
    f_whereExpr(expr: string): cSqlite;
    f_andExpr(expr: string): cSqlite;
    f_isNull(): cSqlite;
    f_isNotNull(): cSqlite;
    f_pragmaInfo(table: string): cSqlite;
    f_caseExpr(expr: string): cSqlite;
    f_whenExpr(expr: string): cSqlite;
    f_thenExpr(expr: string): cSqlite;
    f_elseExpr(expr: string): cSqlite;
    f_end(): cSqlite;
    f_json(json: {
        [key: string]: any;
    }): string;
    f_json_array(...args: ((string | number | null)[])): string;
    f_json_array_length(json: {
        [key: string]: any;
    } | any[], path?: number | string): string;
    f_json_extract(json: {
        [key: string]: any;
    }, ...paths: string[]): string;
    f_json_extract_column(column: string, ...paths: string[]): string;
    f_json_insert(json: {
        [key: string]: any;
    } | any[], path: string, value: any[]): string;
    f_json_insert_column(column: string, path: string, value: any): string;
    f_json_object(json: {
        [key: string]: (string | number);
    }): string;
    f_json_patch(json1: {
        [key: string]: any;
    }, json2: {
        [key: string]: any;
    }): string;
    f_json_patch_colum(json: {
        [key: string]: any;
    }, column: string): string;
    f_json_remove(json: {
        [key: string]: any;
    } | any[], ...path: string[]): string;
    f_json_remove_columns(column: string, ...path: (string | number)[]): string;
    f_json_remove_columns_property(column: string, property: string, ...path: number[]): string;
    f_json_replace(json: {
        [key: string]: any;
    } | any[], path: string, value: any): string;
    f_json_replace_column(column: string, path: string, value: any): string;
    f_json_set(json: {
        [key: string]: any;
    } | any[], path: string, value: any): string;
    f_json_set_column(column: string, path: string, value: any): string;
    f_json_set_column_array_end(column: string, path: string, value: any): string;
    f_json_type(json: {
        [key: string]: any;
    }, path: string): string;
    f_json_type_column(column: string, path: string): string;
    f_json_valid(json: {
        [key: string]: any;
    }): string;
    f_json_quote(value: (number | string)): string;
}
export { cSqlite };
