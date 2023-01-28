import { Entity } from "./Entity";
import { Reparation } from "./Reparation";
import { cast, swaggerIgnore } from "../decorator";
import { Db, ObjectId } from "mongodb";
import { ModelVoiture } from "./ModelVoiture";
import { Client } from "./Client";
import { assignArray } from "../util";




export class Voiture extends Entity{
    year: string;
    numero: string;
    clientId: ObjectId;
    modelVoitureId: ObjectId;
    
    
    @swaggerIgnore @cast modelVoiture:ModelVoiture
    @swaggerIgnore @cast client:Client;
    @swaggerIgnore @cast reparation: Reparation[];


    async save(db:Db){
        const collection= db.collection("voiture")
        return Object.assign(this,await collection.insertOne({
            modelVoitureId:this.modelVoitureId,
            year:this.year,
            numero:this.numero,
            clientId:this.clientId
        }));
    }
    static getAll(db:Db,pipeline=new Array()){
        const collection= db.collection("voiture");
        
        
        const clientRelation=[
            {
                // relation voiture.clientId =client.id
                $lookup:{
                    from: "client",
                    localField:"clientId",
                    foreignField:"_id",
                    as: "client",
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
                    localField:"_id",
                    as: "reparation",
                    foreignField:"voitureId",
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
                },
            },
        ];
        const modelVoitureRelation=[
            {
                $lookup:{
                    from: "modelVoiture",
                    localField:"modelVoitureId",
                    as: "modelVoiture",
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
                },
                
            },
            {
                $addFields:{
                    modelVoiture:{
                        $arrayElemAt:["$modelVoiture",0]
                    }
                }
            }
        ]
        return  collection.aggregate([...modelVoitureRelation,...clientRelation,...reparationRelation,...pipeline]).toArray().then(m=>assignArray(Voiture,m))
    }
    async update(db:Db){    
        const collection=db.collection("voiture");
        await collection.updateOne({_id:this.id},{
            $set:{
                year:this.year,
                numero:this.numero,
                clientId:this.clientId,
                modelVoitureId:this.modelVoitureId,
            }
        })
        return this;
    }
    delete(db:Db){
        const collection=db.collection("voiture");
        return collection.deleteOne({_id:this.id})    
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
        Object.defineProperty(Entity.prototype,"clientId",{
            set:function(id){
                if(typeof id==="string")
                    id=ObjectId.createFromHexString(id);
                Object.defineProperty(this,"clientId",{
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