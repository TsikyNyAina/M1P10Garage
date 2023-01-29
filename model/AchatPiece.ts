import { Db, ObjectId } from "mongodb";
import { Entity } from "./Entity";
import { assignArray } from "../util";

export class AchatPiece extends Entity {
    dateAchat: Date;
    Quantite: Number;
    MarquePieceId: ObjectId;
    PU: Number;

    async save(db: Db) {
        const collection = db.collection("voiture")
        return Object.assign(this, await collection.insertOne({
            dateAchat: this.dateAchat,
            Quantite: this.Quantite,
            MarquePieceId: this.MarquePieceId,
            PU: this.PU
        }));
    }

    static getAll(db: Db, pipeline = new Array()) {
        const collection = db.collection("achatPiece");
        return collection.aggregate([...pipeline]).toArray().then(m => assignArray(AchatPiece, m))
    }

    static getById(db: Db, id: string) {
        return AchatPiece.getAll(db, [
            {
                $match: {
                    _id: ObjectId.createFromHexString(id)
                }
            }
        ])
    }

    async update(db: Db) {
        const collection = db.collection("achatPiece");
        await collection.updateOne({ _id: this.id }, {
            $set: {
                dateAchat: this.dateAchat,
                Quantite: this.Quantite,
                MarquePieceId: this.MarquePieceId,
                PU: this.PU
            }
        })
        return this;
    }

    delete(db:Db){
        const collection=db.collection("achatPiece");
        return collection.deleteOne({_id:this.id})    
    }

    constructor(){
        super();
    };
}