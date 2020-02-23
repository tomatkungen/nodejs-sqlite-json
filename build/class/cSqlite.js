"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var aSqliteNode_1 = require("../abstract/aSqliteNode");
var cSqlite = (function (_super) {
    __extends(cSqlite, _super);
    function cSqlite() {
        return _super.call(this) || this;
    }
    cSqlite.prototype.f_json = function (json) {
        return "json('" + JSON.stringify(json) + "')";
    };
    cSqlite.prototype.f_json_array = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return "json_array(" + args.map(function (arg) { return ((typeof arg === 'string' && "'" + arg + "'") ||
            (typeof arg === 'number' && arg) ||
            arg); }) + ")";
    };
    cSqlite.prototype.f_json_array_length = function (json, path) {
        return "json_array_length('" + JSON.stringify(json) + "' " + (path ? ",' " + path + "'" : '') + ")";
    };
    cSqlite.prototype.f_json_extract = function (json) {
        var paths = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            paths[_i - 1] = arguments[_i];
        }
        return "json_extract('" + JSON.stringify(json) + "'" + (paths ? ",' " + paths.map(function (path) { return (path); }).join(',') + "'" : '') + ")";
    };
    cSqlite.prototype.f_json_insert = function (json, path, value) {
        return "json_insert(" + JSON.stringify(json) + ", " + path + ", " + ((typeof value === 'string' && value) ||
            (typeof value === 'number' && value) ||
            (typeof value === 'boolean' && "" + value) ||
            JSON.stringify(value)) + ")";
    };
    cSqlite.prototype.f_json_object = function (json) {
        return "json_object(" + Object.keys(json).reduce(function (ary, key) {
            ary.push("'" + key + "'");
            ary.push(JSON.stringify(json[key]));
            return ary;
        }, []).join(', ') + ")";
    };
    ;
    cSqlite.prototype.f_json_patch = function (json1, json2) {
        return "json_patch('" + JSON.stringify(json1) + "', '" + JSON.stringify(json2) + "')";
    };
    ;
    cSqlite.prototype.f_json_remove = function (json) {
        var path = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            path[_i - 1] = arguments[_i];
        }
        return "json_remove('" + JSON.stringify(json) + "', " + path.map(function (path) {
            return "'" + path + "'";
        }).join(', ') + ")";
    };
    ;
    cSqlite.prototype.f_json_replace = function (json, path, value) {
        return "json_replace(" + JSON.stringify(json) + ", " + path + ", " + ((typeof value === 'string' && value) ||
            (typeof value === 'number' && value) ||
            (typeof value === 'boolean' && "" + value) ||
            JSON.stringify(value)) + ")";
    };
    cSqlite.prototype.f_json_set = function (json, path, value) {
        return "json_set('" + JSON.stringify(json) + "', " + path + ", " + ((typeof value === 'string' && value) ||
            (typeof value === 'number' && value) ||
            (typeof value === 'boolean' && "" + value) ||
            JSON.stringify(value)) + ")";
    };
    cSqlite.prototype.f_json_type = function (json, path) {
        return "json_type('" + JSON.stringify(json) + "', '" + path + "')";
    };
    ;
    cSqlite.prototype.f_json_valid = function (json) {
        return "json_valid('" + JSON.stringify(json) + "')";
    };
    ;
    cSqlite.prototype.f_json_quote = function (value) {
        return "json_quote(" + ((typeof value === 'string' && "'" + value + "'") ||
            (typeof value === 'number' && "" + value)) + ")";
    };
    ;
    return cSqlite;
}(aSqliteNode_1.aSqliteNode));
exports.cSqlite = cSqlite;
