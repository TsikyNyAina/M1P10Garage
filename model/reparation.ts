
import { Entity } from "./Entity";
import { Db, ObjectId } from "mongodb";

export class Reparation extends Entity {
    description: String;
    startDate: Date;
    endDate: Date;
    avancement: Number;
    status: String;
    voitureId: ObjectId;

    save(db:Db,reparation:Partial<Reparation>){
        const collection= db.collection("reparation")
        return collection.insertOne({
            description: reparation.description,
            startDate: reparation.startDate,
            endDate: reparation.endDate,
            avancement: reparation.avancement,
            status: reparation.status,
            voitureId: reparation.voitureId
        })
    }

    static getAll(db:Db,pipeline=new Array()){
        const collection= db.collection("reparation");      
        const voitureRelation=[
            {
                // relation voiture.clientId =client.id
                $lookup:{
                    from: "voiture",
                    let: { r: `$_voitureId` },
                    as: "voiture",
                    pipeline:[
                        {
                            $match:{
                                $expr:{
                                    $eq:[`$id`,"$$r"]
                                }
                            }
                        }
                    ],
                },
            },
            {
                // alaina ny indice 0 satria tableau no averiny vao tsy asina an'ito
                $addFields:{
                    voiture:{
                        $arrayElemAt:["$voiture",0]
                    }
                }
            }
        ];
        
        return  collection.aggregate([...voitureRelation,...pipeline])
    }


    
}