import dotenv from "dotenv"

import {MongoClient,Db} from "mongodb"

dotenv.config()

 
const uri=process.env.DB_URI;

class MongoClientWithDatabase extends MongoClient{
    currentDb:Db
}

export const connect=new Promise<MongoClientWithDatabase>(async (resolve,reject)=>{
    try{
        const client:any =await MongoClient.connect(uri as string)
        client.currentDb=await client.db("vaika");
        resolve(client)
    }
    catch(error){
        reject(error)
    }
});





export default connect