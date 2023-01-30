
import { Entity } from "./Entity";
import { Voiture } from "./Voiture";
import { Db, ObjectId } from "mongodb"; 
import { ReparationStatus } from "./ReparationStatus";
import { ReparationDetail } from "./ReparationDetail";
import { cast, swaggerIgnore } from "../decorator";
import { assignArray } from "../util";
import { idToString } from "../Parameter";
import { detailReparationRelation } from "../relation";





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
    constructor(){
        super();
        Object.defineProperty(Entity.prototype,"voitureId",{
            set:function(id){
                if(typeof id==="string")
                    id=ObjectId.createFromHexString(id);
                Object.defineProperty(this,"voitureId",{
                    value:id,
                    enumerable:true,
                    configurable:true
                })
            },
            enumerable:true,
            configurable:true
        });
        this.startDate=new Date();
        this.status=ReparationStatus.PRISE_EN_MAIN
    }
    async save(db:Db){
        const collection=db.collection("reparation");
        let rep=Object.assign(this,await collection.insertOne({
            voitureId:this.voitureId,
            startDate:this.startDate,
            endDate:this.endDate,
            avancement:this.avancement,
            description:this.description,
            cost:this.cost,
            status:this.status,
        }));
        if(this.reparationDetail){
            for(let r of this.reparationDetail){
                if(!r.id){
                    r.reparationId=rep.id
                    await r.save(db)
                }
            }
        }
        return rep; 
    }
    static getAll(db:Db,pipeline=new Array<any>()){
        const collection=db.collection("reparation");
         
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

