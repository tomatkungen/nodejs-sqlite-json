"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cDocument_1 = require("../class/cDocument");
var cPackage_1 = require("../class/cPackage");
var nDocument;
(function (nDocument) {
    nDocument.create = function (documentName) {
        return new cDocument_1.cDocument(documentName);
    };
    nDocument.document = function (documentName) {
        return new cDocument_1.cDocument(documentName);
    };
    nDocument.createPackage = function (packageName) {
        return new cPackage_1.cPackage(packageName);
    };
})(nDocument || (nDocument = {}));
exports.nDocument = nDocument;
