 
import { Db, ObjectId } from "mongodb";
import { Entity } from "./Entity";

export class Responsable extends Entity {
    name: String;
    email: String;
    type: ResponsableType;
    mdp: String;
    
    static async save(db:Db,client : Partial<Responsable>){
        return await db.collection("responsable").insertOne({
            name: client.name,
            email: client.email,
            type : client.type,
            mdp: client.mdp
        })
    }

    getOne(db:Db,query:any,pipeline:Array<any>=new Array()){
        const collection=db.collection("responsable");
        return collection.aggregate([{$match:query},{$limit:1},...pipeline]).next().then(val=>val)
    }
}

export enum ResponsableType{
    finacier,
    atelier
}
