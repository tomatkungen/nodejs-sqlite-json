"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cDocument_1 = require("../class/cDocument");
var cPackage_1 = require("../class/cPackage");
var nDocument;
(function (nDocument) {
    nDocument.Document = function (documentName) {
        return (new cDocument_1.cDocument(documentName));
    };
    nDocument.Package = function (packageName) {
        return (new cPackage_1.cPackage(packageName));
    };
})(nDocument || (nDocument = {}));
exports.nDocument = nDocument;
