import { Db, ObjectId } from "mongodb";
import { cast } from "../decorator";
import { Entity } from "./Entity";






export class Resource extends Entity{
    resourceName:string;

    @cast activity:Activity[];


    static async save(db:Db,resourceType : Partial<Resource>){
        return await db.collection("resource").insertOne({
            resourceName:resourceType.resourceName
        })
    }


    getAll(db:Db,pipeline:Array<any>=new Array()){
        const collection=db.collection("resource");

        const relation={
            $lookup:{
                from: "activity",
                let: { r: `$_id` },
                as: "activity",
                pipeline:[
                    {
                        $match:{
                            $expr:{
                                $eq:[`$resourceId`,"$$r"]
                            }
                        }
                    }
                ],
            },

        }; 


        return  collection.aggregate([relation,...pipeline])
    }
}



export class Activity extends Entity{
    activityName:string;
    ActionType:ActivityType;
    resourceId:ObjectId;

    static async save(db:Db,activity : Partial<Activity>){
        return await db.collection("activity").insertOne({
            activityName:activity.activityName,
            resourceId:activity.resourceId,
        })
    }

}


export enum ActivityType{
    depense,
    revenu
} 
 