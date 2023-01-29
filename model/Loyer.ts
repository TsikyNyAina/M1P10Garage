import { Entity } from "./Entity";
import { Db, ObjectId } from "mongodb";
import { Client } from "./Client";
import { assignArray } from "../util";



export class Loyer extends Entity{
    datePayement: Date;
    montant: number;
    mois:Date;
    async save(db:Db){
        const collection= db.collection("loyer")
        return Object.assign(this,await collection.insertOne({
            datePayement:this.datePayement,
            montant:this.montant,
            mois:this.mois
        }));
    }

    static getById(db: Db, id: string) {
        return Client.getAll(db, [
            {
                $match: {
                    _id: ObjectId.createFromHexString(id)
                }
            }
        ])
    }
    
    static getAll(db:Db,pipeline=new Array()){
        const collection= db.collection("loyer");
        return  collection.aggregate([...pipeline]).toArray().then(m=>assignArray(Loyer,m))
    }
    async update(db:Db){    
        const collection=db.collection("loyer");
        await collection.updateOne({_id:this.id},{
            $set:{
                datePayement:this.datePayement,
                montant:this.montant,
                mois:this.mois
            }
        })
        return this;
    }
    delete(db:Db){
        const collection=db.collection("loyer");
        return collection.deleteOne({_id:this.id})    
    }
    constructor(){
        super();
        
    }


}