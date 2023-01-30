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
exports.Salaire = void 0;
const Entity_1 = require("./Entity");
const mongodb_1 = require("mongodb");
const util_1 = require("../util");
const Responsable_1 = require("./Responsable");
const decorator_1 = require("../decorator");
const relation_1 = require("../relation");
class Salaire extends Entity_1.Entity {
    save(db) {
        return __awaiter(this, void 0, void 0, function* () {
            const collection = db.collection("salaire");
            return Object.assign(this, yield collection.insertOne({
                datePayement: this.datePayement,
                montant: this.montant,
                responsableId: this.responsableId,
                mois: this.mois
            }));
        });
    }
    static getById(db, id) {
        return Salaire.getAll(db, [
            {
                $match: {
                    _id: mongodb_1.ObjectId.createFromHexString(id)
                }
            }
        ]);
    }
    static getAll(db, pipeline = new Array()) {
        const collection = db.collection("salaire");
        return collection.aggregate([...relation_1.relationResponsable, ...pipeline]).toArray().then(m => (0, util_1.assignArray)(Salaire, m));
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
        const collection = db.collection("salaire");
        return collection.aggregate([...groupby, ...pipeline]).next();
    }
    update(db) {
        return __awaiter(this, void 0, void 0, function* () {
            const collection = db.collection("salaire");
            yield collection.updateOne({ _id: this.id }, {
                $set: {
                    datePayement: this.datePayement,
                    montant: this.montant,
                    responsableId: this.responsableId,
                    mois: this.mois
                }
            });
            return this;
        });
    }
    delete(db) {
        const collection = db.collection("salaire");
        return collection.deleteOne({ _id: this.id });
    }
    constructor() {
        super();
        Object.defineProperty(Entity_1.Entity.prototype, "responsableId", {
            set: function (id) {
                if (typeof id === "string")
                    id = mongodb_1.ObjectId.createFromHexString(id);
                Object.defineProperty(this, "responsableId", {
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
    __metadata("design:type", Responsable_1.Responsable)
], Salaire.prototype, "responsable", void 0);
exports.Salaire = Salaire;
