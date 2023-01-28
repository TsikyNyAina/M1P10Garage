import { Entity } from "../model";

export function assign <T,R extends typeof Entity>(model:R,value:any):any{
    return Object.assign(new model(),value)
}
export function assignArray<T,R extends typeof Entity>(model:R,value:Array<any>):Array<any>{
    let rep=new Array()
    for(let v of value)
        rep.push(assign(model,v))
    return rep;
}