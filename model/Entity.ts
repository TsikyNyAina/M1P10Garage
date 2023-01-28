import { Db, ObjectId } from "mongodb";

export class Entity{
    id:ObjectId
    constructor(){
        Object.defineProperty(Entity.prototype,"_id",{
            set:function(id){
                this.id=id
            },
            configurable:true
        })
        Object.defineProperty(Entity.prototype,"id",{
            set:function(id){
                if(typeof id==="string")
                    id=ObjectId.createFromHexString(id);
                Object.defineProperty(this,"id",{
                    value:id,
                    enumerable:true,
                    configurable:true
                })
            },
            enumerable:true,
            configurable:true
        })
        Object.defineProperty(Entity.prototype,"insertedId",{
            set:function(id){
                this.id=id
            },
            configurable:true
        })
        Object.defineProperty(Entity.prototype,"acknowledged",{
            set:function(id){
                
            },
            configurable:true,
            enumerable:false
        })
        

    }
}