import ActionSchema from "./collection/action";
import connect from "./datasource";

connect().then(async ()=>{
    let action=await ActionSchema.create({
        name:"prix",
        cout:100000
        
    })
    console.log(action);
    





}).catch(console.log)