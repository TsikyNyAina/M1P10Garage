
import mongoose from "mongoose";
import connect from "./datasource";
import { Action, Client, Resource , Responsable} from "./model";
import * as cast from "./strict/cast"


for(let v of Object.values(cast))v()


connect().then(async ()=>{

    const client = new Responsable();
    client.name="Client";
    client.email="client@gmail.com";
    client.type="atelier";
    client.mdp="mdp";
    //console.log(await client.create());

    console.log((await Responsable.findOne({email: client.email, mdp : client.mdp})));
    

    //console.log((await Resource.find())[0].action[0]);
    


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
