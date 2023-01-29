import { Entity } from "./Entity";
import { Db, ObjectId } from "mongodb";
import { assignArray } from "../util";



export class Salaire extends Entity{
    datePayement: Date;
    montant: Number;
    responsableId: ObjectId;
    


    async save(db:Db){
        const collection= db.collection("salaire")
        return Object.assign(this,await collection.insertOne({
            datePayement:this.datePayement,
            montant:this.montant,
            responsableId:this.responsableId
        }));
    }

    static getById(db: Db, id: string) {
        return Salaire.getAll(db, [
            {
                $match: {
                    _id: ObjectId.createFromHexString(id)
                }
            }
        ])
    }
    
    static getAll(db:Db,pipeline=new Array()){
        const collection= db.collection("salaire");
        return  collection.aggregate([...pipeline]).toArray().then(m=>assignArray(Salaire,m))
    }
    async update(db:Db){    
        const collection=db.collection("salaire");
        await collection.updateOne({_id:this.id},{
            $set:{
                datePayement:this.datePayement,
                montant:this.montant,
                responsableId:this.responsableId
            }
        })
        return this;
    }
    delete(db:Db){
        const collection=db.collection("salaire");
        return collection.deleteOne({_id:this.id})    
    }
    constructor(){
        super();
    }


}