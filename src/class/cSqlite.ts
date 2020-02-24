import { aSqliteNode } from "../abstract/aSqliteNode";
import { iSqlite } from "../interface/iStructure";

class cSqlite extends aSqliteNode implements iSqlite {
    
    constructor () {
        super();
    }

    public createTable(tableName: string): boolean {
        try {
            super.Execute(
                super.databaseName(),
                `CREATE TABLE IF NOT EXISTS some_table (id INTEGER PRIMARY KEY AUTOINCREMENT, document json)`
            );

            return true;
        } catch {
            return false;
        }
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
     * json_extract({"a":2,"c":[4,5,{"f":7}]}, '$')   => "json_extract('{"a":2,"c":[4,5,{"f":7}]}', '$')"
     */
    public f_json_extract(json: { [key: string]: any}, ...paths: string[]): string {
        return `json_extract('${JSON.stringify(json)}'${paths ? `,' ${
            paths.map((path: string) => (path)).join(',')
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

    /**
     * json_remove([0,1,2,3,4], '$[2]', '$[0]') => "json_remove('[0,1,2,3,4]','$[2]')"
     */
    public f_json_remove(json: { [key: string] : any} | any[], ...path: string[]): string {
        return `json_remove('${JSON.stringify(json)}', ${
            path.map((path) => {
                return `'${path}'`;
            }).join(', ')
        })`;
    };
    
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