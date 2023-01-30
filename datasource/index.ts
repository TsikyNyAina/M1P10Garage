import dotenv from "dotenv"

import {MongoClient,Db} from "mongodb"

dotenv.config()

 
const uri=process.env.DB_URI;

export class MongoClientWithDatabase extends MongoClient{
    currentDb:Db
}

export const connect:()=>Promise<MongoClientWithDatabase>=()=>new MongoClient(uri as string,{
    

}).connect().then((client)=>{
    (client as any).currentDb= client.db("vaika");
    return client as any
}) 

 

export default connect