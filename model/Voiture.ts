import { Entity } from "./Entity";
import { Reparation } from "./Reparation";
import { cast, swaggerIgnore } from "../decorator";
import { Db, ObjectId } from "mongodb";
import { ModelVoiture } from "./ModelVoiture";
import { Client } from "./Client";
import { assignArray } from "../util";
import { clientRelation, reparationRelation2,modelVoitureRelation } from "../relation";



export class Voiture extends Entity{
    year: string;
    numero: string;
    clientId: ObjectId;
    modelVoitureId: ObjectId;
    
    
    @swaggerIgnore @cast modelVoiture:ModelVoiture
    @swaggerIgnore @cast client:Client;
    @swaggerIgnore @cast reparation: Reparation[];


    async save(db:Db){
        const collection= db.collection("voiture")
        return Object.assign(this,await collection.insertOne({
            modelVoitureId:this.modelVoitureId,
            year:this.year,
            numero:this.numero,
            clientId:this.clientId
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
        const collection= db.collection("voiture");
        return  collection.aggregate([...modelVoitureRelation,...clientRelation,...reparationRelation2,...pipeline]).toArray().then(m=>assignArray(Voiture,m))
    }
    async update(db:Db){    
        const collection=db.collection("voiture");
        await collection.updateOne({_id:this.id},{
            $set:{
                year:this.year,
                numero:this.numero,
                clientId:this.clientId,
                modelVoitureId:this.modelVoitureId,
            }
        })
        return this;
    }
    delete(db:Db){
        const collection=db.collection("voiture");
        return collection.deleteOne({_id:this.id})    
    }
    constructor(){
        super();
        Object.defineProperty(Entity.prototype,"modelVoitureId",{
            set:function(id){
                if(typeof id==="string")
                    id=ObjectId.createFromHexString(id);
                Object.defineProperty(this,"modelVoitureId",{
                    value:id,
                    enumerable:true,
                    configurable:true
                })
            },
            enumerable:true,
            configurable:true
        })
        Object.defineProperty(Entity.prototype,"clientId",{
            set:function(id){
                if(typeof id==="string")
                    id=ObjectId.createFromHexString(id);
                Object.defineProperty(this,"clientId",{
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