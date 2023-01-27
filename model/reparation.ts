
import { Entity } from "./Entity";
import { ReparationSchema } from "../collection";
import { Voiture } from "./Voiture";
import { Db, ObjectId } from "mongodb";





export class Reparation extends Entity {
    description: String;
    cost: String;
    startDate: Date;
    endDate: Date;
    avancement: Number;
    status: String;
    voitureId: ObjectId;




    
}