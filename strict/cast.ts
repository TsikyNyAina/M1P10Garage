import {Resource} from "../model/resource";
import {Action} from "../model/action";

export function init0(): void {
    Object.defineProperty(Resource.prototype,"action",{
        set:function(value:any){
            if (value && !(value instanceof Array))
                throw new Error(JSON.stringify(value) +"cannot be casted to action:Action[]");
            for (let i =0;i<(value||[]).length;i++){
                if(value[i] instanceof Action || !value[i]){}
                else if (typeof value[i]!= 'object' )
                    throw new Error(JSON.stringify(value[i]) +" cannot be casted to Action");
                else value[i]=Object.assign(new Action(),value[i]);
            }
            Object.defineProperty(this,"action",{
                value:value,
                enumerable:true,
                writable:true,
            })
        }
    })
}
