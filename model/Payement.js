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
exports.Payement = void 0;
const mongodb_1 = require("mongodb");
const decorator_1 = require("../decorator");
const Entity_1 = require("./Entity");
const Reparation_1 = require("./Reparation");
class Payement extends Entity_1.Entity {
    save(db) {
        return __awaiter(this, void 0, void 0, function* () {
            const collection = db.collection("payement");
            return Object.assign(this, yield collection.insertOne({
                reparationId: this.reparationId,
                datePayement: this.datePayement,
                montant: this.montant
            }));
        });
    }
    static getAll(db, pipeline = new Array()) {
        let groupby = [
            {
                $sort: { datePayement: -1 }
            },
            {
                $group: {
                    _id: "$datePayement",
                    total: { $sum: "$montant" }
                }
            }
        ];
        const collection = db.collection("payement");
        return collection.aggregate([...groupby, ...pipeline]).next();
    }
    static getAll1(db, pipeline = new Array()) {
        let groupby = [
            {
                $sort: { datePayement: -1 }
            },
            {
                $group: {
                    _id: "$datePayement",
                    total: { $sum: "$montant" }
                }
            }
        ];
        const collection = db.collection("payement");
        return collection.aggregate([...groupby, ...pipeline]).next();
    }
    update(db) {
        return __awaiter(this, void 0, void 0, function* () {
            const collection = db.collection("payement");
            yield collection.updateOne({ _id: this.id }, {
                $set: {
                    reparationId: this.reparationId,
                    datePayement: this.datePayement,
                    montant: this.montant
                }
            });
            return this;
        });
    }
    delete(db) {
        const collection = db.collection("payement");
        return collection.deleteOne({ _id: this.id });
    }
    static getById(db, id) {
        return Payement.getAll(db, [
            {
                $match: {
                    _id: mongodb_1.ObjectId.createFromHexString(id)
                }
            }
        ]);
    }
    constructor() {
        super();
        Object.defineProperty(Entity_1.Entity.prototype, "reparationId", {
            set: function (id) {
                if (typeof id === "string")
                    id = mongodb_1.ObjectId.createFromHexString(id);
                Object.defineProperty(this, "reparationId", {
                    value: id,
                    enumerable: true,
                    configurable: true,
                    writable: true
                });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Entity_1.Entity.prototype, "datePayement", {
            set: function (id) {
                if (typeof id === "string" || typeof id === "number") {
                    id = new Date(id);
                }
                Object.defineProperty(this, "datePayement", {
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
    decorator_1.cast,
    __metadata("design:type", Reparation_1.Reparation)
], Payement.prototype, "reparation", void 0);
exports.Payement = Payement;
