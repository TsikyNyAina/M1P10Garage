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
exports.init12 = exports.init11 = exports.init10 = exports.init9 = exports.init8 = exports.init7 = exports.init6 = exports.init5 = exports.init4 = exports.init3 = exports.init2 = exports.init1 = exports.init0 = void 0;
const express_1 = require("express");
const AchatPiece_controller_1 = require("../controller/AchatPiece.controller");
const Client_controller_1 = require("../controller/Client.controller");
const Loyer_controller_1 = require("../controller/Loyer.controller");
const MarquePiece_controller_1 = require("../controller/MarquePiece.controller");
const MarquePieceModelVoiture_controller_1 = require("../controller/MarquePieceModelVoiture.controller");
const MarqueVoiture_controller_1 = require("../controller/MarqueVoiture.controller");
const ModelVoiture_controller_1 = require("../controller/ModelVoiture.controller");
const Payement_controller_1 = require("../controller/Payement.controller");
const Reparation_controller_1 = require("../controller/Reparation.controller");
const ReparationDetail_controller_1 = require("../controller/ReparationDetail.controller");
const Responsable_controller_1 = require("../controller/Responsable.controller");
const Salaire_controller_1 = require("../controller/Salaire.controller");
const Voiture_controller_1 = require("../controller/Voiture.controller");
function init0() {
    Object.defineProperty(AchatPiece_controller_1.AchatPieceController.prototype, "rest", {
        value: function (app) {
            const router = (0, express_1.Router)();
            router.get("/option/:option", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.params.option);
                try {
                    yield this.getAll(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            router.get("/depense", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                try {
                    yield this.getDepense(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            router.get("/:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.params.id);
                try {
                    yield this.getById(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            router.post("", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.body);
                try {
                    yield this.save(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            router.put("", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.body);
                try {
                    yield this.update(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            router.delete("/:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.params.id);
                try {
                    yield this.delete(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            app.use("/achatPiece", router);
        },
        configurable: true
    });
}
exports.init0 = init0;
function init1() {
    Object.defineProperty(Client_controller_1.ClientController.prototype, "rest", {
        value: function (app) {
            const router = (0, express_1.Router)();
            router.get("/option/:option", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.params.option);
                try {
                    yield this.getAll(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            router.get("/:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.params.id);
                try {
                    yield this.getById(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            router.post("", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.body);
                try {
                    yield this.save(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            router.post("/:email", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.params.email);
                try {
                    yield this.sendmail(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            router.put("", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.body);
                try {
                    yield this.update(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            router.delete("/:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.params.id);
                try {
                    yield this.delete(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            app.use("/client", router);
        },
        configurable: true
    });
}
exports.init1 = init1;
function init2() {
    Object.defineProperty(Loyer_controller_1.LoyerController.prototype, "rest", {
        value: function (app) {
            const router = (0, express_1.Router)();
            router.get("/option/:option", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.params.option);
                try {
                    yield this.getAll(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            router.get("/depense", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                try {
                    yield this.getDepense(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            router.get("/:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.params.id);
                try {
                    yield this.getById(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            router.post("", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.body);
                try {
                    yield this.save(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            router.put("", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.body);
                try {
                    yield this.update(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            router.delete("/:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.params.id);
                try {
                    yield this.delete(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            app.use("/loyer", router);
        },
        configurable: true
    });
}
exports.init2 = init2;
function init3() {
    Object.defineProperty(MarquePiece_controller_1.MarquePieceController.prototype, "rest", {
        value: function (app) {
            const router = (0, express_1.Router)();
            router.get("/option/:option", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.params.option);
                try {
                    yield this.getAll(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            router.get("/:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.params.id);
                try {
                    yield this.getById(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            router.post("", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.body);
                try {
                    yield this.save(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            router.put("", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.body);
                try {
                    yield this.update(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            router.delete("/:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.params.id);
                try {
                    yield this.delete(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            app.use("/marquePiece", router);
        },
        configurable: true
    });
}
exports.init3 = init3;
function init4() {
    Object.defineProperty(MarquePieceModelVoiture_controller_1.MarquePieceModelVoitureController.prototype, "rest", {
        value: function (app) {
            const router = (0, express_1.Router)();
            router.get("/option/:option", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.params.option);
                try {
                    yield this.getAll(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            router.get("/:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.params.id);
                try {
                    yield this.getById(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            router.post("", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.body);
                try {
                    yield this.save(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            router.put("", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.body);
                try {
                    yield this.update(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            router.delete("/:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.params.id);
                try {
                    yield this.delete(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            app.use("/marquePieceModelVoiture", router);
        },
        configurable: true
    });
}
exports.init4 = init4;
function init5() {
    Object.defineProperty(MarqueVoiture_controller_1.MarqueVoitureController.prototype, "rest", {
        value: function (app) {
            const router = (0, express_1.Router)();
            router.get("/option/:option", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.params.option);
                try {
                    yield this.getAll(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            router.get("/:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.params.id);
                try {
                    yield this.getById(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            router.post("", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.body);
                try {
                    yield this.save(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            router.put("", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.body);
                try {
                    yield this.update(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            router.delete("/:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.params.id);
                try {
                    yield this.delete(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            app.use("/marqueVoiture", router);
        },
        configurable: true
    });
}
exports.init5 = init5;
function init6() {
    Object.defineProperty(ModelVoiture_controller_1.ModelVoitureController.prototype, "rest", {
        value: function (app) {
            const router = (0, express_1.Router)();
            router.get("/option/:option", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.params.option);
                try {
                    yield this.getAll(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            router.get("/:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.params.id);
                try {
                    yield this.getById(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            router.post("", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.body);
                try {
                    yield this.save(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            router.put("", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.body);
                try {
                    yield this.update(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            router.delete("/:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.params.id);
                try {
                    yield this.delete(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            app.use("/modelVoiture", router);
        },
        configurable: true
    });
}
exports.init6 = init6;
function init7() {
    Object.defineProperty(Payement_controller_1.PayementController.prototype, "rest", {
        value: function (app) {
            const router = (0, express_1.Router)();
            router.get("/option/:option", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.params.option);
                try {
                    yield this.getAll(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            router.get("/entree", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                try {
                    yield this.getEntree(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            router.get("/:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.params.id);
                try {
                    yield this.getById(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            router.post("", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.body);
                try {
                    yield this.save(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            router.put("", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.body);
                try {
                    yield this.update(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            router.delete("/:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.params.id);
                try {
                    yield this.delete(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            app.use("/payement", router);
        },
        configurable: true
    });
}
exports.init7 = init7;
function init8() {
    Object.defineProperty(Reparation_controller_1.ReparationController.prototype, "rest", {
        value: function (app) {
            const router = (0, express_1.Router)();
            router.get("/option/:option", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.params.option);
                try {
                    yield this.getAll(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            router.get("/:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.params.id);
                try {
                    yield this.getById(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            router.post("", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.body);
                try {
                    yield this.save(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            router.put("", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.body);
                try {
                    yield this.update(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            router.delete("/:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.params.id);
                try {
                    yield this.delete(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            app.use("/reparation", router);
        },
        configurable: true
    });
}
exports.init8 = init8;
function init9() {
    Object.defineProperty(ReparationDetail_controller_1.ReparationDetailController.prototype, "rest", {
        value: function (app) {
            const router = (0, express_1.Router)();
            router.get("/option/:option", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.params.option);
                try {
                    yield this.getAll(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            router.post("", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.body);
                try {
                    yield this.save(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            router.put("", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.body);
                try {
                    yield this.update(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            router.get("/:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.params.id);
                try {
                    yield this.getById(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            router.delete("/:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.params.id);
                try {
                    yield this.delete(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            app.use("/reparationDetail", router);
        },
        configurable: true
    });
}
exports.init9 = init9;
function init10() {
    Object.defineProperty(Responsable_controller_1.ResponsableController.prototype, "rest", {
        value: function (app) {
            const router = (0, express_1.Router)();
            router.get("/option/:option", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.params.option);
                try {
                    yield this.getAll(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            router.get("/:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.params.id);
                try {
                    yield this.getOne(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            router.post("", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.body);
                try {
                    yield this.save(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            router.put("", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.body);
                try {
                    yield this.update(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            router.delete("/:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.params.id);
                try {
                    yield this.delete(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            app.use("/responsable", router);
        },
        configurable: true
    });
}
exports.init10 = init10;
function init11() {
    Object.defineProperty(Salaire_controller_1.SalaireController.prototype, "rest", {
        value: function (app) {
            const router = (0, express_1.Router)();
            router.get("/option/:option", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.params.option);
                try {
                    yield this.getAll(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            router.get("/depense", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                try {
                    yield this.getDepense(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            router.get("/:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.params.id);
                try {
                    yield this.getById(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            router.post("", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.body);
                try {
                    yield this.save(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            router.put("", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.body);
                try {
                    yield this.update(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            router.delete("/:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.params.id);
                try {
                    yield this.delete(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            app.use("/salaire", router);
        },
        configurable: true
    });
}
exports.init11 = init11;
function init12() {
    Object.defineProperty(Voiture_controller_1.VoitureController.prototype, "rest", {
        value: function (app) {
            const router = (0, express_1.Router)();
            router.get("/option/:option", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.params.option);
                try {
                    yield this.getAll(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            router.get("/:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.params.id);
                try {
                    yield this.getById(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            router.post("", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.body);
                try {
                    yield this.save(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            router.put("", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.body);
                try {
                    yield this.update(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            router.delete("/:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.params.id);
                try {
                    yield this.delete(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            app.use("/voiture", router);
        },
        configurable: true
    });
}
exports.init12 = init12;
