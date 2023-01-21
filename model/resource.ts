import { Action } from "./action";
import { Resource as ResourceSchema } from "../collection";
export class Resource{
    id:number;
    name:string;
    action:Action[];
    
    create(){
        ResourceSchema.create(this);
    }
    addAction(action:Action){
        ResourceSchema.find({id:this.id,},(obj:any)=>{
            console.log("ans : ");
            
            console.log(obj);
            
        });
        
        
        
        // Object.assign(this,)
        // console.log(this);
        



        // this.action.push(action);
        // return ResourceSchema.updateOne({id:this.id},this);
    }


}