"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.aSqliteNode = void 0;
var sqliteBridge = __importStar(require("../addon/sqlitebridge"));
var aSqliteNode = (function () {
    function aSqliteNode() {
    }
    aSqliteNode.databaseName = function () {
        return 'sandra.db';
    };
    aSqliteNode.packageName = function () {
        return 'package';
    };
    aSqliteNode.documentName = function () {
        return 'document';
    };
    aSqliteNode.idColumn = function () {
        return 'id';
    };
    aSqliteNode.columns = function () {
        return [
            'id INTEGER PRIMARY KEY AUTOINCREMENT',
        ];
    };
    aSqliteNode.prototype.Version = function () {
        return sqliteBridge.Version();
    };
    aSqliteNode.prototype.Execute = function (database, rawQuery) {
        return sqliteBridge.Execute(database, rawQuery);
    };
    ;
    aSqliteNode.prototype.Select = function (database, rawQuery) {
        return sqliteBridge.Select(database, rawQuery);
    };
    ;
    return aSqliteNode;
}());
exports.aSqliteNode = aSqliteNode;
