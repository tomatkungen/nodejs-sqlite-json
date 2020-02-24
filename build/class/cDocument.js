"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cKey_1 = require("./cKey");
var cSqlite_1 = require("./cSqlite");
var cDocument = (function () {
    function cDocument(document) {
        if (document === void 0) { document = 'document'; }
        this._documentName = document;
        this._packageName = 'package';
        this._cSqlite = new cSqlite_1.cSqlite();
    }
    cDocument.prototype.merge = function (json) { return this; };
    cDocument.prototype.document = function (documentName) { return this; };
    cDocument.prototype.toJson = function () { return {}; };
    cDocument.prototype.append = function (json) {
        return true;
    };
    cDocument.prototype.removeKey = function (key) { return true; };
    cDocument.prototype.removeKeys = function (keys) { return true; };
    cDocument.prototype.property = function (key) {
        return new cKey_1.cKey(key);
    };
    return cDocument;
}());
exports.cDocument = cDocument;
