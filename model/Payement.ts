import { Db, ObjectId } from "mongodb";
import { cast } from "../decorator";
import { assignArray } from "../util";
import { Entity } from "./Entity";
import { Reparation } from "./Reparation";
import { reparationRelation1 } from "../relation";

export class Payement extends Entity{
    reparationId:ObjectId;
    datePayement:Date;
    montant:number;
    
    @cast reparation:Reparation;

    async save(db:Db){
        const collection=db.collection("payement");
        return Object.assign(this,await collection.insertOne({
            reparationId:this.reparationId,
            datePayement:this.datePayement,
            montant:this.montant
        }))
    }

    static getAll(db:Db,pipeline=new Array<any>()){
        const collection=db.collection("payement");
        
        return collection.aggregate([...reparationRelation1,...pipeline]).toArray().then(m=>assignArray(Payement,m))
    }
    async update(db:Db){    
        const collection=db.collection("payement");
        await collection.updateOne({_id:this.id},{
            $set:{
                reparationId:this.reparationId,
                datePayement:this.datePayement,
                montant:this.montant
            }
        })
        return this;
    }
    delete(db:Db){
        const collection=db.collection("payement");
        return collection.deleteOne({_id:this.id})    
    }

    static async getById(db: Db, id: string) {
        return await Payement.getAll(db, [
            {
                $match: {
                    _id: ObjectId.createFromHexString(id)
                }
            }
        ])

    }

}