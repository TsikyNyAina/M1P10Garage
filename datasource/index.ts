import * as mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()
mongoose.set("strictQuery",false)


const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;
const host=process.env.DB_HOST;
const port=process.env.DB_PORT;
const database=process.env.DB_NAME;

let uri=`mongodb+srv://${username}:${password}@${host}/?retryWrites=true&w=majority`
// uri='mongodb+srv://vaika:vaika@vaika.pzzbpw6.mongodb.net/?retryWrites=true&w=majority';
// console.log(uri);
uri='mongodb://127.0.0.1:27017/vaika';


export const connect=async ()=>await mongoose.connect(uri);
export default connect