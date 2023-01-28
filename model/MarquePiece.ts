import { Db ,ObjectId} from "mongodb";
import { cast } from "../decorator";
import { assignArray } from "../util";
import { Entity } from "./Entity";
import { ModelVoiture } from "./ModelVoiture";

export class MarquePiece extends Entity{
    marquePieceName:string;
    @cast modelVoiture:ModelVoiture[];
    touteModelVoiture:boolean
    id:ObjectId;
    save(db:Db){
        const collection=db.collection("marquePiece");
        return collection.insertOne({
            marquePieceName:this.marquePieceName,
            touteModelVoiture:this.touteModelVoiture,
            modelVoiture:this.modelVoiture
        });
        
    }   
    static getAll(db:Db,pipeline:Array<any>=new Array<any>()){
        const collection=db.collection("marquePiece");
        const modelVoitureMarquePieceRelation=[
            {
                $lookup:{
                    from: "marquePieceModelVoiture",
                    as: "modelVoiture",
                    localField:"_id",
                    foreignField:"marquePieceId",
                    pipeline:[
                        {
                            $lookup:{
                                from:"modelVoiture",
                                as:"modelVoiture",
                                localField:"modelVoitureId",
                                foreignField:"_id",
                                pipeline:[
                                    {
                                        $lookup:{
                                            from:"marqueVoiture",
                                            as:"marqueVoiture",
                                            localField:"marqueVoitureId",
                                            foreignField:"_id",
                                        }
                                    },
                                    {
                                        $addFields:{
                                            marqueVoiture:{
                                                $arrayElemAt:["$marqueVoiture",0]
                                            }
                                        }
                                    }                                   
                                ]
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
                
                }
                
            },
            {
                $addFields:{
                    modelVoiture:"$modelVoiture.modelVoiture"
                }
            }
        ]
        return collection.aggregate([...modelVoitureMarquePieceRelation,...pipeline]).toArray().then(m=>assignArray(MarquePiece,m));
    }
    update(db:Db){
        const collection=db.collection("marquePiece");
        return collection.updateOne({_id:this.id},{
            marquePieceName:this.marquePieceName,
            touteModelVoiture:this.touteModelVoiture
        });
    }
    delete(db:Db){
        const collection=db.collection("marquePiece");
        return collection.deleteOne({_id:this.id})    
    }
}

