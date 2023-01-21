import { Action } from "./action";
import { Resource as ResourceSchema } from "../collection";
import { Entity } from "./entity";
import { cast } from "../decorator";
export class Resource extends Entity{ 
    name:string;

    @cast action:Action[];
    
    async create(){
        const newR=await ResourceSchema.create(this); 
        return Object.assign(this,{...newR,id:newR.id});
    }
    async addAction(naction:Action){
        const resource:any=await ResourceSchema.findById(this.id);
        naction.resourceId=resource.id;
        const n=await naction.create();
        console.log(n);
        resource.action.push(n.id)
        return await resource.save()
    }
    static async find(filter:any={}){



        const filterForAction={path:"action",match:filter.action};
        
        delete filter.action
        
        
        let rep=await new Array();
        let arr=await ResourceSchema.find(filter).populate(filterForAction);
        for(let a of  arr||[]){  
            
            
            let r=Object.assign(new Resource(),{id:a.id,name:a.name,action:JSON.parse(JSON.stringify(a.action))});
            rep.push(r)
            
        }
        return await rep;
    }


}