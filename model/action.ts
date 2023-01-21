import mongoose from "mongoose";
import  { ActionSchema}  from "../collection";
import { Entity } from "./entity";
import { Resource } from "./resource";

export class Action extends Entity{ 
    name:string;
    cout:number;
    resourceId:mongoose.Types.ObjectId;
    async create(){
        const rep=await ActionSchema.create(this)
        return Object.assign(this,{...rep,id:rep.id})
    }
    static async find(filter:any={}){
        let rep=new Array();
        for(let a of (await ActionSchema.find(filter).populate("resourceId"))||[] ){
            rep.push(Object.assign(new Action(),{name:a.name,cout:a.cout,resourceId:a.resourceId}))
        }
        return rep;
    }
    constructor(){
        super() 
        Object.defineProperty(Action.prototype,"resourceId",{
            set:function(value:any){
                let resource=undefined as any;
                
                if(!(value instanceof mongoose.Types.ObjectId))
                    resource=Object.assign(new Resource(),{name:value.name,id:value.id}) 
                Object.defineProperty(this,"resource",{
                    value:resource,
                    enumerable:true,
                    writable:true,
                })
                Object.defineProperty(this,"resourceId",{
                    value:resource?.id||value,
                    enumerable:true,
                    writable:true,
                }) 
            }
        })
    }
}