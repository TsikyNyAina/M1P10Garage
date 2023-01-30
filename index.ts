 
import * as controller from "./controller";
import * as cast from "./strict/cast";
import * as rest from "./strict/rest";
import cors from "cors"

import dotenv from "dotenv";
import express from "express";  
import swaggerJson from "./strict/swagger.json"
import swaggerUi from "swagger-ui-express";  
import connect from "./datasource";
import { Payement } from "./model";

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






connect().then(async (client)=>{
//     const collection=client.currentDb.collection("reparation");
//     const rep=await collection.aggregate([
//         {
//             $addFields:{
                
//             }
//         }
//     ]).toArray()
//     console.log(rep);
//     client.close()

    


}).catch(console.log)


