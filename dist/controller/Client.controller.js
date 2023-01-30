"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
exports.ClientController = void 0;
const mongodb_1 = require("mongodb");
const datasource_1 = __importDefault(require("../datasource"));
const decorator_1 = require("../decorator");
const model_1 = require("../model");
const nodemailer = __importStar(require("nodemailer"));
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "tramasimiarantsoa@gmail.com",
        pass: "zsxeiauhdghgrxdh"
    }
});
let ClientController = class ClientController {
    getAll(res, option) {
        return __awaiter(this, void 0, void 0, function* () {
            option = option ? JSON.parse(option + "") : [];
            let dbClient;
            try {
                dbClient = yield (0, datasource_1.default)();
                res.json(yield model_1.Client.getAll(dbClient.currentDb, option));
            }
            catch (error) {
                res.status(500).send(error.message);
            }
            finally {
                yield (dbClient === null || dbClient === void 0 ? void 0 : dbClient.close());
            }
        });
    }
    getById(res, id) {
        return __awaiter(this, void 0, void 0, function* () {
            let dbClient;
            try {
                dbClient = yield (0, datasource_1.default)();
                const respon = (yield model_1.Client.getById(dbClient.currentDb, id))[0];
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
    save(res, client) {
        return __awaiter(this, void 0, void 0, function* () {
            let dbClient;
            try {
                dbClient = yield (0, datasource_1.default)();
                res.json(yield client.save(dbClient.currentDb));
            }
            catch (error) {
                res.status(500).json(error.message || error);
            }
            finally {
                return yield (dbClient === null || dbClient === void 0 ? void 0 : dbClient.close());
            }
        });
    }
    sendmail(res, email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const mailOptions = {
                    from: "tramasimiarantsoa@gmail.com",
                    to: email,
                    subject: "M1P10MEAN",
                    text: "Project mean. Theme Garage. Binome: Ramasimiarantsoa Tsiky Ny Aina et Andriamarosoa Raherinjato Tina"
                };
                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        return res.status(400).send({ error });
                    }
                    return res.status(200).send({ message: "Email sent successfully" });
                });
            }
            catch (error) {
                res.status(500).json(error.message || error);
            }
            finally {
            }
        });
    }
    update(res, client) {
        return __awaiter(this, void 0, void 0, function* () {
            let dbClient;
            try {
                dbClient = yield (0, datasource_1.default)();
                res.json(yield client.update(dbClient.currentDb));
            }
            catch (error) {
                res.status(500).json(error.message || error);
            }
            finally {
                return yield (dbClient === null || dbClient === void 0 ? void 0 : dbClient.close());
            }
        });
    }
    delete(res, id) {
        return __awaiter(this, void 0, void 0, function* () {
            let dbClient;
            try {
                dbClient = yield (0, datasource_1.default)();
                const client = new model_1.Client();
                client.id = id;
                res.status(200).json(yield client.delete(dbClient.currentDb));
            }
            catch (error) {
                res.status(500).json(error.message || error);
            }
            finally {
                return yield (dbClient === null || dbClient === void 0 ? void 0 : dbClient.close());
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
], ClientController.prototype, "getAll", null);
__decorate([
    (0, decorator_1.Get)("/:id"),
    __param(1, (0, decorator_1.RequestParam)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "getById", null);
__decorate([
    (0, decorator_1.Post)(""),
    __param(1, decorator_1.RequestBody),
    __param(1, decorator_1.cast),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, model_1.Client]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "save", null);
__decorate([
    (0, decorator_1.Post)("/:email"),
    __param(1, (0, decorator_1.RequestParam)("email")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "sendmail", null);
__decorate([
    (0, decorator_1.Put)(""),
    __param(1, decorator_1.cast),
    __param(1, decorator_1.RequestBody),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, model_1.Client]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "update", null);
__decorate([
    (0, decorator_1.Delete)("/:id"),
    __param(1, (0, decorator_1.RequestParam)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, mongodb_1.ObjectId]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "delete", null);
ClientController = __decorate([
    (0, decorator_1.RestController)("/api/client")
], ClientController);
exports.ClientController = ClientController;
