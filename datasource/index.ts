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


// <<<<<<< HEAD

// =======
// let uri=`mongodb+srv://${username}:${password}@${host}/?retryWrites=true&w=majority`
// // uri='mongodb+srv://vaika:vaika@vaika.pzzbpw6.mongodb.net/?retryWrites=true&w=majority';
// // console.log(uri);
// uri='mongodb://127.0.0.1:27017/vaika';
// >>>>>>> 6f2c72d322b35a6a8d7b7f98fb0bf376e8acd12e


export default connect