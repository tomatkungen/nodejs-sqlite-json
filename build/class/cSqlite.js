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
        var _this = _super.call(this) || this;
        _this._queryBuild = [];
        return _this;
    }
    cSqlite.prototype.selectQuery = function (query) {
        console.log("> " + query);
        try {
            return _super.prototype.Select.call(this, cSqlite.databaseName(), query);
        }
        catch (e) {
            console.log("> " + e);
            return [];
        }
    };
    cSqlite.prototype.executeQuery = function (query) {
        console.log("> " + query);
        try {
            _super.prototype.Execute.call(this, cSqlite.databaseName(), query);
            return true;
        }
        catch (e) {
            console.log("> " + e);
            return false;
        }
    };
    cSqlite.prototype.addQuery = function (syntaxQuery) {
        this._queryBuild.push(syntaxQuery);
        return this;
    };
    cSqlite.prototype.addSpace = function () {
        this._queryBuild.push(' ');
        return this;
    };
    cSqlite.prototype.addLeftParenthes = function () {
        this._queryBuild.push('(');
        return this;
    };
    cSqlite.prototype.addRightParenthes = function () {
        this._queryBuild.push(')');
        return this;
    };
    cSqlite.prototype.getQuery = function () {
        return this._queryBuild.join('');
    };
    cSqlite.prototype.initQuery = function () {
        this._queryBuild = [];
        return this;
    };
    cSqlite.prototype.f_buildRawQuery = function () {
        return this.getQuery();
    };
    ;
    cSqlite.prototype.f_Select = function () {
        var columns = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            columns[_i] = arguments[_i];
        }
        this.initQuery()
            .addQuery('SELECT')
            .addSpace()
            .addQuery(columns.join(', '));
        return this;
    };
    cSqlite.prototype.f_as = function (alias) {
        this.addSpace()
            .addQuery('AS')
            .addSpace()
            .addQuery(alias);
        return this;
    };
    cSqlite.prototype.f_From = function (table) {
        this.addSpace()
            .addQuery('FROM')
            .addSpace()
            .addQuery(table);
        return this;
    };
    cSqlite.prototype.f_limit = function (upperBound) {
        this.addSpace()
            .addQuery('LIMIT')
            .addSpace()
            .addQuery("" + upperBound);
        return this;
    };
    cSqlite.prototype.f_createTable = function (table) {
        var columns = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            columns[_i - 1] = arguments[_i];
        }
        this.initQuery()
            .addQuery('CREATE TABLE IF NOT EXISTS')
            .addSpace()
            .addQuery(table)
            .addSpace()
            .addLeftParenthes()
            .addQuery(columns.join(', '))
            .addRightParenthes();
        return this;
    };
    cSqlite.prototype.f_alterTableAddColumn = function (table) {
        this.initQuery()
            .addQuery('ALTER TABLE')
            .addSpace()
            .addQuery(table);
        return this;
    };
    cSqlite.prototype.f_AddColumn = function (columnDefinition) {
        this.addSpace()
            .addQuery('ADD COLUMN')
            .addSpace()
            .addQuery(columnDefinition);
        return this;
    };
    cSqlite.prototype.f_insertIntoTable = function (table) {
        var columns = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            columns[_i - 1] = arguments[_i];
        }
        this.initQuery()
            .addQuery('INSERT INTO')
            .addSpace()
            .addQuery(table)
            .addSpace()
            .addLeftParenthes()
            .addQuery(columns.join(', '))
            .addRightParenthes();
        return this;
    };
    cSqlite.prototype.f_values = function () {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        this.addSpace()
            .addQuery('VALUES')
            .addSpace()
            .addLeftParenthes()
            .addQuery(values.join(', '))
            .addRightParenthes();
        return this;
    };
    cSqlite.prototype.f_pragmaInfo = function (table) {
        this.initQuery()
            .addQuery('PRAGMA')
            .addSpace()
            .addQuery('table_info')
            .addLeftParenthes()
            .addQuery(table)
            .addRightParenthes();
        return this;
    };
    cSqlite.prototype.f_updateTable = function (table) {
        this.initQuery()
            .addQuery('UPDATE')
            .addSpace()
            .addQuery(table);
        return this;
    };
    cSqlite.prototype.f_setColumn = function (column, expr) {
        this.addSpace()
            .addQuery('SET')
            .addSpace()
            .addQuery(column)
            .addSpace()
            .addQuery('=')
            .addSpace()
            .addQuery(expr);
        return this;
    };
    cSqlite.prototype.f_whereExpr = function (expr) {
        this.addSpace()
            .addQuery('WHERE')
            .addSpace()
            .addQuery(expr);
        return this;
    };
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
        return "json_array_length('" + JSON.stringify(json) + "'" + (path && typeof path === 'string' && ", '$." + path + "'" ||
            path && typeof path === 'number' && ", '$[" + path + "]'" ||
            '') + ")";
    };
    cSqlite.prototype.f_json_extract = function (json) {
        var paths = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            paths[_i - 1] = arguments[_i];
        }
        return "json_extract('" + JSON.stringify(json) + "', " + paths.map(function (path) { return (typeof path === 'string' && "'$." + path + "'" ||
            typeof path === 'number' && "'$[" + path + "]'"); }).join(', ') + ")'";
    };
    cSqlite.prototype.f_json_extract_column = function (column) {
        var paths = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            paths[_i - 1] = arguments[_i];
        }
        return "json_extract(" + column + ", " + paths.map(function (path) { return (typeof path === 'string' && "'$." + path + "'" ||
            typeof path === 'number' && "'$[" + path + "]'"); }).join(', ') + ")";
    };
    cSqlite.prototype.f_json_insert = function (json, path, value) {
        return "json_insert(" + JSON.stringify(json) + ", '$." + path + "', " + ((typeof value === 'string' && value) ||
            (typeof value === 'number' && value) ||
            (typeof value === 'boolean' && "" + value) ||
            (Array.isArray(value)) && "json('" + value + "')" ||
            "JSON('" + JSON.stringify(value) + ")'") + ")";
    };
    cSqlite.prototype.f_json_insert_column = function (column, path, value) {
        return "json_insert(" + column + ", '$." + path + "', " + ((typeof value === 'string' && value) ||
            (typeof value === 'number' && value) ||
            (typeof value === 'boolean' && "" + value) ||
            (Array.isArray(value)) && "json('" + value + "')" ||
            "'" + JSON.stringify(value) + "'") + ")";
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
    cSqlite.prototype.f_json_patch_colum = function (json, column) {
        return "json_patch(" + column + ", '" + JSON.stringify(json) + "')";
    };
    cSqlite.prototype.f_json_remove = function (json) {
        var path = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            path[_i - 1] = arguments[_i];
        }
        return "json_remove('" + JSON.stringify(json) + "', " + path.map(function (path) { return (typeof path === 'string' && "'$." + path + "'" ||
            typeof path === 'number' && "'$[" + path + "]'"); }).join(', ') + ")";
    };
    ;
    cSqlite.prototype.f_json_remove_columns = function (column) {
        var path = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            path[_i - 1] = arguments[_i];
        }
        return "json_remove(" + column + ", " + path.map(function (path) { return (typeof path === 'string' && "'$." + path + "'" ||
            typeof path === 'number' && "'$[" + path + "]'"); }).join(', ') + ")";
    };
    cSqlite.prototype.f_json_remove_columns_property = function (column, property) {
        var path = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            path[_i - 2] = arguments[_i];
        }
        return "json_remove(" + column + ", " + path.map(function (path) { return (typeof path === 'number' && "'$." + property + "[" + path + "]'"); }).join(', ') + ")";
    };
    cSqlite.prototype.f_json_replace = function (json, path, value) {
        return "json_replace(" + JSON.stringify(json) + ", '$." + path + "', " + ((typeof value === 'string' && value) ||
            (typeof value === 'number' && value) ||
            (typeof value === 'boolean' && "" + value) ||
            (Array.isArray(value)) && "json('" + value + "')" ||
            "'" + JSON.stringify(value) + "'") + ")";
    };
    cSqlite.prototype.f_json_replace_column = function (column, path, value) {
        return "json_replace(" + column + ", '$." + path + "', " + ((typeof value === 'string' && value) ||
            (typeof value === 'number' && value) ||
            (typeof value === 'boolean' && "" + value) ||
            (Array.isArray(value)) && "json('" + value + "')" ||
            "'" + JSON.stringify(value) + "'") + ")";
    };
    cSqlite.prototype.f_json_set = function (json, path, value) {
        return "json_set('" + JSON.stringify(json) + "', '$." + path + "', " + ((typeof value === 'string' && value) ||
            (typeof value === 'number' && value) ||
            (typeof value === 'boolean' && "" + value) ||
            (Array.isArray(value)) && "json('" + value + "')" ||
            "'" + JSON.stringify(value) + "'") + ")";
    };
    cSqlite.prototype.f_json_set_column = function (column, path, value) {
        return "json_set(" + column + ", '$." + path + "', " + ((typeof value === 'string' && value) ||
            (typeof value === 'number' && value) ||
            (typeof value === 'boolean' && "" + value) ||
            (Array.isArray(value)) && "json('" + value + "')" ||
            "'" + JSON.stringify(value) + "'") + ")";
    };
    cSqlite.prototype.f_json_set_column_array_end = function (column, path, value) {
        return "json_set(" + column + ", '$." + path + "[' || json_array_length(" + column + ", '$." + path + "') || ']', " + ((typeof value === 'string' && value) ||
            (typeof value === 'number' && value) ||
            (typeof value === 'boolean' && "" + value) ||
            (Array.isArray(value)) && "json('" + value + "')" ||
            "'" + JSON.stringify(value) + "'") + ")";
    };
    cSqlite.prototype.f_json_type = function (json, path) {
        return "json_type('" + JSON.stringify(json) + "', '$." + path + "')";
    };
    ;
    cSqlite.prototype.f_json_type_column = function (column, path) {
        return "json_type(" + column + ", '$." + path + "')";
    };
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
