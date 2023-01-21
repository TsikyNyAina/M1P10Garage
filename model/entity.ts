import mongoose from "mongoose";

class Entityc{
    id:mongoose.Types.ObjectId;
    constructor(){
        const hidden={
            set:function(){},
            configurable:true,
            enumerable:false
        };

        Object.defineProperty(this,"_doc",hidden)
        Object.defineProperty(this,"$__",hidden)
        Object.defineProperty(this,"$isNew",hidden)
        Object.defineProperty(this,"$errors",hidden)
        
        
    }

}


export const Entity=Entityc