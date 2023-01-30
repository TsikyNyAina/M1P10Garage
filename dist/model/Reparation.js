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
exports.Reparation = void 0;
const Entity_1 = require("./Entity");
const Voiture_1 = require("./Voiture");
const mongodb_1 = require("mongodb");
const ReparationStatus_1 = require("./ReparationStatus");
const decorator_1 = require("../decorator");
const util_1 = require("../util");
const relation_1 = require("../relation");
const Payement_1 = require("./Payement");
class Reparation extends Entity_1.Entity {
    constructor() {
        super();
        Object.defineProperty(Entity_1.Entity.prototype, "voitureId", {
            set: function (id) {
                if (typeof id === "string")
                    id = mongodb_1.ObjectId.createFromHexString(id);
                Object.defineProperty(this, "voitureId", {
                    value: id,
                    enumerable: true,
                    configurable: true,
                    writable: true
                });
            },
            enumerable: true,
            configurable: true
        });
        this.startDate = new Date();
        this.status = ReparationStatus_1.ReparationStatus.PRISE_EN_MAIN;
    }
    save(db) {
        return __awaiter(this, void 0, void 0, function* () {
            const collection = db.collection("reparation");
            let rep = Object.assign(this, yield collection.insertOne({
                voitureId: this.voitureId,
                startDate: this.startDate,
                endDate: this.endDate,
                avancement: this.avancement,
                description: this.description,
                cost: this.cost,
                status: this.status,
            }));
            if (this.reparationDetail) {
                for (let r of this.reparationDetail) {
                    if (!r.id) {
                        r.reparationId = rep.id;
                        yield r.save(db);
                    }
                }
            }
            return rep;
        });
    }
    static getAll(db, pipeline = new Array()) {
        const collection = db.collection("reparation");
        return collection.aggregate([...relation_1.detailReparationRelation, ...relation_1.payementRelation, ...pipeline]).toArray().then(m => (0, util_1.assignArray)(Reparation, m));
    }
    update(db) {
        return __awaiter(this, void 0, void 0, function* () {
            const collection = db.collection("reparation");
            const rep = yield collection.updateOne({ _id: this.id }, {
                $set: {
                    voitureId: this.voitureId,
                    startDate: this.startDate,
                    endDate: this.endDate,
                    avancement: this.avancement,
                    description: this.description,
                    cost: this.cost,
                    status: this.status,
                }
            });
            if (this.reparationDetail) {
                for (let r of this.reparationDetail) {
                    if (!r.id) {
                        r.reparationId = this.id;
                        yield r.save(db);
                    }
                }
            }
            return this;
        });
    }
    delete(db) {
        const collection = db.collection("reparation");
        return collection.deleteOne({ _id: this.id });
    }
    static getById(db, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Reparation.getAll(db, [
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
    __metadata("design:type", Array)
], Reparation.prototype, "reparationDetail", void 0);
__decorate([
    decorator_1.cast,
    decorator_1.swaggerIgnore,
    __metadata("design:type", Voiture_1.Voiture)
], Reparation.prototype, "voiture", void 0);
__decorate([
    decorator_1.cast,
    decorator_1.swaggerIgnore,
    __metadata("design:type", Payement_1.Payement)
], Reparation.prototype, "payement", void 0);
exports.Reparation = Reparation;
