"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var cSqlite_1 = require("./cSqlite");
var cProperty = (function () {
    function cProperty(property, documentName, packageName) {
        this._cSqlite = new cSqlite_1.cSqlite();
        this._packageName = packageName;
        this._documentName = documentName;
        this._property = property;
    }
    cProperty.prototype.Property = function (property) {
        return new cProperty(this._property + "." + property, this._packageName, this._documentName);
    };
    cProperty.prototype.value = function () {
        return this._cSqlite.selectQuery(this._cSqlite
            .f_Select(this._cSqlite
            .f_json_extract_column(this._documentName, this._property))
            .f_From(this._packageName)
            .f_buildRawQuery());
    };
    cProperty.prototype.insert = function (json) {
        return this._cSqlite.executeQuery(this._cSqlite
            .f_insertIntoTable(this._packageName, this._documentName)
            .f_values(this._cSqlite.f_json_insert_column(this._documentName, this._property, json)).f_buildRawQuery());
    };
    cProperty.prototype.replace = function (json) {
        return this._cSqlite.executeQuery(this._cSqlite
            .f_insertIntoTable(this._packageName, this._property)
            .f_values(this._cSqlite
            .f_json_replace_column(this._documentName, this._property, json)).f_buildRawQuery());
    };
    cProperty.prototype.set = function (json) {
        return this._cSqlite.executeQuery(this._cSqlite
            .f_insertIntoTable(this._packageName, this._property)
            .f_values(this._cSqlite
            .f_json_set_column(this._documentName, this._property, json)).f_buildRawQuery());
    };
    cProperty.prototype.removeKey = function (property) {
        return this.removeKeys(property);
    };
    cProperty.prototype.removeKeys = function () {
        var _a;
        var propertys = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            propertys[_i] = arguments[_i];
        }
        return this._cSqlite.executeQuery(this._cSqlite
            .f_insertIntoTable(this._packageName, this._documentName)
            .f_values((_a = this._cSqlite).f_json_remove_columns.apply(_a, __spreadArrays([this._documentName], propertys)))
            .f_buildRawQuery());
    };
    cProperty.prototype.removeAtIndex = function (index) {
        return this.removeAtIndexs(index);
    };
    cProperty.prototype.removeAtIndexs = function () {
        var _a;
        var indexes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            indexes[_i] = arguments[_i];
        }
        return this._cSqlite.executeQuery(this._cSqlite
            .f_insertIntoTable(this._packageName, this._documentName)
            .f_values((_a = this._cSqlite).f_json_remove_columns.apply(_a, __spreadArrays([this._documentName], indexes)))
            .f_buildRawQuery());
    };
    cProperty.prototype.valueType = function () {
        return this._cSqlite.selectQuery(this._cSqlite
            .f_Select(this._cSqlite
            .f_json_type_column(this._documentName, this._property))
            .f_as('TYPE')
            .f_From(this._packageName)
            .f_buildRawQuery())[0]['TYPE'];
    };
    return cProperty;
}());
exports.cProperty = cProperty;