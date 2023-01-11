import { Get, RestController } from "../decorator";

@RestController("/resource")
export default class ResourceController{
    @Get("/:option")
    public async getController(){
        
    }


}