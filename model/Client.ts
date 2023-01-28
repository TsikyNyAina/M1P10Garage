
import { Db, ObjectId } from "mongodb";
import { Entity } from "./Entity";

import { cast, swaggerIgnore } from "../decorator";
import { Voiture } from "./Voiture";
import { assignArray } from "../util";
import { relationVoiture } from "../relation"

export class Client extends Entity {
    name: string;
    email: string;
    phoneNumber: string;
    mdp: string;
    @swaggerIgnore @cast voiture:Voiture[];
    
    async save(db:Db){
        return Object.assign(this,await db.collection("client").insertOne({
            name: this.name,
            email: this.email,
            phone_number: this.phoneNumber,
            mdp: this.mdp
        }))
    }
    static async getAll(db: Db, pipeline: Array<any> = new Array()) {
        const collection = db.collection("client");
        
        return  collection.aggregate([relationVoiture,...pipeline]).toArray().then(m=>assignArray(Client,m))
    }
    async update(db: Db) {
        const collection = db.collection("client");
        await collection.updateOne({ _id: this.id }, {
            $set: {
                name: this.name,
                email: this.email,
                phoneNumber: this.phoneNumber,
                mdp: this.mdp,
            }
        })
        return this;
    }
    delete(db: Db) {
        const collection = db.collection("client");
        return collection.deleteOne({ _id: this.id })
    }

    static getById(db: Db, id: string) {
        return Client.getAll(db, [
            {
                $match: {
                    _id: ObjectId.createFromHexString(id)
                }
            }
        ])
    }


}
