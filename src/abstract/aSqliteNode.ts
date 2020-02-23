import { iSqliteNode } from "../interface/iStructure";
import * as sqliteBridge from '../addon/sqlitebridge';

class aSqliteNode implements iSqliteNode {
    constructor() {}

    public Version(): string {
        return sqliteBridge.Version();
    }

    public Execute(database: string ,rawQuery: string): any {
        return sqliteBridge.Execute(database, rawQuery);
    };

    public Select(database: string, rawQuery: string): any {
        return sqliteBridge.Select(database, rawQuery);
    };
}

export { aSqliteNode };