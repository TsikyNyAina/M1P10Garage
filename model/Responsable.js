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
exports.ResponsableType = exports.Responsable = void 0;
const mongodb_1 = require("mongodb");
const Entity_1 = require("./Entity");
const util_1 = require("../util");
class Responsable extends Entity_1.Entity {
    save(db) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield db.collection("responsable").insertOne({
                name: this.name,
                email: this.email,
                type: this.type,
                mdp: this.mdp
            });
        });
    }
    static getById(db, id) {
        return Responsable.getAll(db, [
            {
                $match: {
                    _id: mongodb_1.ObjectId.createFromHexString(id)
                }
            }
        ]);
    }
    update(db) {
        return __awaiter(this, void 0, void 0, function* () {
            const collection = db.collection("responsable");
            yield collection.updateOne({ _id: this.id }, {
                $set: {
                    name: this.name,
                    email: this.email,
                    type: this.type,
                    mdp: this.mdp,
                }
            });
            return this;
        });
    }
    delete(db) {
        const collection = db.collection("responsable");
        return collection.deleteOne({ _id: this.id });
    }
    static getAll(db, pipeline = new Array()) {
        return __awaiter(this, void 0, void 0, function* () {
            const collection = db.collection("responsable");
            return collection.aggregate([...pipeline]).toArray().then(m => (0, util_1.assignArray)(Responsable, m));
        });
    }
}
exports.Responsable = Responsable;
var ResponsableType;
(function (ResponsableType) {
    ResponsableType[ResponsableType["finacier"] = 0] = "finacier";
    ResponsableType[ResponsableType["atelier"] = 1] = "atelier";
})(ResponsableType = exports.ResponsableType || (exports.ResponsableType = {}));
