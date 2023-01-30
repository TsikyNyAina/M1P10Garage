"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
const mongodb_1 = require("mongodb");
const decorator_1 = require("../decorator");
class Entity {
    constructor() {
        Object.defineProperty(Entity.prototype, "_id", {
            set: function (id) {
                this.id = id;
            },
            configurable: true
        });
        Object.defineProperty(Entity.prototype, "id", {
            set: function (id) {
                if (typeof id === "string")
                    id = mongodb_1.ObjectId.createFromHexString(id);
                Object.defineProperty(this, "id", {
                    value: id,
                    enumerable: true,
                    configurable: true
                });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Entity.prototype, "insertedId", {
            set: function (id) {
                this.id = id;
            },
            configurable: true
        });
        Object.defineProperty(Entity.prototype, "acknowledged", {
            set: function (id) {
            },
            configurable: true,
            enumerable: false
        });
    }
}
__decorate([
    decorator_1.swaggerIgnore,
    __metadata("design:type", mongodb_1.ObjectId)
], Entity.prototype, "id", void 0);
exports.Entity = Entity;
