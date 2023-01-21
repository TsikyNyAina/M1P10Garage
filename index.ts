
import connect from "./datasource";
import { Action, Resource } from "./model";

connect().then(async ()=>{

    const resource=new Resource();
    // resource.id=1;
    resource.name="piece"
    console.log(await resource.create());
    

    // await resource.create()

    // const action =new Action(); 
    // action.name="prix";
    // action.cout=10000;
    // aresourceId=1




    // await action.create()
    // console.log(
    //     await resource.addAction(action)
    // );
    



}).catch(console.log)