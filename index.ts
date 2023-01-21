
import connect from "./datasource";
import { Action, Resource } from "./model";

connect().then(async ()=>{

    const resource=new Resource();
    resource.id=1;
    resource.name="piece"
    resource.action=[];
    // await resource.create()

    const action =new Action();
    action.id=1;
    action.name="prix";
    action.cout=10000

    console.log(
        await resource.addAction(action)
    );
    



}).catch(console.log)