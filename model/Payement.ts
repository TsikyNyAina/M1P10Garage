import { Db, ObjectId } from "mongodb";
import { cast } from "../decorator";
import { assignArray } from "../util";
import { Entity } from "./Entity";
import { Reparation } from "./Reparation";

export class Payement extends Entity{
    reparationId:ObjectId;
    datePayement:Date;
    montant:number;
    
    @cast reparation:Reparation;

    async save(db:Db){
        const collection=db.collection("payement");
        return Object.assign(this,await collection.insertOne({
            reparationId:this.reparationId,
            datePayement:this.datePayement,
            montant:this.montant
        }))
    }

    static getAll(db:Db,pipeline=new Array<any>()){
        const collection=db.collection("payement");
        const reparationRelation=[
            {
                $lookup:{
                    from:"reparation",
                    as:"reparation",
                    localField:"reparationId",
                    foreignField:"_id",
                    pipeline:[
                        {
                            $lookup:{
                                from:"reparationDetail",
                                as:"reparationDetail",
                                localField:"_id",
                                foreignField:"reparationId",
                                pipeline:[
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
                            }
                        },
                        {
                            $lookup:{
                                from:"voiture",
                                as:"voiture",
                                localField:"voitureId",
                                foreignField:"_id"
                            }
                        }
                    ]
                }
            }
        ];
        return collection.aggregate([...reparationRelation,...pipeline]).toArray().then(m=>assignArray(Payement,m))
    }
    async update(db:Db){    
        const collection=db.collection("payement");
        await collection.updateOne({_id:this.id},{
            $set:{
                reparationId:this.reparationId,
                datePayement:this.datePayement,
                montant:this.montant
            }
        })
        return this;
    }
    delete(db:Db){
        const collection=db.collection("payement");
        return collection.deleteOne({_id:this.id})    
    }

    static async getById(db: Db, id: string) {
        return await Payement.getAll(db, [
            {
                $match: {
                    _id: ObjectId.createFromHexString(id)
                }
            }
        ])

    }

}