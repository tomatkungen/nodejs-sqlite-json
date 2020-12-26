"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.nDocument = void 0;
var cDocument_1 = require("../class/cDocument");
var cPackage_1 = require("../class/cPackage");
var nDocument;
(function (nDocument) {
    nDocument.Package = function (packageName) {
        var documentNames = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            documentNames[_i - 1] = arguments[_i];
        }
        return (new (cPackage_1.cPackage.bind.apply(cPackage_1.cPackage, __spreadArrays([void 0, packageName], documentNames)))());
    };
    nDocument.Document = function (documentName, packageName) {
        return (new cDocument_1.cDocument(documentName, packageName));
    };
})(nDocument || (nDocument = {}));
exports.nDocument = nDocument;
