"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cDocument_1 = require("./cDocument");
var cPackage = (function () {
    function cPackage() {
    }
    cPackage.prototype.toJson = function () { return {}; };
    cPackage.prototype.toArray = function () { return []; };
    cPackage.prototype.getDocument = function (documentName) {
        return new cDocument_1.cDocument(documentName);
    };
    return cPackage;
}());
exports.cPackage = cPackage;