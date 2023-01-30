"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Patch = exports.Put = exports.Delete = exports.Post = exports.Get = exports.RequestParam = exports.RequestBody = exports.RestController = exports.repository = exports.json = exports.cast = exports.swaggerIgnore = void 0;
function swaggerIgnore(target, propertyKey, index) { }
exports.swaggerIgnore = swaggerIgnore;
function cast(target, propertyKey, index) { }
exports.cast = cast;
function json(callback, name) {
    return function (target, propertyKey) { };
}
exports.json = json;
function repository(target, propertyKey, index) { }
exports.repository = repository;
function RestController(path) {
    return function (target) { };
}
exports.RestController = RestController;
function RequestBody(target, methodName, index) { }
exports.RequestBody = RequestBody;
function RequestParam(name) { return function (target, methodName, index) { }; }
exports.RequestParam = RequestParam;
function Get(path) { return function (target, methodName, descriptor) { }; }
exports.Get = Get;
;
function Post(path) { return function (target, methodName, descriptor) { }; }
exports.Post = Post;
;
function Delete(path) { return function (target, methodName, descriptor) { }; }
exports.Delete = Delete;
;
function Put(path) { return function (target, methodName, descriptor) { }; }
exports.Put = Put;
;
function Patch(path) { return function (target, methodName, descriptor) { }; }
exports.Patch = Patch;
