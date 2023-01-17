import { Router,Express,Response, Request } from "express";
import {ResourceController} from "../controller/Resource.controller";

export function init0(): void {
    Object.defineProperty(ResourceController.prototype,"rest",{
        value:function(app:Express){
            const router=Router();
            router.get("/:option",async (req:Request,res:Response)=>{
                const arg=new Array<any>();
                try{
                    await (this.getController as any)(...arg);
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
