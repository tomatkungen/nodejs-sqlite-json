import { aSqliteNode } from "../abstract/aSqliteNode";

class cSqlite extends aSqliteNode {
    
    private _queryBuild: (string | number)[];

    constructor () {
        super();

        this._queryBuild = [];
    }

    public selectQuery(
        query: string
    ): { [column: string]: any}[] {
        try {
            return super.Select(
                cSqlite.databaseName(),
                query
            )
        } catch(e) {
            return [];
        }
    }

    public executeQuery(
        query: string
    ): boolean {
        try {
            super.Execute(
                cSqlite.databaseName(),
                query
            );

            return true;
        } catch(e) {
            console.log(e);
            return false;
        }
    }

    private addQuery(syntaxQuery: string): cSqlite {
        this._queryBuild.push(syntaxQuery);

        return this;
    }

    private addSpace(): cSqlite {
        this._queryBuild.push(' ');

        return this;
    }

    private addLeftParenthes(): cSqlite {
        this._queryBuild.push('(');

        return this;
    }

    private addRightParenthes(): cSqlite {
        this._queryBuild.push(')');

        return this;
    }

    private getQuery(): string {
        return this._queryBuild.join();
    }

    private initQuery(): cSqlite {
        this._queryBuild = [];

        return this;
    }

    public f_buildRawQuery(): string {
        return this.getQuery();
    };

    public f_Select(): cSqlite {
        this.initQuery()
            .addQuery('SELECT')

        return this;
    }

    public f_ResultColumns(...columns: string[]): cSqlite {
        this.addSpace()
            .addQuery(columns.join(' ,'));

        return this;
    }

    public f_From(table: string): cSqlite {
        this.addSpace()
            .addQuery(table);
        
        return this;
    }

    public f_limit(upperBound: number): cSqlite {
        this.addQuery('limit')
            .addSpace()
            .addQuery(`${upperBound}`);

        return this;
    }

    public f_createTable(table: string, ...columns: string[]): cSqlite {
        this.initQuery()
            .addQuery('CREATE TABLE IF NOT EXIST')
            .addSpace()
            .addQuery(table)
            .addSpace()
            .addQuery(columns.join(', '));

        return this;
    }

    public f_alterTableAddColumn(table: string): cSqlite {
        this.initQuery()
            .addQuery('ALTER TABLE')
            .addSpace()
            .addQuery(table)

        return this;
    }

    public f_AddColumn(columnDefinition: string): cSqlite {
        this.addSpace()
            .addQuery('ADD COLUMN')
            .addSpace()
            .addQuery(columnDefinition);

        return this;
    }

    public f_insertIntoTable(table: string, columns: string[], values: string[]): cSqlite {
        this.initQuery()
            .addQuery('INSERT INTO')
            .addSpace()
            .addQuery(table)
            .addSpace()
            .addLeftParenthes()
            .addQuery(columns.join(', '))
            .addRightParenthes()
            .addSpace()
            .addQuery('VALUE')
            .addSpace()
            .addLeftParenthes()
            .addQuery(values.join(', '))
            .addRightParenthes()

        return this;
    }
    // INSERT INTO table (column1,column2 ,..) VALUES( value1,    value2 ,...);

    public f_pragmaInfo(table: string): cSqlite {
        this.initQuery()
            .addQuery('PRAGMA')
            .addSpace()
            .addQuery('table_info')
            .addLeftParenthes()
            .addQuery(table)
            .addRightParenthes()

        return this;
    }

    public f_updateTable(table: string): cSqlite {
        this.initQuery()
            .addQuery('UPDATE')
            .addSpace()
            .addQuery(table);

        return this;
    }

    public f_setColumn(column: string, expr: string): cSqlite {
        this.addSpace()
            .addQuery('SET')
            .addSpace()
            .addQuery(column)
            .addSpace()
            .addQuery('=')
            .addSpace()
            .addQuery(expr);

            return this;
    }

    public f_whereExpr(expr: string): cSqlite {
        this.addSpace()
            .addQuery('WHERE')
            .addSpace()
            .addQuery(expr);

            return this;
    }

    /**
     * json( { "this" : "is", "a": [ "test" ] } )  => "json(' { "this" : "is", "a": [ "test" ] } ')"
     */
    public f_json(json: { [key: string] : any }): string {
        return `json('${JSON.stringify(json)}')`;
    }

    /**
     * "json_array(1, 2,'3',4) => "json_array([ 1,2,'3',4 ])"
     */
    public f_json_array(...args: ((string | number | null)[])): string {
        return `json_array(${
            args.map((arg) => (
                (typeof arg === 'string' && `'${arg}'`) ||
                (typeof arg === 'number' && arg) ||
                arg
            ))
        })`;
    }

    /**
     * json_array_length([1,2,3,4])         => "json_array_length('[1,2,3,4]')" 
     * json_array_length([1,2,3,4], '$')    => "json_array_length('[1,2,3,4]', '$')" 
     */
    public f_json_array_length(json: { [key: string]: any} | any[], path?: string) : string {
        return `json_array_length('${JSON.stringify(json)}' ${path ? `,' ${path}'` : ''})`;
    }

    /**
     * select JSON_EXTRACT(JSONS, '$.a.a') FROM PRODUCTJSON;
     * json_extract({"a":2,"c":[4,5,{"f":7}]}, '$')   => "json_extract('{"a":2,"c":[4,5,{"f":7}]}', '$')"
     */
    public f_json_extract(json: { [key: string]: any}, ...paths: string[]): string {
        return `json_extract('${JSON.stringify(json)}'${paths ? `, '${
            paths.map((path: string) => (path)).join('.')
        }'` : ''})`;
    }

    /**
     * json_insert([1,2,3,4],'$[#]',99)   => "json_insert('[1,2,3,4]','$[#]',99)"  
     */
    public f_json_insert(json: { [key: string]: any} | any[], path: string, value: any): string {
        return `json_insert(${JSON.stringify(json)}, ${path}, ${
            (typeof value === 'string' && value) ||
            (typeof value === 'number' && value) ||
            (typeof value === 'boolean' && `${value}`) ||
            JSON.stringify(value)
        })`;
    }

    /**
     * json_object('a',2,'c','{e:5}') => "json_object('a',2,'c','{e:5}')"
     */
    public f_json_object(json: { [key: string] : any}): string { 
        return `json_object(${
            Object.keys(json).reduce((ary: any[], key) => {
                ary.push(`'${key}'`);
                ary.push(JSON.stringify(json[key]));
                return ary;
            }, []).join(', ')
        })`;
    };

    /**
     *  json_patch({"a":1,"b":2}, {"c":3,"d":4}) => "json_patch('{"a":1,"b":2}','{"c":3,"d":4}')"
     */
    public f_json_patch(json1: { [key: string] : any}, json2: { [key: string] : any}): string {
        return `json_patch('${JSON.stringify(json1)}', '${JSON.stringify(json2)}')`;
    };

    public f_json_patch_colum(json: { [key: string] : any}, column: string): string {
        return `json_patch(${column}', '${JSON.stringify(json)}')`;
    }

    /**
     * json_remove([0,1,2,3,4], '$[2]', '$[0]') => "json_remove('[0,1,2,3,4]','$[2]')"
     */
    public f_json_remove(json: { [key: string] : any} | any[], ...path: string[]): string {
        return `json_remove('${JSON.stringify(json)}', ${
            path.map((path) => (`'$.${path}'`)).join(', ')
        })`;
    };
    
    public f_json_remove_columns(column: string, ...path: string[]): string {
        return `json_remove(${column}, ${
            path.map((path) => (`'$.${path}'`)).join(', ')
        })`;
    }

    /**
     * json_replace({"a":2,"c":4}, '$.a', 99) => "json_replace('{"a":2,"c":4}', '$.a', 99)" 
     */
    public f_json_replace(json: { [key: string]: any} | any[], path: string, value: any): string { 
        return `json_replace(${JSON.stringify(json)}, ${path}, ${
            (typeof value === 'string' && value) ||
            (typeof value === 'number' && value) ||
            (typeof value === 'boolean' && `${value}`) ||
            JSON.stringify(value)
        })`;
    }

    /**
     * json_set({"a":2,"c":4}, '$.c', [97,96]) => "json_set('{"a":2,"c":4}', '$.c', [97,96])"
     */
    public f_json_set(json: { [key: string]: any} | any[], path: string, value: any): string {
        return `json_set('${JSON.stringify(json)}', ${path}, ${
            (typeof value === 'string' && value) ||
            (typeof value === 'number' && value) ||
            (typeof value === 'boolean' && `${value}`) ||
            JSON.stringify(value)
        })`;
    }

    /**
     * json_type({"a":[2,3.5,true,false,null,"x"]},'$.a[0]') => "json_type('{"a":[2,3.5,true,false,null,"x"]}', '$.a[0]')"
     */
    public f_json_type(json: { [key: string]: any}, path: string): string {
        return `json_type('${JSON.stringify(json)}', '${path}')`;
    };

    /**
     * json_valid({"x":35}) => "json_valid('{"x":35}')"
     */
    public f_json_valid(json: { [key: string]: any}): string {
        return `json_valid('${JSON.stringify(json)}')`;
    };

    /**
     * json_quote(3.14159 | 'verdant') => "json_quote(3.14159)" || "json_quote('verdant')"
     */
    public f_json_quote(value: (number | string)): string {
        return `json_quote(${
            (typeof value === 'string' && `'${value}'`) ||
            (typeof value === 'number' && `${value}`)
        })`;
    };
}

export { cSqlite }