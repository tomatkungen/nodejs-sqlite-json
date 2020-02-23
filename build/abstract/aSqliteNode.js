"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var sqliteBridge = __importStar(require("../addon/sqlitebridge"));
var aSqliteNode = (function () {
    function aSqliteNode() {
    }
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
