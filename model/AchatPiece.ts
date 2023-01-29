import { Db, ObjectId } from "mongodb";
import { Entity } from "./Entity";
import { assignArray } from "../util";
import { MarquePiece } from "./MarquePiece";
import { cast, swaggerIgnore } from "../decorator";
import { relationMarquePiece } from "../relation";

export class AchatPiece extends Entity {
    dateAchat: Date;
    quantity: number;
    marquePieceId: ObjectId;
    prixUnitaire: number;
    @swaggerIgnore @cast marquePiece:MarquePiece;

    async save(db: Db) {
        const collection = db.collection("voiture")
        return Object.assign(this, await collection.insertOne({
            dateAchat: this.dateAchat,
            quantity: this.quantity,
            marquePieceId: this.marquePieceId,
            prixUnitaire: this.prixUnitaire
        }));
    }

    static getAll(db: Db, pipeline = new Array()) {
        const collection = db.collection("achatPiece");
        return collection.aggregate([...relationMarquePiece,...pipeline]).toArray().then(m => assignArray(AchatPiece, m))
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
                quantity: this.quantity,
                marquePieceId: this.marquePieceId,
                prixUnitaire: this.prixUnitaire
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
        Object.defineProperty(this,"marquePieceId",{
            set:function(marquePieceId){
                if(typeof marquePieceId==="string")
                    marquePieceId=ObjectId.createFromHexString(marquePieceId);
                Object.defineProperty(this,"marquePieceId",{
                    value:marquePieceId,
                    enumerable:true,
                    configurable:true
                })
            },
            enumerable:true,
            configurable:true
        })
    };
}