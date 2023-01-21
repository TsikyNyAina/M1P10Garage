
import mongoose from "mongoose";
import connect from "./datasource";
import { Action, Resource } from "./model";
import * as cast from "./strict/cast"


for(let v of Object.values(cast))v()


connect().then(async ()=>{

    console.log((await Resource.find({action:{cout:1000}})));
    


    // const resource=new Resource();
    // // resource.id=new mongoose.Types.ObjectId("63cbbdb475f762d6a75acdf8");
    // resource.name="piece"
    // resource.action=[]
    // // console.log(await resource.create());
    // await resource.create()


    // const action =new Action(); 
    // action.name="prix";
    // action.cout=10000;
    
    // console.log(await resource.addAction(action));
    

    // console.log(await Action.find());
    


    



}).catch(console.log)
