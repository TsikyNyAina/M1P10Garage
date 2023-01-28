
import { Entity } from "./Entity";
import { Voiture } from "./Voiture";
import { Db, ObjectId } from "mongodb"; 
import { ReparationStatus } from "./ReparationStatus";
import { ReparationDetail } from "./ReparationDetail";
import { cast, swaggerIgnore } from "../decorator";
















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
    







    
}

