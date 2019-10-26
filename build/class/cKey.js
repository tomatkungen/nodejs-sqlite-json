"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cKey = (function () {
    function cKey(key) {
        this.key = key;
    }
    cKey.prototype.value = function () { return ''; };
    cKey.prototype.insert = function (json) { return true; };
    cKey.prototype.replace = function (json) { return true; };
    cKey.prototype.set = function (json) { return true; };
    cKey.prototype.removeKey = function (key) { return true; };
    cKey.prototype.removeKeys = function (key) { return true; };
    cKey.prototype.removeAtIndex = function (index) { return true; };
    cKey.prototype.removeAtIndexs = function (index) { return true; };
    cKey.prototype.valueType = function () { return 'object'; };
    return cKey;
}());
exports.cKey = cKey;
