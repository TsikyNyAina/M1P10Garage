import { Action } from "./action";
import { Resource as ResourceSchema } from "../collection";
export class Resource{
    id:number;
    name:string;
    action:Action[];
    
    create(){
        return ResourceSchema.create(this);
    }
    async addAction(naction:Action){
        const {id,name,action}:any=await ResourceSchema.findOne({id:this.id});
        await Object.assign(this,{id,name,action});
        await this.action.push(naction);
        return await ResourceSchema.updateOne({id:this.id},this);
    }


}