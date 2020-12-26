import { iSqliteNode } from "../interface/iStructure";
import * as sqliteBridge from '../addon/sqlitebridge';

class aSqliteNode implements iSqliteNode, iSqliteNode {
    constructor() {}

    public static databaseName(): string {
        return 'sandra.db';
    }

    public static packageName(): string {
        return 'package';
    }

    public static documentName(): string {
        return 'document';
    }

    public static idColumn(): string {
        return 'id';
    }

    public static columns(): string[] {
        return [
            'id INTEGER PRIMARY KEY AUTOINCREMENT',
            // 'create NOT NULL DEFAULT CURRENT_TIMESTAMP'
        ];
    }

    public Version(): string {
        return sqliteBridge.Version();
    }

    public Execute(database: string ,rawQuery: string): any {
        return sqliteBridge.Execute(database, rawQuery);
    };

    public Select(database: string, rawQuery: string): any[] {
        return sqliteBridge.Select(database, rawQuery);
    };

}

export { aSqliteNode };