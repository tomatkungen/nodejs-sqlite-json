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
        var select = this._cSqlite.selectQuery(this._cSqlite
            .f_Select(this._cSqlite
            .f_json_extract_column(this._documentName, this._property))
            .f_as(this._documentName)
            .f_From(this._packageName)
            .f_buildRawQuery());
        return (Array.isArray(select) && select.length === 0 ?
            null :
            JSON.parse(select[0][this._documentName]));
    };
    cProperty.prototype.insert = function (json) {
        return this._cSqlite.executeQuery(this._cSqlite
            .f_updateTable(this._packageName)
            .f_setColumn(this._documentName, this._cSqlite.f_json_insert_column(this._documentName, this._property, this._cSqlite.f_json(json))).f_buildRawQuery());
    };
    cProperty.prototype.replace = function (json) {
        return this._cSqlite.executeQuery(this._cSqlite
            .f_updateTable(this._packageName)
            .f_setColumn(this._documentName, this._cSqlite
            .f_json_replace_column(this._documentName, this._property, this._cSqlite.f_json(json))).f_buildRawQuery());
    };
    cProperty.prototype.set = function (json) {
        return this._cSqlite.executeQuery(this._cSqlite
            .f_updateTable(this._packageName)
            .f_setColumn(this._documentName, this._cSqlite
            .f_json_set_column(this._documentName, this._property, this._cSqlite.f_json(json))).f_buildRawQuery());
    };
    cProperty.prototype.removeProperty = function (property) {
        return this.removePropertys(property);
    };
    cProperty.prototype.removePropertys = function () {
        var _a;
        var propertys = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            propertys[_i] = arguments[_i];
        }
        return this._cSqlite.executeQuery(this._cSqlite
            .f_updateTable(this._packageName)
            .f_setColumn(this._documentName, (_a = this._cSqlite).f_json_remove_columns.apply(_a, __spreadArrays([this._documentName], propertys)))
            .f_buildRawQuery());
    };
    cProperty.prototype.pushEnd = function (json) {
        return this._cSqlite.executeQuery(this._cSqlite
            .f_updateTable(this._packageName)
            .f_setColumn(this._documentName, this._cSqlite.f_json_set_column_array_end(this._documentName, this._property, this._cSqlite.f_json(json)))
            .f_buildRawQuery());
    };
    cProperty.prototype.removeAtIndex = function (index) {
        return this.removeAtIndexes(index);
    };
    cProperty.prototype.removeAtIndexes = function () {
        var _a;
        var indexes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            indexes[_i] = arguments[_i];
        }
        return this._cSqlite.executeQuery(this._cSqlite
            .f_updateTable(this._packageName)
            .f_setColumn(this._documentName, (_a = this._cSqlite).f_json_remove_columns_property.apply(_a, __spreadArrays([this._documentName,
            this._property], indexes)))
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
