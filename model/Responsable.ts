 
import { Db, ObjectId } from "mongodb";
import { Entity } from "./Entity";
import { assignArray } from "../util";

export class Responsable extends Entity {
    name: string;
    email: string;
    type: ResponsableType;
    mdp: string;
    
    async save(db:Db){
        return await db.collection("responsable").insertOne({
            name: this.name,
            email: this.email,
            type : this.type,
            mdp: this.mdp
        })
    }

    static getById(db: Db, id: string) {
        return Responsable.getAll(db, [
            {
                $match: {
                    _id: ObjectId.createFromHexString(id)
                }
            }
        ])
    }

    async update(db:Db){    
        const collection=db.collection("responsable");
        await collection.updateOne({_id:this.id},{
            $set:{
                name:this.name ,
                email:this.email ,
                type:this.type ,
                mdp:this.mdp ,
            }
        })
        return this;
    }
    delete(db:Db){
        const collection=db.collection("responsable");
        return collection.deleteOne({_id:this.id})    
    }

    static async getAll(db:Db,pipeline:Array<any>=new Array()){
        const collection=db.collection("responsable");
        return collection.aggregate([...pipeline]).toArray().then(m=>assignArray(Responsable,m))
    }
}

export enum ResponsableType{
    finacier,
    atelier
}