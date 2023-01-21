import { Action } from "./action";
import { Resource as ResourceSchema } from "../collection";
import { Entity } from "./entity";
export class Resource extends Entity{ 
    name:string;
    action:Action[];
    
    async create(){
        const newR=await ResourceSchema.create(this); 
        return Object.assign(this,{...newR,id:newR.id});
    }
    async addAction(naction:Action){
        const {id,name,action}:any=await ResourceSchema.findById(this.id);
        naction.resourceId=id;
        return await naction.create();
    }
    


}