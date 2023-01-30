"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.idToString = void 0;
exports.idToString = {
    $addFields: {
        "_id": { $toString: "$_id" },
        "voitureId": { $toString: "$voitureId" },
        "voiture._id": { $toString: "$voiture._id" },
        "voiture.clientId": { $toString: "$voiture.clientId" },
        "voiture.modelVoitureId": { $toString: "$voiture.modelVoitureId" },
        "voiture.modelVoiture._id": { $toString: "$voiture.modelVoiture._id" },
        "voiture.modelVoiture.marqueVoitureId": { $toString: "$voiture.modelVoiture.marqueVoitureId" },
        "voiture.modelVoiture.marqueVoiture._id": { $toString: "$voiture.modelVoiture.marqueVoiture._id" },
        "reparationId": { $toString: "$reparationId" },
    }
};
