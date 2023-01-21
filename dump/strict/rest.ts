import { Router,Express,Response, Request } from "express";
import {ResourceController} from "../controller/Resource.controller";

export function init0(): void {
    Object.defineProperty(ResourceController.prototype,"rest",{
        value:function(app:Express){
            const router=Router();
            router.get("/",async (req:Request,res:Response)=>{
                const arg=new Array<any>();
                arg.push(res);
                try{
                    await (this.getController as any)(...arg);
                }
                catch(error:any){
                    res.status(500).send(error?.message||error)
                }
            });

            router.get("/:option",async (req:Request,res:Response)=>{
                const arg=new Array<any>();
                arg.push(res);
                arg.push(req.params.option);
                try{
                    await (this.getControllerWithParam as any)(...arg);
                }
                catch(error:any){
                    res.status(500).send(error?.message||error)
                }
            });
            app.use("/resource",router);
        },
        configurable:true
    });
}
