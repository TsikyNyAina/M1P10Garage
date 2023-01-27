import {Resource} from "../model/Resource";
import {Activity} from "../model/Resource";

export function init0(): void {
    Object.defineProperty(Resource.prototype,"activity",{
        set:function(value:any){
            if (value && !(value instanceof Array))
                throw new Error(JSON.stringify(value) +"cannot be casted to activity:Activity[]");
            for (let i =0;i<(value||[]).length;i++){
                if(value[i] instanceof Activity || !value[i]){}
                else if (typeof value[i]!= 'object' )
                    throw new Error(JSON.stringify(value[i]) +" cannot be casted to Activity");
                else value[i]=Object.assign(new Activity(),value[i]);
            }
            Object.defineProperty(this,"activity",{
                value:value,
                enumerable:true,
                writable:true,
            })
        }
    })
}
