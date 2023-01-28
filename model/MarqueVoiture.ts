import { Db, ObjectId } from "mongodb";
import { assignArray } from "../util";
import { Entity } from "./Entity";

export class MarqueVoiture extends Entity{
    marqueName:string;
    id:ObjectId
    async save(db:Db){
        const collection=db.collection("marqueVoiture");
        return  Object.assign(this,await collection.insertOne({
            marqueName:this.marqueName
        }))
        
    }
    static getAll(db:Db,pipeline=new Array<any>()){
        const collection=db.collection("marqueVoiture");
        return collection.aggregate(pipeline).toArray().then(m=>assignArray(MarqueVoiture,m))
    }
    async update(db:Db){    
        const collection=db.collection("marqueVoiture");
        await collection.updateOne({_id:this.id},{
            $set:{
                marqueName:this.marqueName
            }
        })
        return this;
    }
    delete(db:Db){
        const collection=db.collection("marqueVoiture");
        return collection.deleteOne({_id:this.id})    
    }

    static async getById(db: Db, id: string) {
        return await MarqueVoiture.getAll(db, [
            {
                $match: {
                    _id: ObjectId.createFromHexString(id)
                }
            }
        ])
    }
    
}


