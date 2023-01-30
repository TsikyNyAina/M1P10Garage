"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assignArray = exports.assign = void 0;
function assign(model, value) {
    return Object.assign(new model(), value);
}
exports.assign = assign;
function assignArray(model, value) {
    let rep = new Array();
    for (let v of value)
        rep.push(assign(model, v));
    return rep;
}
exports.assignArray = assignArray;
