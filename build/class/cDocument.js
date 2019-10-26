"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cPackage_1 = require("./cPackage");
var cKey_1 = require("./cKey");
var cDocument = (function () {
    function cDocument(documentName) {
        this.documentName = documentName;
    }
    cDocument.prototype.create = function (documentName) { return this; };
    cDocument.prototype.merge = function (json) { return this; };
    cDocument.prototype.getDocument = function (documentName) { return this; };
    cDocument.prototype.toJson = function () { return {}; };
    cDocument.prototype.append = function (json) { return true; };
    cDocument.prototype.removeKey = function (key) { return true; };
    cDocument.prototype.removeKeys = function (keys) { return true; };
    cDocument.prototype.package = function (packageName) {
        return new cPackage_1.cPackage();
    };
    ;
    cDocument.prototype.property = function (key) {
        return new cKey_1.cKey(key);
    };
    return cDocument;
}());
exports.cDocument = cDocument;
