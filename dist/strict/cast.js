"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init42 = exports.init41 = exports.init40 = exports.init39 = exports.init38 = exports.init37 = exports.init36 = exports.init35 = exports.init34 = exports.init33 = exports.init32 = exports.init31 = exports.init30 = exports.init29 = exports.init28 = exports.init27 = exports.init26 = exports.init25 = exports.init24 = exports.init23 = exports.init22 = exports.init21 = exports.init20 = exports.init19 = exports.init18 = exports.init17 = exports.init16 = exports.init15 = exports.init14 = exports.init13 = exports.init12 = exports.init11 = exports.init10 = exports.init9 = exports.init8 = exports.init7 = exports.init6 = exports.init5 = exports.init4 = exports.init3 = exports.init2 = exports.init1 = exports.init0 = void 0;
const AchatPiece_controller_1 = require("../controller/AchatPiece.controller");
const AchatPiece_1 = require("../model/AchatPiece");
const Client_controller_1 = require("../controller/Client.controller");
const Client_1 = require("../model/Client");
const Loyer_controller_1 = require("../controller/Loyer.controller");
const Loyer_1 = require("../model/Loyer");
const MarquePiece_controller_1 = require("../controller/MarquePiece.controller");
const MarquePiece_1 = require("../model/MarquePiece");
const MarquePieceModelVoiture_controller_1 = require("../controller/MarquePieceModelVoiture.controller");
const MarquePieceModelVoiture_1 = require("../model/MarquePieceModelVoiture");
const MarqueVoiture_controller_1 = require("../controller/MarqueVoiture.controller");
const MarqueVoiture_1 = require("../model/MarqueVoiture");
const ModelVoiture_controller_1 = require("../controller/ModelVoiture.controller");
const ModelVoiture_1 = require("../model/ModelVoiture");
const Payement_controller_1 = require("../controller/Payement.controller");
const Payement_1 = require("../model/Payement");
const Reparation_controller_1 = require("../controller/Reparation.controller");
const Reparation_1 = require("../model/Reparation");
const ReparationDetail_controller_1 = require("../controller/ReparationDetail.controller");
const ReparationDetail_1 = require("../model/ReparationDetail");
const Responsable_controller_1 = require("../controller/Responsable.controller");
const Responsable_1 = require("../model/Responsable");
const Salaire_controller_1 = require("../controller/Salaire.controller");
const Salaire_1 = require("../model/Salaire");
const Voiture_controller_1 = require("../controller/Voiture.controller");
const Voiture_1 = require("../model/Voiture");
const Resource_1 = require("../model/Resource");
const Resource_2 = require("../model/Resource");
function init0() {
    let old0 = AchatPiece_controller_1.AchatPieceController.prototype.save;
    Object.defineProperty(AchatPiece_controller_1.AchatPieceController.prototype, "save", {
        value: function (...arg) {
            if (arg[1] instanceof AchatPiece_1.AchatPiece || !arg[1]) { }
            else if (typeof arg[1] != 'object')
                throw new Error(JSON.stringify(arg[1]) + "cannot be casted to AchatPiece voiture  at AchatPieceController.save");
            else
                arg[1] = Object.assign(new AchatPiece_1.AchatPiece(), arg[1]);
            return old0.bind(this)(...arg);
        }
    });
}
exports.init0 = init0;
function init1() {
    let old1 = AchatPiece_controller_1.AchatPieceController.prototype.update;
    Object.defineProperty(AchatPiece_controller_1.AchatPieceController.prototype, "update", {
        value: function (...arg) {
            if (arg[1] instanceof AchatPiece_1.AchatPiece || !arg[1]) { }
            else if (typeof arg[1] != 'object')
                throw new Error(JSON.stringify(arg[1]) + "cannot be casted to AchatPiece voiture  at AchatPieceController.update");
            else
                arg[1] = Object.assign(new AchatPiece_1.AchatPiece(), arg[1]);
            return old1.bind(this)(...arg);
        }
    });
}
exports.init1 = init1;
function init2() {
    let old2 = Client_controller_1.ClientController.prototype.save;
    Object.defineProperty(Client_controller_1.ClientController.prototype, "save", {
        value: function (...arg) {
            if (arg[1] instanceof Client_1.Client || !arg[1]) { }
            else if (typeof arg[1] != 'object')
                throw new Error(JSON.stringify(arg[1]) + "cannot be casted to Client client  at ClientController.save");
            else
                arg[1] = Object.assign(new Client_1.Client(), arg[1]);
            return old2.bind(this)(...arg);
        }
    });
}
exports.init2 = init2;
function init3() {
    let old3 = Client_controller_1.ClientController.prototype.update;
    Object.defineProperty(Client_controller_1.ClientController.prototype, "update", {
        value: function (...arg) {
            if (arg[1] instanceof Client_1.Client || !arg[1]) { }
            else if (typeof arg[1] != 'object')
                throw new Error(JSON.stringify(arg[1]) + "cannot be casted to Client client  at ClientController.update");
            else
                arg[1] = Object.assign(new Client_1.Client(), arg[1]);
            return old3.bind(this)(...arg);
        }
    });
}
exports.init3 = init3;
function init4() {
    let old4 = Loyer_controller_1.LoyerController.prototype.save;
    Object.defineProperty(Loyer_controller_1.LoyerController.prototype, "save", {
        value: function (...arg) {
            if (arg[1] instanceof Loyer_1.Loyer || !arg[1]) { }
            else if (typeof arg[1] != 'object')
                throw new Error(JSON.stringify(arg[1]) + "cannot be casted to Loyer voiture  at LoyerController.save");
            else
                arg[1] = Object.assign(new Loyer_1.Loyer(), arg[1]);
            return old4.bind(this)(...arg);
        }
    });
}
exports.init4 = init4;
function init5() {
    let old5 = Loyer_controller_1.LoyerController.prototype.update;
    Object.defineProperty(Loyer_controller_1.LoyerController.prototype, "update", {
        value: function (...arg) {
            if (arg[1] instanceof Loyer_1.Loyer || !arg[1]) { }
            else if (typeof arg[1] != 'object')
                throw new Error(JSON.stringify(arg[1]) + "cannot be casted to Loyer voiture  at LoyerController.update");
            else
                arg[1] = Object.assign(new Loyer_1.Loyer(), arg[1]);
            return old5.bind(this)(...arg);
        }
    });
}
exports.init5 = init5;
function init6() {
    let old6 = MarquePiece_controller_1.MarquePieceController.prototype.save;
    Object.defineProperty(MarquePiece_controller_1.MarquePieceController.prototype, "save", {
        value: function (...arg) {
            if (arg[1] instanceof MarquePiece_1.MarquePiece || !arg[1]) { }
            else if (typeof arg[1] != 'object')
                throw new Error(JSON.stringify(arg[1]) + "cannot be casted to MarquePiece marquePiece  at MarquePieceController.save");
            else
                arg[1] = Object.assign(new MarquePiece_1.MarquePiece(), arg[1]);
            return old6.bind(this)(...arg);
        }
    });
}
exports.init6 = init6;
function init7() {
    let old7 = MarquePiece_controller_1.MarquePieceController.prototype.update;
    Object.defineProperty(MarquePiece_controller_1.MarquePieceController.prototype, "update", {
        value: function (...arg) {
            if (arg[1] instanceof MarquePiece_1.MarquePiece || !arg[1]) { }
            else if (typeof arg[1] != 'object')
                throw new Error(JSON.stringify(arg[1]) + "cannot be casted to MarquePiece marquePiece  at MarquePieceController.update");
            else
                arg[1] = Object.assign(new MarquePiece_1.MarquePiece(), arg[1]);
            return old7.bind(this)(...arg);
        }
    });
}
exports.init7 = init7;
function init8() {
    let old8 = MarquePieceModelVoiture_controller_1.MarquePieceModelVoitureController.prototype.save;
    Object.defineProperty(MarquePieceModelVoiture_controller_1.MarquePieceModelVoitureController.prototype, "save", {
        value: function (...arg) {
            if (arg[1] instanceof MarquePieceModelVoiture_1.MarquePieceModelVoiture || !arg[1]) { }
            else if (typeof arg[1] != 'object')
                throw new Error(JSON.stringify(arg[1]) + "cannot be casted to MarquePieceModelVoiture marquePieceModelVoiture  at MarquePieceModelVoitureController.save");
            else
                arg[1] = Object.assign(new MarquePieceModelVoiture_1.MarquePieceModelVoiture(), arg[1]);
            return old8.bind(this)(...arg);
        }
    });
}
exports.init8 = init8;
function init9() {
    let old9 = MarquePieceModelVoiture_controller_1.MarquePieceModelVoitureController.prototype.update;
    Object.defineProperty(MarquePieceModelVoiture_controller_1.MarquePieceModelVoitureController.prototype, "update", {
        value: function (...arg) {
            if (arg[1] instanceof MarquePieceModelVoiture_1.MarquePieceModelVoiture || !arg[1]) { }
            else if (typeof arg[1] != 'object')
                throw new Error(JSON.stringify(arg[1]) + "cannot be casted to MarquePieceModelVoiture marquePieceModelVoiture  at MarquePieceModelVoitureController.update");
            else
                arg[1] = Object.assign(new MarquePieceModelVoiture_1.MarquePieceModelVoiture(), arg[1]);
            return old9.bind(this)(...arg);
        }
    });
}
exports.init9 = init9;
function init10() {
    let old10 = MarqueVoiture_controller_1.MarqueVoitureController.prototype.save;
    Object.defineProperty(MarqueVoiture_controller_1.MarqueVoitureController.prototype, "save", {
        value: function (...arg) {
            if (arg[1] instanceof MarqueVoiture_1.MarqueVoiture || !arg[1]) { }
            else if (typeof arg[1] != 'object')
                throw new Error(JSON.stringify(arg[1]) + "cannot be casted to MarqueVoiture marqueVoiture  at MarqueVoitureController.save");
            else
                arg[1] = Object.assign(new MarqueVoiture_1.MarqueVoiture(), arg[1]);
            return old10.bind(this)(...arg);
        }
    });
}
exports.init10 = init10;
function init11() {
    let old11 = MarqueVoiture_controller_1.MarqueVoitureController.prototype.update;
    Object.defineProperty(MarqueVoiture_controller_1.MarqueVoitureController.prototype, "update", {
        value: function (...arg) {
            if (arg[1] instanceof MarqueVoiture_1.MarqueVoiture || !arg[1]) { }
            else if (typeof arg[1] != 'object')
                throw new Error(JSON.stringify(arg[1]) + "cannot be casted to MarqueVoiture marqueVoiture  at MarqueVoitureController.update");
            else
                arg[1] = Object.assign(new MarqueVoiture_1.MarqueVoiture(), arg[1]);
            return old11.bind(this)(...arg);
        }
    });
}
exports.init11 = init11;
function init12() {
    let old12 = ModelVoiture_controller_1.ModelVoitureController.prototype.save;
    Object.defineProperty(ModelVoiture_controller_1.ModelVoitureController.prototype, "save", {
        value: function (...arg) {
            if (arg[1] instanceof ModelVoiture_1.ModelVoiture || !arg[1]) { }
            else if (typeof arg[1] != 'object')
                throw new Error(JSON.stringify(arg[1]) + "cannot be casted to ModelVoiture modelVoiture  at ModelVoitureController.save");
            else
                arg[1] = Object.assign(new ModelVoiture_1.ModelVoiture(), arg[1]);
            return old12.bind(this)(...arg);
        }
    });
}
exports.init12 = init12;
function init13() {
    let old13 = ModelVoiture_controller_1.ModelVoitureController.prototype.update;
    Object.defineProperty(ModelVoiture_controller_1.ModelVoitureController.prototype, "update", {
        value: function (...arg) {
            if (arg[1] instanceof ModelVoiture_1.ModelVoiture || !arg[1]) { }
            else if (typeof arg[1] != 'object')
                throw new Error(JSON.stringify(arg[1]) + "cannot be casted to ModelVoiture modelVoiture  at ModelVoitureController.update");
            else
                arg[1] = Object.assign(new ModelVoiture_1.ModelVoiture(), arg[1]);
            return old13.bind(this)(...arg);
        }
    });
}
exports.init13 = init13;
function init14() {
    let old14 = Payement_controller_1.PayementController.prototype.save;
    Object.defineProperty(Payement_controller_1.PayementController.prototype, "save", {
        value: function (...arg) {
            if (arg[1] instanceof Payement_1.Payement || !arg[1]) { }
            else if (typeof arg[1] != 'object')
                throw new Error(JSON.stringify(arg[1]) + "cannot be casted to Payement payement  at PayementController.save");
            else
                arg[1] = Object.assign(new Payement_1.Payement(), arg[1]);
            return old14.bind(this)(...arg);
        }
    });
}
exports.init14 = init14;
function init15() {
    let old15 = Payement_controller_1.PayementController.prototype.update;
    Object.defineProperty(Payement_controller_1.PayementController.prototype, "update", {
        value: function (...arg) {
            if (arg[1] instanceof Payement_1.Payement || !arg[1]) { }
            else if (typeof arg[1] != 'object')
                throw new Error(JSON.stringify(arg[1]) + "cannot be casted to Payement payement  at PayementController.update");
            else
                arg[1] = Object.assign(new Payement_1.Payement(), arg[1]);
            return old15.bind(this)(...arg);
        }
    });
}
exports.init15 = init15;
function init16() {
    let old16 = Reparation_controller_1.ReparationController.prototype.save;
    Object.defineProperty(Reparation_controller_1.ReparationController.prototype, "save", {
        value: function (...arg) {
            if (arg[1] instanceof Reparation_1.Reparation || !arg[1]) { }
            else if (typeof arg[1] != 'object')
                throw new Error(JSON.stringify(arg[1]) + "cannot be casted to Reparation reparation  at ReparationController.save");
            else
                arg[1] = Object.assign(new Reparation_1.Reparation(), arg[1]);
            return old16.bind(this)(...arg);
        }
    });
}
exports.init16 = init16;
function init17() {
    let old17 = Reparation_controller_1.ReparationController.prototype.update;
    Object.defineProperty(Reparation_controller_1.ReparationController.prototype, "update", {
        value: function (...arg) {
            if (arg[1] instanceof Reparation_1.Reparation || !arg[1]) { }
            else if (typeof arg[1] != 'object')
                throw new Error(JSON.stringify(arg[1]) + "cannot be casted to Reparation reparation  at ReparationController.update");
            else
                arg[1] = Object.assign(new Reparation_1.Reparation(), arg[1]);
            return old17.bind(this)(...arg);
        }
    });
}
exports.init17 = init17;
function init18() {
    let old18 = ReparationDetail_controller_1.ReparationDetailController.prototype.save;
    Object.defineProperty(ReparationDetail_controller_1.ReparationDetailController.prototype, "save", {
        value: function (...arg) {
            if (arg[1] instanceof ReparationDetail_1.ReparationDetail || !arg[1]) { }
            else if (typeof arg[1] != 'object')
                throw new Error(JSON.stringify(arg[1]) + "cannot be casted to ReparationDetail reparationDetail  at ReparationDetailController.save");
            else
                arg[1] = Object.assign(new ReparationDetail_1.ReparationDetail(), arg[1]);
            return old18.bind(this)(...arg);
        }
    });
}
exports.init18 = init18;
function init19() {
    let old19 = ReparationDetail_controller_1.ReparationDetailController.prototype.update;
    Object.defineProperty(ReparationDetail_controller_1.ReparationDetailController.prototype, "update", {
        value: function (...arg) {
            if (arg[1] instanceof ReparationDetail_1.ReparationDetail || !arg[1]) { }
            else if (typeof arg[1] != 'object')
                throw new Error(JSON.stringify(arg[1]) + "cannot be casted to ReparationDetail reparationDetail  at ReparationDetailController.update");
            else
                arg[1] = Object.assign(new ReparationDetail_1.ReparationDetail(), arg[1]);
            return old19.bind(this)(...arg);
        }
    });
}
exports.init19 = init19;
function init20() {
    let old20 = Responsable_controller_1.ResponsableController.prototype.save;
    Object.defineProperty(Responsable_controller_1.ResponsableController.prototype, "save", {
        value: function (...arg) {
            if (arg[1] instanceof Responsable_1.Responsable || !arg[1]) { }
            else if (typeof arg[1] != 'object')
                throw new Error(JSON.stringify(arg[1]) + "cannot be casted to Responsable client  at ResponsableController.save");
            else
                arg[1] = Object.assign(new Responsable_1.Responsable(), arg[1]);
            return old20.bind(this)(...arg);
        }
    });
}
exports.init20 = init20;
function init21() {
    let old21 = Responsable_controller_1.ResponsableController.prototype.update;
    Object.defineProperty(Responsable_controller_1.ResponsableController.prototype, "update", {
        value: function (...arg) {
            if (arg[1] instanceof Responsable_1.Responsable || !arg[1]) { }
            else if (typeof arg[1] != 'object')
                throw new Error(JSON.stringify(arg[1]) + "cannot be casted to Responsable client  at ResponsableController.update");
            else
                arg[1] = Object.assign(new Responsable_1.Responsable(), arg[1]);
            return old21.bind(this)(...arg);
        }
    });
}
exports.init21 = init21;
function init22() {
    let old22 = Salaire_controller_1.SalaireController.prototype.save;
    Object.defineProperty(Salaire_controller_1.SalaireController.prototype, "save", {
        value: function (...arg) {
            if (arg[1] instanceof Salaire_1.Salaire || !arg[1]) { }
            else if (typeof arg[1] != 'object')
                throw new Error(JSON.stringify(arg[1]) + "cannot be casted to Salaire voiture  at SalaireController.save");
            else
                arg[1] = Object.assign(new Salaire_1.Salaire(), arg[1]);
            return old22.bind(this)(...arg);
        }
    });
}
exports.init22 = init22;
function init23() {
    let old23 = Salaire_controller_1.SalaireController.prototype.update;
    Object.defineProperty(Salaire_controller_1.SalaireController.prototype, "update", {
        value: function (...arg) {
            if (arg[1] instanceof Salaire_1.Salaire || !arg[1]) { }
            else if (typeof arg[1] != 'object')
                throw new Error(JSON.stringify(arg[1]) + "cannot be casted to Salaire voiture  at SalaireController.update");
            else
                arg[1] = Object.assign(new Salaire_1.Salaire(), arg[1]);
            return old23.bind(this)(...arg);
        }
    });
}
exports.init23 = init23;
function init24() {
    let old24 = Voiture_controller_1.VoitureController.prototype.save;
    Object.defineProperty(Voiture_controller_1.VoitureController.prototype, "save", {
        value: function (...arg) {
            if (arg[1] instanceof Voiture_1.Voiture || !arg[1]) { }
            else if (typeof arg[1] != 'object')
                throw new Error(JSON.stringify(arg[1]) + "cannot be casted to Voiture voiture  at VoitureController.save");
            else
                arg[1] = Object.assign(new Voiture_1.Voiture(), arg[1]);
            return old24.bind(this)(...arg);
        }
    });
}
exports.init24 = init24;
function init25() {
    let old25 = Voiture_controller_1.VoitureController.prototype.update;
    Object.defineProperty(Voiture_controller_1.VoitureController.prototype, "update", {
        value: function (...arg) {
            if (arg[1] instanceof Voiture_1.Voiture || !arg[1]) { }
            else if (typeof arg[1] != 'object')
                throw new Error(JSON.stringify(arg[1]) + "cannot be casted to Voiture voiture  at VoitureController.update");
            else
                arg[1] = Object.assign(new Voiture_1.Voiture(), arg[1]);
            return old25.bind(this)(...arg);
        }
    });
}
exports.init25 = init25;
function init26() {
    Object.defineProperty(AchatPiece_1.AchatPiece.prototype, "marquePiece", {
        set: function (value) {
            if (value instanceof MarquePiece_1.MarquePiece || !value) { }
            else if (typeof value != 'object')
                throw new Error(JSON.stringify(value) + "cannot be casted to marquePiece:MarquePiece");
            else
                value = Object.assign(new MarquePiece_1.MarquePiece(), value);
            Object.defineProperty(this, "marquePiece", {
                value: value,
                enumerable: true,
                writable: true,
            });
        }
    });
}
exports.init26 = init26;
function init27() {
    Object.defineProperty(Client_1.Client.prototype, "voiture", {
        set: function (value) {
            if (value && !(value instanceof Array))
                throw new Error(JSON.stringify(value) + "cannot be casted to voiture:Voiture[]");
            for (let i = 0; i < (value || []).length; i++) {
                if (value[i] instanceof Voiture_1.Voiture || !value[i]) { }
                else if (typeof value[i] != 'object')
                    throw new Error(JSON.stringify(value[i]) + " cannot be casted to Voiture");
                else
                    value[i] = Object.assign(new Voiture_1.Voiture(), value[i]);
            }
            Object.defineProperty(this, "voiture", {
                value: value,
                enumerable: true,
                writable: true,
            });
        }
    });
}
exports.init27 = init27;
function init28() {
    Object.defineProperty(MarquePiece_1.MarquePiece.prototype, "modelVoiture", {
        set: function (value) {
            if (value && !(value instanceof Array))
                throw new Error(JSON.stringify(value) + "cannot be casted to modelVoiture:ModelVoiture[]");
            for (let i = 0; i < (value || []).length; i++) {
                if (value[i] instanceof ModelVoiture_1.ModelVoiture || !value[i]) { }
                else if (typeof value[i] != 'object')
                    throw new Error(JSON.stringify(value[i]) + " cannot be casted to ModelVoiture");
                else
                    value[i] = Object.assign(new ModelVoiture_1.ModelVoiture(), value[i]);
            }
            Object.defineProperty(this, "modelVoiture", {
                value: value,
                enumerable: true,
                writable: true,
            });
        }
    });
}
exports.init28 = init28;
function init29() {
    Object.defineProperty(MarquePieceModelVoiture_1.MarquePieceModelVoiture.prototype, "marquePiece", {
        set: function (value) {
            if (value instanceof MarquePiece_1.MarquePiece || !value) { }
            else if (typeof value != 'object')
                throw new Error(JSON.stringify(value) + "cannot be casted to marquePiece:MarquePiece");
            else
                value = Object.assign(new MarquePiece_1.MarquePiece(), value);
            Object.defineProperty(this, "marquePiece", {
                value: value,
                enumerable: true,
                writable: true,
            });
        }
    });
}
exports.init29 = init29;
function init30() {
    Object.defineProperty(MarquePieceModelVoiture_1.MarquePieceModelVoiture.prototype, "modelVoiture", {
        set: function (value) {
            if (value instanceof ModelVoiture_1.ModelVoiture || !value) { }
            else if (typeof value != 'object')
                throw new Error(JSON.stringify(value) + "cannot be casted to modelVoiture:ModelVoiture");
            else
                value = Object.assign(new ModelVoiture_1.ModelVoiture(), value);
            Object.defineProperty(this, "modelVoiture", {
                value: value,
                enumerable: true,
                writable: true,
            });
        }
    });
}
exports.init30 = init30;
function init31() {
    Object.defineProperty(ModelVoiture_1.ModelVoiture.prototype, "marqueVoiture", {
        set: function (value) {
            if (value instanceof MarqueVoiture_1.MarqueVoiture || !value) { }
            else if (typeof value != 'object')
                throw new Error(JSON.stringify(value) + "cannot be casted to marqueVoiture:MarqueVoiture");
            else
                value = Object.assign(new MarqueVoiture_1.MarqueVoiture(), value);
            Object.defineProperty(this, "marqueVoiture", {
                value: value,
                enumerable: true,
                writable: true,
            });
        }
    });
}
exports.init31 = init31;
function init32() {
    Object.defineProperty(Payement_1.Payement.prototype, "reparation", {
        set: function (value) {
            if (value instanceof Reparation_1.Reparation || !value) { }
            else if (typeof value != 'object')
                throw new Error(JSON.stringify(value) + "cannot be casted to reparation:Reparation");
            else
                value = Object.assign(new Reparation_1.Reparation(), value);
            Object.defineProperty(this, "reparation", {
                value: value,
                enumerable: true,
                writable: true,
            });
        }
    });
}
exports.init32 = init32;
function init33() {
    Object.defineProperty(Reparation_1.Reparation.prototype, "reparationDetail", {
        set: function (value) {
            if (value && !(value instanceof Array))
                throw new Error(JSON.stringify(value) + "cannot be casted to reparationDetail:ReparationDetail[]");
            for (let i = 0; i < (value || []).length; i++) {
                if (value[i] instanceof ReparationDetail_1.ReparationDetail || !value[i]) { }
                else if (typeof value[i] != 'object')
                    throw new Error(JSON.stringify(value[i]) + " cannot be casted to ReparationDetail");
                else
                    value[i] = Object.assign(new ReparationDetail_1.ReparationDetail(), value[i]);
            }
            Object.defineProperty(this, "reparationDetail", {
                value: value,
                enumerable: true,
                writable: true,
            });
        }
    });
}
exports.init33 = init33;
function init34() {
    Object.defineProperty(Reparation_1.Reparation.prototype, "voiture", {
        set: function (value) {
            if (value instanceof Voiture_1.Voiture || !value) { }
            else if (typeof value != 'object')
                throw new Error(JSON.stringify(value) + "cannot be casted to voiture:Voiture");
            else
                value = Object.assign(new Voiture_1.Voiture(), value);
            Object.defineProperty(this, "voiture", {
                value: value,
                enumerable: true,
                writable: true,
            });
        }
    });
}
exports.init34 = init34;
function init35() {
    Object.defineProperty(Reparation_1.Reparation.prototype, "payement", {
        set: function (value) {
            if (value instanceof Payement_1.Payement || !value) { }
            else if (typeof value != 'object')
                throw new Error(JSON.stringify(value) + "cannot be casted to payement:Payement");
            else
                value = Object.assign(new Payement_1.Payement(), value);
            Object.defineProperty(this, "payement", {
                value: value,
                enumerable: true,
                writable: true,
            });
        }
    });
}
exports.init35 = init35;
function init36() {
    Object.defineProperty(ReparationDetail_1.ReparationDetail.prototype, "marquePiece", {
        set: function (value) {
            if (value instanceof MarquePiece_1.MarquePiece || !value) { }
            else if (typeof value != 'object')
                throw new Error(JSON.stringify(value) + "cannot be casted to marquePiece:MarquePiece");
            else
                value = Object.assign(new MarquePiece_1.MarquePiece(), value);
            Object.defineProperty(this, "marquePiece", {
                value: value,
                enumerable: true,
                writable: true,
            });
        }
    });
}
exports.init36 = init36;
function init37() {
    Object.defineProperty(ReparationDetail_1.ReparationDetail.prototype, "reparation", {
        set: function (value) {
            if (value instanceof Reparation_1.Reparation || !value) { }
            else if (typeof value != 'object')
                throw new Error(JSON.stringify(value) + "cannot be casted to reparation:Reparation");
            else
                value = Object.assign(new Reparation_1.Reparation(), value);
            Object.defineProperty(this, "reparation", {
                value: value,
                enumerable: true,
                writable: true,
            });
        }
    });
}
exports.init37 = init37;
function init38() {
    Object.defineProperty(Resource_1.Resource.prototype, "activity", {
        set: function (value) {
            if (value && !(value instanceof Array))
                throw new Error(JSON.stringify(value) + "cannot be casted to activity:Activity[]");
            for (let i = 0; i < (value || []).length; i++) {
                if (value[i] instanceof Resource_2.Activity || !value[i]) { }
                else if (typeof value[i] != 'object')
                    throw new Error(JSON.stringify(value[i]) + " cannot be casted to Activity");
                else
                    value[i] = Object.assign(new Resource_2.Activity(), value[i]);
            }
            Object.defineProperty(this, "activity", {
                value: value,
                enumerable: true,
                writable: true,
            });
        }
    });
}
exports.init38 = init38;
function init39() {
    Object.defineProperty(Salaire_1.Salaire.prototype, "responsable", {
        set: function (value) {
            if (value instanceof Responsable_1.Responsable || !value) { }
            else if (typeof value != 'object')
                throw new Error(JSON.stringify(value) + "cannot be casted to responsable:Responsable");
            else
                value = Object.assign(new Responsable_1.Responsable(), value);
            Object.defineProperty(this, "responsable", {
                value: value,
                enumerable: true,
                writable: true,
            });
        }
    });
}
exports.init39 = init39;
function init40() {
    Object.defineProperty(Voiture_1.Voiture.prototype, "modelVoiture", {
        set: function (value) {
            if (value instanceof ModelVoiture_1.ModelVoiture || !value) { }
            else if (typeof value != 'object')
                throw new Error(JSON.stringify(value) + "cannot be casted to modelVoiture:ModelVoiture");
            else
                value = Object.assign(new ModelVoiture_1.ModelVoiture(), value);
            Object.defineProperty(this, "modelVoiture", {
                value: value,
                enumerable: true,
                writable: true,
            });
        }
    });
}
exports.init40 = init40;
function init41() {
    Object.defineProperty(Voiture_1.Voiture.prototype, "client", {
        set: function (value) {
            if (value instanceof Client_1.Client || !value) { }
            else if (typeof value != 'object')
                throw new Error(JSON.stringify(value) + "cannot be casted to client:Client");
            else
                value = Object.assign(new Client_1.Client(), value);
            Object.defineProperty(this, "client", {
                value: value,
                enumerable: true,
                writable: true,
            });
        }
    });
}
exports.init41 = init41;
function init42() {
    Object.defineProperty(Voiture_1.Voiture.prototype, "reparation", {
        set: function (value) {
            if (value && !(value instanceof Array))
                throw new Error(JSON.stringify(value) + "cannot be casted to reparation:Reparation[]");
            for (let i = 0; i < (value || []).length; i++) {
                if (value[i] instanceof Reparation_1.Reparation || !value[i]) { }
                else if (typeof value[i] != 'object')
                    throw new Error(JSON.stringify(value[i]) + " cannot be casted to Reparation");
                else
                    value[i] = Object.assign(new Reparation_1.Reparation(), value[i]);
            }
            Object.defineProperty(this, "reparation", {
                value: value,
                enumerable: true,
                writable: true,
            });
        }
    });
}
exports.init42 = init42;
