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
        let groupby = [
            {
                $sort: { datePayement: -1 }
             },
            {
               $group: {
                  _id: "$datePayement",
                  total: { $sum: "$montant" }
               }
            }
         ];
        const collection=db.collection("payement");
        
        return collection.aggregate([...groupby,...pipeline]).next()
    }

    static getAll1(db:Db,pipeline=new Array<any>()){
        let groupby = [
            {
                $sort: { datePayement: -1 }
             },
            {
               $group: {
                  _id: "$datePayement",
                  total: { $sum: "$montant" }
               }
            }
         ];
        
        const collection=db.collection("payement");
        
        return collection.aggregate([...groupby,...pipeline]).next()
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

    static getById(db: Db, id: string) {
        return Payement.getAll(db, [
            {
                $match: {
                    _id: ObjectId.createFromHexString(id)
                }
            }
        ])

    }
    constructor(){
        super()
        Object.defineProperty(Entity.prototype,"reparationId",{
            set:function(id){
                if(typeof id==="string")
                    id=ObjectId.createFromHexString(id);
                Object.defineProperty(this,"reparationId",{
                    value:id,
                    enumerable:true,
                    configurable:true,
                    writable:true
                })
            },
            enumerable:true,
            configurable:true
        })
        Object.defineProperty(Entity.prototype,"datePayement",{
            set:function(id){
                if(typeof id==="string" ||typeof id==="number" ){
                    id=new Date(id)
                }
                Object.defineProperty(this,"datePayement",{
                    value:id,
                    enumerable:true,
                    configurable:true,
                    writable:true
                })
            },
            enumerable:true,
            configurable:true
        })
    }

}