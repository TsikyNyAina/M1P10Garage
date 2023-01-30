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
exports.Voiture = void 0;
const Entity_1 = require("./Entity");
const decorator_1 = require("../decorator");
const mongodb_1 = require("mongodb");
const ModelVoiture_1 = require("./ModelVoiture");
const Client_1 = require("./Client");
const util_1 = require("../util");
const relation_1 = require("../relation");
class Voiture extends Entity_1.Entity {
    save(db) {
        return __awaiter(this, void 0, void 0, function* () {
            const collection = db.collection("voiture");
            return Object.assign(this, yield collection.insertOne({
                modelVoitureId: this.modelVoitureId,
                year: this.year,
                numero: this.numero,
                clientId: this.clientId
            }));
        });
    }
    static getById(db, id) {
        return Client_1.Client.getAll(db, [
            {
                $match: {
                    _id: mongodb_1.ObjectId.createFromHexString(id)
                }
            }
        ]);
    }
    static getAll(db, pipeline = new Array()) {
        const collection = db.collection("voiture");
        return collection.aggregate([...relation_1.modelVoitureRelation, ...relation_1.clientRelation, ...relation_1.reparationRelation2, ...pipeline]).toArray().then(m => (0, util_1.assignArray)(Voiture, m));
    }
    update(db) {
        return __awaiter(this, void 0, void 0, function* () {
            const collection = db.collection("voiture");
            yield collection.updateOne({ _id: this.id }, {
                $set: {
                    year: this.year,
                    numero: this.numero,
                    clientId: this.clientId,
                    modelVoitureId: this.modelVoitureId,
                }
            });
            return this;
        });
    }
    delete(db) {
        const collection = db.collection("voiture");
        return collection.deleteOne({ _id: this.id });
    }
    constructor() {
        super();
        Object.defineProperty(Entity_1.Entity.prototype, "modelVoitureId", {
            set: function (id) {
                if (typeof id === "string")
                    id = mongodb_1.ObjectId.createFromHexString(id);
                Object.defineProperty(this, "modelVoitureId", {
                    value: id,
                    enumerable: true,
                    configurable: true,
                    writable: true
                });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Entity_1.Entity.prototype, "clientId", {
            set: function (id) {
                if (typeof id === "string")
                    id = mongodb_1.ObjectId.createFromHexString(id);
                Object.defineProperty(this, "clientId", {
                    value: id,
                    enumerable: true,
                    configurable: true,
                    writable: true
                });
            },
            enumerable: true,
            configurable: true
        });
    }
}
__decorate([
    decorator_1.swaggerIgnore,
    decorator_1.cast,
    __metadata("design:type", ModelVoiture_1.ModelVoiture)
], Voiture.prototype, "modelVoiture", void 0);
__decorate([
    decorator_1.swaggerIgnore,
    decorator_1.cast,
    __metadata("design:type", Client_1.Client)
], Voiture.prototype, "client", void 0);
__decorate([
    decorator_1.swaggerIgnore,
    decorator_1.cast,
    __metadata("design:type", Array)
], Voiture.prototype, "reparation", void 0);
exports.Voiture = Voiture;
