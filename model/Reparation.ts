
import { Entity } from "./Entity";
import { Voiture } from "./Voiture";
import { Db, ObjectId } from "mongodb"; 
import { ReparationStatus } from "./ReparationStatus";
import { ReparationDetail } from "./ReparationDetail";
















export class Reparation extends Entity {
    
    
    voitureId: ObjectId;
    voiture:Voiture;
    reparationDetail:ReparationDetail[];



    startDate: Date;
    endDate: Date;
    avancement: number;

    

    description: string;
    cost: number;
    status: ReparationStatus;
    
    







    
}

