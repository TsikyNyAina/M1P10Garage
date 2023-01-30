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
exports.MarqueVoiture = void 0;
const mongodb_1 = require("mongodb");
const util_1 = require("../util");
const Entity_1 = require("./Entity");
class MarqueVoiture extends Entity_1.Entity {
    save(db) {
        return __awaiter(this, void 0, void 0, function* () {
            const collection = db.collection("marqueVoiture");
            return Object.assign(this, yield collection.insertOne({
                marqueName: this.marqueName
            }));
        });
    }
    static getAll(db, pipeline = new Array()) {
        const collection = db.collection("marqueVoiture");
        return collection.aggregate(pipeline).toArray().then(m => (0, util_1.assignArray)(MarqueVoiture, m));
    }
    update(db) {
        return __awaiter(this, void 0, void 0, function* () {
            const collection = db.collection("marqueVoiture");
            yield collection.updateOne({ _id: this.id }, {
                $set: {
                    marqueName: this.marqueName
                }
            });
            return this;
        });
    }
    delete(db) {
        const collection = db.collection("marqueVoiture");
        return collection.deleteOne({ _id: this.id });
    }
    static getById(db, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield MarqueVoiture.getAll(db, [
                {
                    $match: {
                        _id: mongodb_1.ObjectId.createFromHexString(id)
                    }
                }
            ]);
        });
    }
}
exports.MarqueVoiture = MarqueVoiture;
