"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cProperty = (function () {
    function cProperty(property) {
        this._property = property;
    }
    cProperty.prototype.Property = function (property) {
        return new cProperty(this._property + "." + property);
    };
    cProperty.prototype.value = function () {
        return '';
    };
    cProperty.prototype.insert = function (json) { return true; };
    cProperty.prototype.replace = function (json) { return true; };
    cProperty.prototype.set = function (json) { return true; };
    cProperty.prototype.removeKey = function (property) { return true; };
    cProperty.prototype.removeKeys = function (property) { return true; };
    cProperty.prototype.removeAtIndex = function (index) { return true; };
    cProperty.prototype.removeAtIndexs = function (index) { return true; };
    cProperty.prototype.valueType = function () { return 'object'; };
    return cProperty;
}());
exports.cProperty = cProperty;
