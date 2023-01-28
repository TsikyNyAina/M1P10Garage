
import { Entity } from "./Entity";
import { Voiture } from "./Voiture";
import { Db, ObjectId } from "mongodb"; 
import { ReparationStatus } from "./ReparationStatus";
import { ReparationDetail } from "./ReparationDetail";
import { cast, swaggerIgnore } from "../decorator";
import { assignArray } from "../util";





export class Reparation extends Entity {
    
    
    voitureId: ObjectId;
    startDate: Date;
    endDate: Date;
    avancement: number;    
    description: string;
    cost: number;
    status: ReparationStatus;
    
    @cast @swaggerIgnore reparationDetail:ReparationDetail[];
    @cast @swaggerIgnore voiture:Voiture;
    
    async save(db:Db){
        const collection=db.collection("reparation");
        return Object.assign(this,await collection.insertOne({
            voitureId:this.voitureId,
            startDate:this.startDate,
            endDate:this.endDate,
            avancement:this.avancement,
            description:this.description,
            cost:this.cost,
            status:this.status,
        }));
    }
    static getAll(db:Db,pipeline=new Array<any>()){
        const collection=db.collection("reparation");
        const detailReparationRelation=[
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
        ];
        return collection.aggregate([...detailReparationRelation,...pipeline]).toArray().then(m=>assignArray(Reparation,m))
    }
    async update(db:Db){    
        const collection=db.collection("reparation");
        await collection.updateOne({_id:this.id},{
            $set:{
                voitureId:this.voitureId,
                startDate:this.startDate,
                endDate:this.endDate,
                avancement:this.avancement,
                description:this.description,
                cost:this.cost,
                status:this.status,
            }
        })
        return this;
    }
    delete(db:Db){
        const collection=db.collection("reparation");
        return collection.deleteOne({_id:this.id})    
    }

    static async getById(db: Db, id: string) {
        return await Reparation.getAll(db, [
            {
                $match: {
                    _id: ObjectId.createFromHexString(id)
                }
            }
        ])

    }


    
}

