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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./Client.controller"), exports);
__exportStar(require("./MarquePiece.controller"), exports);
__exportStar(require("./MarqueVoiture.controller"), exports);
__exportStar(require("./ModelVoiture.controller"), exports);
__exportStar(require("./Voiture.controller"), exports);
__exportStar(require("./MarquePieceModelVoiture.controller"), exports);
__exportStar(require("./Responsable.controller"), exports);
__exportStar(require("./Payement.controller"), exports);
__exportStar(require("./Reparation.controller"), exports);
__exportStar(require("./ReparationDetail.controller"), exports);
__exportStar(require("./AchatPiece.controller"), exports);
__exportStar(require("./Salaire.controller"), exports);
__exportStar(require("./Loyer.controller"), exports);
