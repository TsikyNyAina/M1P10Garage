import mongoose from "mongoose";
import { Entity } from "./entity";
import  { VoitureSchema } from "../collection";
import { Reparation } from "./reparation";
import { cast } from "../decorator";

export class Voiture extends Entity{
    model: String;
    year: String;
    plate_number: String;
    client_id: mongoose.Schema.Types.ObjectId;
    @cast reparation: Reparation[];

    async create(){
        const newR=await VoitureSchema.create(this); 
        return Object.assign(this,{...newR,id:newR.id});
    }

    async addReparation(naction:Reparation){
        const voiture:any=await VoitureSchema.findById(this.id);
        naction.voiture_id=voiture.id;
        const n=await naction.create();
        console.log(n);
        voiture.action.push(n.id)
        return await voiture.save()
    }


}