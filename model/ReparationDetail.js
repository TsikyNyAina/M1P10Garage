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
exports.ReparationDetail = void 0;
const Entity_1 = require("./Entity");
const mongodb_1 = require("mongodb");
const MarquePiece_1 = require("./MarquePiece");
const decorator_1 = require("../decorator");
const Reparation_1 = require("./Reparation");
const util_1 = require("../util");
const Parameter_1 = require("../Parameter");
class ReparationDetail extends Entity_1.Entity {
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
        Object.defineProperty(Entity_1.Entity.prototype, "marquePieceId", {
            set: function (id) {
                if (typeof id === "string")
                    id = mongodb_1.ObjectId.createFromHexString(id);
                Object.defineProperty(this, "marquePieceId", {
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
    save(db) {
        return __awaiter(this, void 0, void 0, function* () {
            const collection = db.collection("reparationDetail");
            return Object.assign(this, yield collection.insertOne({
                reparationId: this.reparationId,
                marquePieceId: this.marquePieceId,
                quantity: this.quantity,
                etat: this.etat,
                cost: this.cost,
            }));
        });
    }
    static getAll(db, pipeline = new Array()) {
        const collection = db.collection("reparationDetail");
        const detailReparationRelation = [
            {
                $lookup: {
                    from: "marquePiece",
                    as: "marquePiece",
                    localField: "marquePieceId",
                    foreignField: "_id"
                }
            },
            {
                $addFields: {
                    marquePiece: {
                        $arrayElemAt: ["$marquePiece", 0]
                    }
                }
            },
            Parameter_1.idToString
        ];
        return collection.aggregate([...detailReparationRelation, ...pipeline]).toArray().then(m => (0, util_1.assignArray)(ReparationDetail, m));
    }
    update(db) {
        return __awaiter(this, void 0, void 0, function* () {
            const collection = db.collection("reparationDetail");
            yield collection.updateOne({ _id: this.id }, {
                $set: {
                    reparationId: this.reparationId,
                    marquePieceId: this.marquePieceId,
                    quantity: this.quantity,
                    etat: this.etat,
                    cost: this.cost,
                }
            });
            return this;
        });
    }
    delete(db) {
        const collection = db.collection("reparationDetail");
        return collection.deleteOne({ _id: this.id });
    }
    static getById(db, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield ReparationDetail.getAll(db, [
                {
                    $match: {
                        _id: mongodb_1.ObjectId.createFromHexString(id)
                    }
                }
            ]);
        });
    }
}
__decorate([
    decorator_1.cast,
    decorator_1.swaggerIgnore,
    __metadata("design:type", MarquePiece_1.MarquePiece)
], ReparationDetail.prototype, "marquePiece", void 0);
__decorate([
    decorator_1.cast,
    decorator_1.swaggerIgnore,
    __metadata("design:type", Reparation_1.Reparation)
], ReparationDetail.prototype, "reparation", void 0);
exports.ReparationDetail = ReparationDetail;
