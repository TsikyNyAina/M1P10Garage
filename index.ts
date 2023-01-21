
import mongoose from "mongoose";
import connect from "./datasource";
import { Action, Resource } from "./model";

connect().then(async ()=>{

    // const resource=new Resource();
    // resource.id=new mongoose.Types.ObjectId("63cbaf3a90b9104a384dd02c");
    // resource.name="piece"
    // console.log(await resource.create());
    // await resource.create()


    // const action =new Action(); 
    // action.name="prix";
    // action.cout=10000;
    
    // console.log(await resource.addAction(action));
    

    console.log(await Action.find());
    
    



}).catch(console.log)
