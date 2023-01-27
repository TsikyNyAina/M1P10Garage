import mongoose from "mongoose";
import { Entity } from "./entity";
import { ReparationSchema } from "../collection";
import { Voiture } from "./voiture";

export class Reparation extends Entity {
    description: String;
    cost: String;
    start_date: Date;
    end_date: Date;
    avancement: Number;
    status: String;
    voiture_id: mongoose.Types.ObjectId;

    async create(){
        const rep=await ReparationSchema.create(this)
        return Object.assign(this,{...rep,id:rep.id})
    }

    static async find(filter:any={}){
        let rep=new Array();
        for(let a of (await ReparationSchema.find(filter).populate("voiture_id"))||[] ){
            rep.push(Object.assign(new Reparation(),{
                description:a.description,
                cost:a.cost,
                start_date:a.start_date,
                end_date:a.end_date,
                avancement: a.avancement,
                status: a.status
            }))
        }
        return rep;
    }

    constructor(){
        super() 
        Object.defineProperty(Reparation.prototype,"voiture_id",{
            set:function(value:any){
                let resource=undefined as any;
                
                if(!(value instanceof mongoose.Types.ObjectId))
                    resource=Object.assign(new Voiture(),{model: value.model,
                        year: value.year,
                        plate_number: value.plate_number,
                        client_id: value.client_id}) 
                Object.defineProperty(this,"voiture",{
                    value:resource,
                    enumerable:true,
                    writable:true,
                })
                Object.defineProperty(this,"voiture_id",{
                    value:resource?.id||value,
                    enumerable:true,
                    writable:true,
                }) 
            }
        })
    }
}