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
Object.defineProperty(exports, "__esModule", { value: true });
var cDocument_1 = require("./cDocument");
var cSqlite_1 = require("./cSqlite");
var cPackage = (function () {
    function cPackage(packageName) {
        this._documentName = cSqlite_1.cSqlite.databaseName();
        this._packageName = packageName || cSqlite_1.cSqlite.packageName();
        this._cSqlite = new cSqlite_1.cSqlite();
        this._cSqlite
            .executeQuery(this._cSqlite
            .f_createTable(this._packageName, this._documentName)
            .f_buildRawQuery());
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
            .f_Select()
            .f_ResultColumns('*')
            .f_From(this._packageName)
            .f_limit(1)
            .f_buildRawQuery())
            .reduce(function (prev, curr) {
            return __assign(__assign({}, prev), curr);
        }, {});
    };
    cPackage.prototype.toArray = function () {
        return this._cSqlite
            .selectQuery(this._cSqlite
            .f_Select()
            .f_ResultColumns('*')
            .f_From(this._packageName)
            .f_limit(1)
            .f_buildRawQuery())
            .reduce(function (prev, obj) {
            Object.keys(obj).forEach(function (key) {
                var newObj = {};
                newObj[key] = obj[key];
                prev.push(newObj);
            });
            return prev;
        }, []);
    };
    cPackage.prototype.document = function (documentName) {
        return new cDocument_1.cDocument((documentName || this._documentName), this._packageName);
    };
    return cPackage;
}());
exports.cPackage = cPackage;
