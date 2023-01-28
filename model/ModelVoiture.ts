import { Entity } from "./Entity";
import { MarqueVoiture } from "./MarqueVoiture";
import { Db, ObjectId } from "mongodb";
import { cast } from "../decorator";
import { assignArray } from "../util";




export class ModelVoiture extends Entity{
    marqueVoitureId:ObjectId;
    modelName:string;
    @cast marqueVoiture:MarqueVoiture;

    async save(db:Db){
        const collection=db.collection("modelVoiture");
        return  Object.assign(this,await collection.insertOne({
            modelName:this.modelName,
            marqueVoitureId:this.marqueVoiture?.id||this.marqueVoitureId
        }));
        
    }
    static getAll(db:Db,pipeline=new Array<any>()){
        const collection=db.collection("modelVoiture");

        const marqueRelation=[
            {
                // relation voiture.clientId =client.id
                $lookup:{
                    from: "marqueVoiture",
                    let: { r: `$marqueVoitureId` },
                    as: "marqueVoiture",
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
                    marqueVoiture:{
                        $arrayElemAt:["$marqueVoiture",0]
                    }
                }
            }
        ];


        return collection.aggregate([...marqueRelation,...pipeline]).toArray().then(m=>assignArray(ModelVoiture,m))
    }
    async update(db:Db){    
        const collection=db.collection("modelVoiture");
        await collection.updateOne({_id:this.id},{
            $set:{
                modelName:this.modelName,
                marqueVoitureId:this.marqueVoiture?.id||this.marqueVoitureId
            }
        })
        return this;
    }
    delete(db:Db){
        const collection=db.collection("modelVoiture");
        return collection.deleteOne({_id:this.id})    
    }

    static async getById(db: Db, id: string) {
        return await ModelVoiture.getAll(db, [
            {
                $match: {
                    Id: ObjectId.createFromHexString(id)
                }
            }
        ])
    }
    constructor(){
        super();
        Object.defineProperty(Entity.prototype,"marqueVoitureId",{
            set:function(id){
                if(typeof id==="string")
                    id=ObjectId.createFromHexString(id);
                Object.defineProperty(this,"marqueVoitureId",{
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
