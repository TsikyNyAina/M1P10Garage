
import connect from "./datasource"; 

import {ObjectId} from 'mongodb';
import { Activity, Entity, Resource } from "./model/Resource";
// import * as cast from "./strict/cast";
// for(let v of Object.values(cast)) v()
 
function assign <T,R extends typeof Entity>(model:R,value:any):any{
    return Object.assign(new model(),value)
}






connect.then(async (client)=>{

    //tester
    // await Resource.save(client.currentDb,{resourceName:"piece",})
    // Activity.save(client.currentDb,{activityName:"achat",resourceId:ObjectId.createFromHexString("le ao amin base")})



    //jereo ito fonction ito fa ao le manao relation...mapiasa $lookup et pipeline
    await new Resource().getAll(client.currentDb,[{    
        $addFields:{
            //mamadika tableau ho lasa le element ao anatiny
            // activity:{
            //     $arrayElemAt:["$activity",0]
            // }
        }
    }]).forEach(e=>{
        console.log(assign(Resource,e))

    })

 
     



    await client.close()
}).catch(console.log)
