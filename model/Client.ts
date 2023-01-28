
import { Db, ObjectId } from "mongodb";
import { Entity } from "./Entity";

import { cast } from "../decorator";
import { Voiture } from "./Voiture";

export class Client extends Entity {
    name: String;
    email: String;
    phoneNumber: String;
    mdp: String;
    @cast voiture: Voiture[];

    async save(db: Db) {
        return Object.assign(this, await db.collection("client").insertOne({
            name: this.name,
            email: this.email,
            phone_number: this.phoneNumber,
            mdp: this.mdp
        }))
    }
    static async getAll(db: Db, pipeline: Array<any> = new Array()) {
        const collection = db.collection("client");
        const relationVoiture = {
            $lookup: {
                from: "voiture",
                localField: `$_id`,
                foreignField: `$clientId`,
                as: "voiture",
                pipeline: [
                    {
                        $lookup: {
                            from: "reparation",
                            localField: `$_id`,
                            foreignField: `$voitureId`,
                            as: "reparation",
                        }
                    }
                ],
            },
        };
        return collection.aggregate([relationVoiture, ...pipeline])
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

    static async getById(db: Db, id: string) {
        return await Client.getAll(db, [
            {
                $match: {
                    _id: ObjectId.createFromHexString(id)
                }
            }
        ])
    }


}
