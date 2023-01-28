import { Entity } from "./Entity";
import { Db, ObjectId } from "mongodb";
import { MarquePiece } from "./MarquePiece";
import { cast, swaggerIgnore } from "../decorator";
import { Reparation } from "./Reparation";
import { assignArray } from "../util";
export class ReparationDetail extends Entity{
    reparationId:ObjectId;
    marquePieceId:ObjectId;
    quantity:number;
    etat:number;
    cost:number;
    
    
    @cast @swaggerIgnore marquePiece:MarquePiece;
    @cast @swaggerIgnore reparation:Reparation;
    


    constructor(){
        super();
        Object.defineProperty(Entity.prototype,"reparationId",{
            set:function(id){
                if(typeof id==="string")
                    id=ObjectId.createFromHexString(id);
                Object.defineProperty(this,"reparationId",{
                    value:id,
                    enumerable:true,
                    configurable:true
                })
            },
            enumerable:true,
            configurable:true
        });
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
        });
    }

    async save(db:Db){
        const collection=db.collection("reparationDetail");
        return Object.assign(this,collection.insertOne({
            reparationId:this.reparationId,
            marquePieceId:this.marquePieceId,
            quantity:this.quantity,
            etat:this.etat,
            cost:this.cost,
        }));
    }
    static getAll(db:Db,pipeline=new Array<any>()){
        const collection=db.collection("reparationDetail");
        const detailReparationRelation=[
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
            
        ];
        return collection.aggregate([...pipeline]).toArray().then(m=>assignArray(ReparationDetail,m))
    }
    async update(db:Db){    
        const collection=db.collection("reparationDetail");
        await collection.updateOne({_id:this.id},{
            $set:{
                reparationId:this.reparationId,
                marquePieceId:this.marquePieceId,
                quantity:this.quantity,
                etat:this.etat,
                cost:this.cost,
            }
        })
        return this;
    }
    delete(db:Db){
        const collection=db.collection("reparationDetail");
        return collection.deleteOne({_id:this.id})    
    }
    static async getById(db: Db, id: string) {
        return await ReparationDetail.getAll(db, [
            {
                $match: {
                    _id: ObjectId.createFromHexString(id)
                }
            }
        ])

    }


}
