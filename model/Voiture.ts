import { Entity } from "./Entity";
import { Reparation } from "./Reparation";
import { cast } from "../decorator";
import { Db, ObjectId } from "mongodb";
import { ModelVoiture } from "./ModelVoiture";




export class Voiture extends Entity{
    year: String;
    numero: String;
    clientId: ObjectId;
    modelVoitureId: ObjectId;
    
    
    @cast modelVoiture:ModelVoiture
    @cast reparation: Reparation[];


    save(db:Db){
        const collection= db.collection("voiture")
        return collection.insertOne({
            modelVoitureId:this.modelVoitureId,
            year:this.year,
            numero:this.numero,
            clientId:this.clientId
        })
    }
    static getAll(db:Db,pipeline=new Array()){
        const collection= db.collection("voiture");
        
        
        const clientRelation=[
            {
                // relation voiture.clientId =client.id
                $lookup:{
                    from: "client",
                    let: { r: `$clientId` },
                    as: "client",
                    pipeline:[
                        {
                            $match:{
                                $expr:{
                                    $eq:[`$_id`,"$$r"]
                                }
                            }
                        }
                    ],
                },
            },
            {
                // alaina ny indice 0 satria tableau no averiny vao tsy asina an'ito
                $addFields:{
                    client:{
                        $arrayElemAt:["$client",0]
                    }
                }
            }
        ];
        const reparationRelation=[
            {
                // relation voiture.id =Reparation.voitureId
                $lookup:{
                    from: "reparation",
                    let: { r: `$_id` },
                    as: "reparation",
                    pipeline:[
                        {
                            $match:{
                                $expr:{
                                    $eq:[`$voitureId`,"$$r"]
                                }
                            }
                        }
                    ],
                },
            },
        ];
        return  collection.aggregate([...clientRelation,...reparationRelation,...pipeline])
    }

}