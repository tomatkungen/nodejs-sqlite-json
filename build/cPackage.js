"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cDocument_1 = require("./cDocument");
var cPackageDocument = (function () {
    function cPackageDocument() {
    }
    cPackageDocument.prototype.toJson = function () { };
    cPackageDocument.prototype.toArray = function () { };
    cPackageDocument.prototype.getDocument = function (documentName) {
        return new cDocument_1.cDocument(documentName);
    };
    return cPackageDocument;
}());
exports.cPackageDocument = cPackageDocument;
