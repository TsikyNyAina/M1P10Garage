
import { Db, ObjectId } from "mongodb";
import { Entity } from "./Entity";

import { cast } from "../decorator";
import { Voiture } from "./Voiture";

export class Client extends Entity {
    name: String;
    email: String;
    phone_number: String;
    mdp: String;
    @cast voiture:Voiture[];

    static async save(db:Db,client : Partial<Client>){
        return await db.collection("client").insertOne({
            name: client.name,
            email: client.email,
            phone_number : client.phone_number,
            mdp: client.mdp
        })
    }

    getAll(db:Db,pipeline:Array<any>=new Array()){
        const collection=db.collection("client");

        const relation={
            $lookup:{
                from: "voiture",
                let: { r: `$_id` },
                as: "voiture",
                pipeline:[
                    {
                        $match:{
                            $expr:{
                                $eq:[`$clientId`,"$$r"]
                            }
                        }
                    }
                ],
            },

        }; 


        return  collection.aggregate([relation,...pipeline])
    }

    getOne(db:Db,query:any,pipeline:Array<any>=new Array()){
        const collection=db.collection("client");
        return collection.aggregate([{$match:query},{$limit:1},...pipeline]).next().then(val=>val)
    }

    
}
