import { Db, ObjectId } from "mongodb";
import { assignArray } from "../util";
import { Entity } from "./Entity";




export class MarquePieceModelVoiture extends Entity{ 
    modelVoitureId:ObjectId;
    marquePieceId:ObjectId;
    async save(db:Db){
        const collection=db.collection("marquePieceModelVoiture");
        return Object.assign(this,await collection.insertOne({
            modelVoitureId:this.modelVoitureId,
            marquePieceId:this.marquePieceId
        }))
    }
    static getAll(db:Db,pipeline:Array<any>=new Array()){
        const collection=db.collection("marquePieceModelVoiture");
        const relationVoiture=[
            {
                $lookup:{
                    from:"modelVoiture",
                    as:"modelVoiture",
                    localField:"modelVoitureId",
                    foreignField:"_id"
                }
            },
            {
                $addFields:{
                    modelVoiture:{
                        $arrayElemAt:["$modelVoiture",0]
                    }
                }
            }
        ]
        const relationPiece=[
            {
                $lookup:{
                    from:"marquePiece",
                    as:"marquePiece",
                    localField:"marquePieceId",
                    foreignField:"_id"
                }
            },
            {
                $addFields:{
                    marquePiece:{
                        $arrayElemAt:["$marquePiece",0]
                    }
                }
            }
        ]


        return collection.aggregate([...relationVoiture,...relationPiece,...pipeline]).toArray().then((m)=>assignArray(MarquePieceModelVoiture,m)); 
    }
    delete(db:Db){
        const collection=db.collection("marquePieceModelVoiture");
        return collection.deleteOne({_id:this.id})    
    }

    static async getById(db: Db, id: string) {
        return await MarquePieceModelVoiture.getAll(db, [
            {
                $match: {
                    _id: ObjectId.createFromHexString(id)
                }
            }
        ])
    }

    async update(db:Db){    
        const collection=db.collection("marquePieceModelVoiture");
        await collection.updateOne({_id:this.id},{
            $set:{
                modelVoitureId:this.modelVoitureId,
                marquePieceId:this.marquePieceId
            }
        })
        return this;
    }
    constructor(){
        super();
        Object.defineProperty(Entity.prototype,"modelVoitureId",{
            set:function(id){
                if(typeof id==="string")
                    id=ObjectId.createFromHexString(id);
                Object.defineProperty(this,"modelVoitureId",{
                    value:id,
                    enumerable:true,
                    configurable:true
                })
            },
            enumerable:true,
            configurable:true
        })
        Object.defineProperty(Entity.prototype,"marquePieceId",{
            set:function(id){
                if(typeof id==="string")
                    id=ObjectId.createFromHexString(id);
                Object.defineProperty(this,"marquePieceId",{
                    value:id,
                    enumerable:true,
                    configurable:true
                })
            },
            enumerable:true,
            configurable:true
        })
    }
}