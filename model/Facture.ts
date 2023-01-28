
import { Entity } from "./Entity";
import { Db, ObjectId } from "mongodb";
import { reparationRelation } from "../relation";

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
        return  collection.aggregate([...reparationRelation,...pipeline])
    }


    


    
}

export enum Status{
    paye,
    pending
}