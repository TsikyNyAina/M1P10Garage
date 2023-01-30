"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Status = exports.Facture = void 0;
const Entity_1 = require("./Entity");
const relation_1 = require("../relation");
class Facture extends Entity_1.Entity {
    save(db, facture) {
        const collection = db.collection("facture");
        return collection.insertOne({
            dueDate: facture.dueDate,
            payDate: facture.payDate,
            cout: facture.cout,
            status: facture.status,
            reparationsId: facture.reparationId
        });
    }
    static getAll(db, pipeline = new Array()) {
        const collection = db.collection("facture");
        return collection.aggregate([...relation_1.reparationRelation, ...pipeline]);
    }
}
exports.Facture = Facture;
var Status;
(function (Status) {
    Status[Status["paye"] = 0] = "paye";
    Status[Status["pending"] = 1] = "pending";
})(Status = exports.Status || (exports.Status = {}));
