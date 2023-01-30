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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReparationDetailController = void 0;
const mongodb_1 = require("mongodb");
const datasource_1 = __importDefault(require("../datasource"));
const decorator_1 = require("../decorator");
const model_1 = require("../model");
let ReparationDetailController = class ReparationDetailController {
    getAll(res, option) {
        return __awaiter(this, void 0, void 0, function* () {
            option = option ? JSON.parse(option + "") : [];
            let client;
            try {
                client = yield (0, datasource_1.default)();
                res.json(yield model_1.ReparationDetail.getAll(client.currentDb, option));
            }
            catch (error) {
                res.status(500).send(error.message);
            }
            finally {
                yield (client === null || client === void 0 ? void 0 : client.close());
            }
        });
    }
    save(res, reparationDetail) {
        return __awaiter(this, void 0, void 0, function* () {
            let client;
            try {
                client = yield (0, datasource_1.default)();
                res.json(yield reparationDetail.save(client.currentDb));
            }
            catch (error) {
                res.status(500).json(error.message || error);
            }
            finally {
                return yield (client === null || client === void 0 ? void 0 : client.close());
            }
        });
    }
    update(res, reparationDetail) {
        return __awaiter(this, void 0, void 0, function* () {
            let client;
            try {
                client = yield (0, datasource_1.default)();
                res.json(yield reparationDetail.update(client.currentDb));
            }
            catch (error) {
                res.status(500).json(error.message || error);
            }
            finally {
                return yield (client === null || client === void 0 ? void 0 : client.close());
            }
        });
    }
    getById(res, id) {
        return __awaiter(this, void 0, void 0, function* () {
            let dbClient;
            try {
                dbClient = yield (0, datasource_1.default)();
                const respon = (yield model_1.ReparationDetail.getById(dbClient.currentDb, id))[0];
                if (typeof respon === 'undefined') {
                    res.status(404).send("pas de correspondant");
                }
                else {
                    res.json(respon);
                }
            }
            catch (error) {
                res.status(500).send(error.message);
            }
            finally {
                yield (dbClient === null || dbClient === void 0 ? void 0 : dbClient.close());
            }
        });
    }
    delete(res, id) {
        return __awaiter(this, void 0, void 0, function* () {
            let client;
            try {
                client = yield (0, datasource_1.default)();
                const reparationDetail = new model_1.ReparationDetail();
                reparationDetail.id = id;
                res.status(200).json(yield reparationDetail.delete(client.currentDb));
            }
            catch (error) {
                res.status(500).json(error.message || error);
            }
            finally {
                return yield (client === null || client === void 0 ? void 0 : client.close());
            }
        });
    }
};
__decorate([
    (0, decorator_1.Get)("/option/:option"),
    __param(1, (0, decorator_1.RequestParam)("option")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ReparationDetailController.prototype, "getAll", null);
__decorate([
    (0, decorator_1.Post)(""),
    __param(1, decorator_1.RequestBody),
    __param(1, decorator_1.cast),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, model_1.ReparationDetail]),
    __metadata("design:returntype", Promise)
], ReparationDetailController.prototype, "save", null);
__decorate([
    (0, decorator_1.Put)(""),
    __param(1, decorator_1.cast),
    __param(1, decorator_1.RequestBody),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, model_1.ReparationDetail]),
    __metadata("design:returntype", Promise)
], ReparationDetailController.prototype, "update", null);
__decorate([
    (0, decorator_1.Get)("/:id"),
    __param(1, (0, decorator_1.RequestParam)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ReparationDetailController.prototype, "getById", null);
__decorate([
    (0, decorator_1.Delete)("/:id"),
    __param(1, (0, decorator_1.RequestParam)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, mongodb_1.ObjectId]),
    __metadata("design:returntype", Promise)
], ReparationDetailController.prototype, "delete", null);
ReparationDetailController = __decorate([
    (0, decorator_1.RestController)("/api/reparationDetail")
], ReparationDetailController);
exports.ReparationDetailController = ReparationDetailController;
