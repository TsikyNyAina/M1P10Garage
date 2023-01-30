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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const mongodb_1 = require("mongodb");
const Entity_1 = require("./Entity");
const decorator_1 = require("../decorator");
const util_1 = require("../util");
const relation_1 = require("../relation");
class Client extends Entity_1.Entity {
    save(db) {
        return __awaiter(this, void 0, void 0, function* () {
            return Object.assign(this, yield db.collection("client").insertOne({
                name: this.name,
                email: this.email,
                phoneNumber: this.phoneNumber,
                mdp: this.mdp
            }));
        });
    }
    static getAll(db, pipeline = new Array()) {
        return __awaiter(this, void 0, void 0, function* () {
            const collection = db.collection("client");
            return collection.aggregate([relation_1.relationVoiture, ...pipeline]).toArray().then(m => (0, util_1.assignArray)(Client, m));
        });
    }
    update(db) {
        return __awaiter(this, void 0, void 0, function* () {
            const collection = db.collection("client");
            yield collection.updateOne({ _id: this.id }, {
                $set: {
                    name: this.name,
                    email: this.email,
                    phoneNumber: this.phoneNumber,
                    mdp: this.mdp,
                }
            });
            return this;
        });
    }
    delete(db) {
        const collection = db.collection("client");
        return collection.deleteOne({ _id: this.id });
    }
    static getById(db, id) {
        return Client.getAll(db, [
            {
                $match: {
                    _id: mongodb_1.ObjectId.createFromHexString(id)
                }
            }
        ]);
    }
}
__decorate([
    decorator_1.swaggerIgnore,
    decorator_1.cast,
    __metadata("design:type", Array)
], Client.prototype, "voiture", void 0);
exports.Client = Client;
