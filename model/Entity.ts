import { Db, ObjectId } from "mongodb";

export class Entity{
    id:ObjectId
    constructor(){
        Object.defineProperty(Entity.prototype,"_id",{
            set:function(id){
                if(typeof id==="string")
                    this.id=ObjectId.createFromHexString(id);
                else if (id) this.id=id
            },
            configurable:true
        })
    }
}