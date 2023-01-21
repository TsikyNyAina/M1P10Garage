import  { ActionSchema}  from "../collection";
import { Entity } from "./entity";

export class Action extends Entity{ 
    name:string;
    cout:number;
    resourceId:number;
    async create(){
        return Object.assign(this,await ActionSchema.create(this))
    }
}