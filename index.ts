 
import * as controller from "./controller";
import * as cast from "./strict/cast";
import * as rest from "./strict/rest";
import cors from "cors"

import dotenv from "dotenv";
import express from "express";  
import swaggerJson from "./strict/swagger.json"
import swaggerUi from "swagger-ui-express";  

dotenv.config()
for(let v of Object.values(cast)) v()
for(let v of Object.values(rest)) v()
 


const app=express();

app.use(express.json())
app.use(express.raw())
app.use(
    '/documentation',
    swaggerUi.serve, 
    swaggerUi.setup(swaggerJson,{ explorer: true })
);
app.use(cors())

for(let c of Object.values(controller) )new c().rest(app)
const port=process.env.port||3000


app.listen(port,()=>console.log(`http://localhost:${port}`))






// connect.then(async (client)=>{

//     //tester
//     // await Resource.save(client.currentDb,{resourceName:"piece",})
//     // Activity.save(client.currentDb,{activityName:"achat",resourceId:ObjectId.createFromHexString("le ao amin base")})



//     //jereo ito fonction ito fa ao le manao relation...mapiasa $lookup et pipeline
//     await new Resource().getAll(client.currentDb,[{    
//         $addFields:{
//             //mamadika tableau ho lasa le element ao anatiny
//             // activity:{
//             //     $arrayElemAt:["$activity",0]
//             // }
//         }
//     }]).forEach(e=>{
//         console.log(assign(Resource,e))

//     })

 
     



//     await client.close()
// }).catch(console.log)


