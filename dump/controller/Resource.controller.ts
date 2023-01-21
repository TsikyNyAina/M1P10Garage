import { Get, RequestParam, RestController } from "../decorator";
const Resource = require('../model/resource');
import { Request, Response } from "express";
@RestController("/resource")
export  class ResourceController{
    rest:Function
    @Get("/")
    public async getController(res:Response){
        res.send("hahahaha");        
    }
    @Get("/:option")
    public async getControllerWithParam(res:Response,@RequestParam("option") option:string){
        res.send("hahahaha"+option);        
    }


}
export default ResourceController

