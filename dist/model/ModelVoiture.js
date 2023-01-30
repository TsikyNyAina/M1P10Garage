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
exports.ModelVoiture = void 0;
const Entity_1 = require("./Entity");
const MarqueVoiture_1 = require("./MarqueVoiture");
const mongodb_1 = require("mongodb");
const decorator_1 = require("../decorator");
const util_1 = require("../util");
const relation_1 = require("../relation");
class ModelVoiture extends Entity_1.Entity {
    save(db) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const collection = db.collection("modelVoiture");
            return Object.assign(this, yield collection.insertOne({
                modelName: this.modelName,
                marqueVoitureId: ((_a = this.marqueVoiture) === null || _a === void 0 ? void 0 : _a.id) || this.marqueVoitureId
            }));
        });
    }
    static getAll(db, pipeline = new Array()) {
        const collection = db.collection("modelVoiture");
        return collection.aggregate([...relation_1.marqueRelation, ...pipeline]).toArray().then(m => (0, util_1.assignArray)(ModelVoiture, m));
    }
    update(db) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const collection = db.collection("modelVoiture");
            yield collection.updateOne({ _id: this.id }, {
                $set: {
                    modelName: this.modelName,
                    marqueVoitureId: ((_a = this.marqueVoiture) === null || _a === void 0 ? void 0 : _a.id) || this.marqueVoitureId
                }
            });
            return this;
        });
    }
    delete(db) {
        const collection = db.collection("modelVoiture");
        return collection.deleteOne({ _id: this.id });
    }
    static getById(db, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield ModelVoiture.getAll(db, [
                {
                    $match: {
                        _id: mongodb_1.ObjectId.createFromHexString(id)
                    }
                }
            ]);
        });
    }
    constructor() {
        super();
        Object.defineProperty(Entity_1.Entity.prototype, "marqueVoitureId", {
            set: function (id) {
                if (typeof id === "string")
                    id = mongodb_1.ObjectId.createFromHexString(id);
                Object.defineProperty(this, "marqueVoitureId", {
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
    __metadata("design:type", MarqueVoiture_1.MarqueVoiture)
], ModelVoiture.prototype, "marqueVoiture", void 0);
exports.ModelVoiture = ModelVoiture;
