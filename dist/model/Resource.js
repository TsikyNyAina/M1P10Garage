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
exports.ActivityType = exports.Activity = exports.Resource = void 0;
const decorator_1 = require("../decorator");
const Entity_1 = require("./Entity");
const relation_1 = require("../relation");
class Resource extends Entity_1.Entity {
    static save(db, resourceType) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield db.collection("resource").insertOne({
                resourceName: resourceType.resourceName
            });
        });
    }
    getAll(db, pipeline = new Array()) {
        const collection = db.collection("resource");
        return collection.aggregate([relation_1.relation, ...pipeline]);
    }
}
__decorate([
    decorator_1.cast,
    __metadata("design:type", Array)
], Resource.prototype, "activity", void 0);
exports.Resource = Resource;
class Activity extends Entity_1.Entity {
    static save(db, activity) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield db.collection("activity").insertOne({
                activityName: activity.activityName,
                resourceId: activity.resourceId,
            });
        });
    }
}
exports.Activity = Activity;
var ActivityType;
(function (ActivityType) {
    ActivityType[ActivityType["depense"] = 0] = "depense";
    ActivityType[ActivityType["revenu"] = 1] = "revenu";
})(ActivityType = exports.ActivityType || (exports.ActivityType = {}));
