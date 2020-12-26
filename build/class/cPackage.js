"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cPackage = void 0;
var cDocument_1 = require("./cDocument");
var cSqlite_1 = require("./cSqlite");
var cPackage = (function () {
    function cPackage(packageName) {
        var _a;
        var documentNames = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            documentNames[_i - 1] = arguments[_i];
        }
        this._documentName = cSqlite_1.cSqlite.documentName();
        this._packageName = packageName || cSqlite_1.cSqlite.packageName();
        this._cSqlite = new cSqlite_1.cSqlite();
        this._cSqlite
            .executeQuery((_a = this._cSqlite)
            .f_createTable.apply(_a, __spreadArrays([this._packageName], __spreadArrays(cSqlite_1.cSqlite.columns(), [
            this._documentName + " json"
        ], documentNames.map(function (documentName) { return documentName + " json"; })))).f_buildRawQuery());
    }
    cPackage.prototype.add = function () {
        var _this = this;
        var documentName = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            documentName[_i] = arguments[_i];
        }
        documentName.forEach(function (docName) {
            _this._cSqlite
                .executeQuery(_this._cSqlite
                .f_alterTableAddColumn(_this._packageName)
                .f_AddColumn(docName + " json")
                .f_buildRawQuery());
        });
        return this;
    };
    cPackage.prototype.toJson = function () {
        return this._cSqlite
            .selectQuery(this._cSqlite
            .f_Select('*')
            .f_From(this._packageName)
            .f_limit(1)
            .f_buildRawQuery())
            .reduce(function (prev, curr) {
            Object.keys(curr).forEach(function (key) { curr[key] = JSON.parse(curr[key]); });
            return __assign(__assign({}, prev), curr);
        }, {});
    };
    cPackage.prototype.toArray = function () {
        return this._cSqlite
            .selectQuery(this._cSqlite
            .f_Select('*')
            .f_From(this._packageName)
            .f_limit(1)
            .f_buildRawQuery())
            .reduce(function (prev, obj) {
            Object.keys(obj).forEach(function (key) {
                var newObj = {};
                newObj[key] = JSON.parse(obj[key]);
                prev.push(newObj);
            });
            return prev;
        }, []);
    };
    cPackage.prototype.Document = function (documentName) {
        if (documentName === void 0) { documentName = this._documentName; }
        return new cDocument_1.cDocument(documentName, this._packageName);
    };
    return cPackage;
}());
exports.cPackage = cPackage;
