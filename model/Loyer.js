"use strict";
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
exports.Loyer = void 0;
const Entity_1 = require("./Entity");
const mongodb_1 = require("mongodb");
const Client_1 = require("./Client");
const util_1 = require("../util");
class Loyer extends Entity_1.Entity {
    save(db) {
        return __awaiter(this, void 0, void 0, function* () {
            const collection = db.collection("loyer");
            return Object.assign(this, yield collection.insertOne({
                datePayement: this.datePayement,
                montant: this.montant,
                mois: this.mois
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
        const collection = db.collection("loyer");
        return collection.aggregate([...groupby, ...pipeline]).next();
    }
    static getAll(db, pipeline = new Array()) {
        const collection = db.collection("loyer");
        return collection.aggregate([...pipeline]).toArray().then(m => (0, util_1.assignArray)(Loyer, m));
    }
    update(db) {
        return __awaiter(this, void 0, void 0, function* () {
            const collection = db.collection("loyer");
            yield collection.updateOne({ _id: this.id }, {
                $set: {
                    datePayement: this.datePayement,
                    montant: this.montant,
                    mois: this.mois
                }
            });
            return this;
        });
    }
    delete(db) {
        const collection = db.collection("loyer");
        return collection.deleteOne({ _id: this.id });
    }
    constructor() {
        super();
    }
}
exports.Loyer = Loyer;
