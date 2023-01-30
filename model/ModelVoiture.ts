import { Entity } from "./Entity";
import { MarqueVoiture } from "./MarqueVoiture";
import { Db, ObjectId } from "mongodb";
import { cast } from "../decorator";
import { assignArray } from "../util";
import { marqueRelation } from "../relation";



export class ModelVoiture extends Entity{
    marqueVoitureId:ObjectId;
    modelName:string;
    @cast marqueVoiture:MarqueVoiture;

    async save(db:Db){
        const collection=db.collection("modelVoiture");
        return  Object.assign(this,await collection.insertOne({
            modelName:this.modelName,
            marqueVoitureId:this.marqueVoiture?.id||this.marqueVoitureId
        }));
        
    }
    static getAll(db:Db,pipeline=new Array<any>()){
        const collection=db.collection("modelVoiture");
        return collection.aggregate([...marqueRelation,...pipeline]).toArray().then(m=>assignArray(ModelVoiture,m))
    }
    async update(db:Db){    
        const collection=db.collection("modelVoiture");
        await collection.updateOne({_id:this.id},{
            $set:{
                modelName:this.modelName,
                marqueVoitureId:this.marqueVoiture?.id||this.marqueVoitureId
            }
        })
        return this;
    }
    delete(db:Db){
        const collection=db.collection("modelVoiture");
        return collection.deleteOne({_id:this.id})    
    }

    static async getById(db: Db, id: string) {
        return await ModelVoiture.getAll(db, [
            {
                $match: {
                    _id: ObjectId.createFromHexString(id)
                }
            }
        ])
    }
    constructor(){
        super();
        Object.defineProperty(Entity.prototype,"marqueVoitureId",{
            set:function(id){
                if(typeof id==="string")
                    id=ObjectId.createFromHexString(id);
                Object.defineProperty(this,"marqueVoitureId",{
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
