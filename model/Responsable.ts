 
import { Db, ObjectId } from "mongodb";
import { Entity } from "./Entity";

export class Responsable extends Entity {
    name: String;
    email: String;
    type: ResponsableType;
    mdp: String;
    
    async save(db:Db){
        return await db.collection("responsable").insertOne({
            name: this.name,
            email: this.email,
            type : this.type,
            mdp: this.mdp
        })
    }

    static async getById(db:Db,id:string){
        return await Responsable.getAll(db,[
            {
                $match:{
                      Id:ObjectId.createFromHexString(id)
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
        
        return await collection.aggregate([...pipeline])
    }
}

export enum ResponsableType{
    finacier,
    atelier
}
