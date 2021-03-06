"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cDocument = void 0;
var cProperty_1 = require("./cProperty");
var cSqlite_1 = require("./cSqlite");
var cDocument = (function () {
    function cDocument(documentName, packageName) {
        var _a;
        this._cSqlite = new cSqlite_1.cSqlite();
        this._documentName = documentName || cSqlite_1.cSqlite.databaseName();
        this._packageName = packageName || cSqlite_1.cSqlite.packageName();
        this._cSqlite
            .executeQuery((_a = this._cSqlite)
            .f_createTable.apply(_a, __spreadArrays([this._packageName], __spreadArrays(cSqlite_1.cSqlite.columns(), [
            this._documentName + " json"
        ]))).f_buildRawQuery());
    }
    cDocument.prototype.merge = function (json) {
        return this._cSqlite.executeQuery(this._cSqlite
            .f_updateTable(this._packageName)
            .f_setColumn(this._documentName, this._cSqlite.f_json_patch_colum(json, this._documentName)).f_buildRawQuery());
    };
    cDocument.prototype.toJson = function () {
        var select = this._cSqlite.selectQuery(this._cSqlite
            .f_select(this._documentName)
            .f_from(this._packageName)
            .f_limit(1)
            .f_buildRawQuery());
        return (Array.isArray(select) && select.length === 0 ?
            null :
            JSON.parse(select[0][this._documentName]));
    };
    cDocument.prototype.append = function (json) {
        return this._cSqlite.executeQuery(this._cSqlite
            .f_insertOrIgnoreIntoTable(this._packageName, cSqlite_1.cSqlite.idColumn(), this._documentName)
            .f_values('1', "'" + JSON.stringify(json) + "'")
            .f_onConflictDo(cSqlite_1.cSqlite.idColumn())
            .f_update()
            .f_setColumn(this._documentName, "'" + JSON.stringify(json) + "'")
            .f_whereExpr(cSqlite_1.cSqlite.idColumn() + " = 1")
            .f_andExpr(this._documentName)
            .f_isNull()
            .f_buildRawQuery());
    };
    cDocument.prototype.removeProperty = function (property) {
        return this._cSqlite.executeQuery(this._cSqlite
            .f_updateTable(this._packageName)
            .f_setColumn(this._documentName, this._cSqlite
            .f_json_remove_columns(this._documentName, property))
            .f_buildRawQuery());
    };
    cDocument.prototype.removePropertys = function () {
        var _a;
        var propertys = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            propertys[_i] = arguments[_i];
        }
        return this._cSqlite.executeQuery(this._cSqlite
            .f_updateTable(this._packageName)
            .f_setColumn(this._documentName, (_a = this._cSqlite)
            .f_json_remove_columns.apply(_a, __spreadArrays([this._documentName], propertys))).f_buildRawQuery());
    };
    cDocument.prototype.property = function (property) {
        return new cProperty_1.cProperty(property, this._documentName, this._packageName);
    };
    return cDocument;
}());
exports.cDocument = cDocument;
