import { Get, RestController } from "../decorator";
const Resource = require('../model/resource');

@RestController("/resource")
export  class ResourceController{
    rest:Function
    @Get("/:option")
    public async getController(){
        console.log("hahahaha");
        
    }


}
export default ResourceController

