 
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
import path from "path";

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



app.use(express.static(__dirname + '/public'))

app.get("",(req,res)=>res.sendFile(path.join(__dirname, './public', 'index.html')))

app.listen(port,()=>console.log(`http://localhost:${port}`))

 


connect().then(async (client)=>{
    const collection=client.currentDb.collection("payement");
    const rep=await collection.aggregate([
        {
            $addFields:{
                datePayement:{
                    $toDate:"$datePayement"
                }
            }
        },
        {
            $addFields:{
                jour:{
                    $dateDiff:{
                        startDate: "$datePayement",
                        endDate: "$$NOW",
                        unit: "day"
                    }
                }
            }
        },
        {
            $addFields:{
                jour:{
                    $divide:["$jour",3]
                },
            }
        },
        {
            $addFields:{
                jour:{
                    $toInt:"$jour"
                },
            }
        },
        {
            $addFields:{
                jour:{
                    $multiply:["$jour",3]
                },
            }
        }
        
    ]).toArray()
    // console.log(rep);
    client.close()

    


}).catch(console.log)


