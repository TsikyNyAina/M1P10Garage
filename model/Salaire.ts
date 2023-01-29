import { Entity } from "./Entity";
import { Db, ObjectId } from "mongodb";
import { assignArray } from "../util";
import { Responsable } from "./Responsable";
import { cast } from "../decorator";
import { relationResponsable } from "../relation";



export class Salaire extends Entity{
    datePayement: Date;
    mois:Date;
    montant: number;
    responsableId: ObjectId;
    @cast responsable:Responsable;


    async save(db:Db){
        const collection= db.collection("salaire")
        return Object.assign(this,await collection.insertOne({
            datePayement:this.datePayement,
            montant:this.montant,
            responsableId:this.responsableId,
            mois:this.mois
        }));
    }

    static getById(db: Db, id: string) {
        return Salaire.getAll(db, [
            {
                $match: {
                    _id: ObjectId.createFromHexString(id)
                }
            }
        ])
    }
    
    static getAll(db:Db,pipeline=new Array()){
        const collection= db.collection("salaire");
        
        return  collection.aggregate([...relationResponsable,...pipeline]).toArray().then(m=>assignArray(Salaire,m))
    }
    async update(db:Db){    
        const collection=db.collection("salaire");
        await collection.updateOne({_id:this.id},{
            $set:{
                datePayement:this.datePayement,
                montant:this.montant,
                responsableId:this.responsableId,
                mois:this.mois
            }
        })
        return this;
    }
    delete(db:Db){
        const collection=db.collection("salaire");
        return collection.deleteOne({_id:this.id})    
    }
    constructor(){
        super();
        Object.defineProperty(this,"responsableId",{
            set:function(id){
                if(typeof id==="string")
                    id=ObjectId.createFromHexString(id);
                Object.defineProperty(this,"responsableId",{
                    value:id,
                    enumerable:true,
                    configurable:true
                })
            },
            enumerable:true,
            configurable:true
        })
    }


}