import mongoose from "mongoose";
import  { ActionSchema}  from "../collection";
import { Entity } from "./entity";

export class Action extends Entity{ 
    name:string;
    cout:number;
    resourceId:mongoose.Schema.Types.ObjectId;
    async create(){
        return Object.assign(this,await ActionSchema.create(this))
    }
    static async find(filter:any={}){
        return await ActionSchema.find(filter)
    }
}