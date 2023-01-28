
import { Entity } from "./Entity";
import { Db, ObjectId } from "mongodb";

export class Facture extends Entity {
    dueDate: Date;
    payDate: Date;
    cout: Number;
    status: Status;
    reparationId: ObjectId;

    save(db:Db,facture:Partial<Facture>){
        const collection= db.collection("facture")
        return collection.insertOne({
            dueDate: facture.dueDate,
            payDate: facture.payDate,
            cout: facture.cout,
            status: facture.status,
            reparationsId: facture.reparationId 
        })
    }

    static getAll(db:Db,pipeline=new Array()){
        const collection= db.collection("facture");
        
        
        
        const reparationRelation=[
            {
                // relation voiture.clientId =client.id
                $lookup:{
                    from: "reparation",
                    let: { r: `$_reparationId` },
                    as: "reparation",
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
                    reparation:{
                        $arrayElemAt:["$reparation",0]
                    }
                }
            }
        ];
        return  collection.aggregate([...reparationRelation,...pipeline])
    }


    


    
}

export enum Status{
    paye,
    pending
}