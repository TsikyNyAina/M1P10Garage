import { Router,Express,Response, Request } from "express";
import {ClientController} from "../controller/Client.controller";
import {MarquePieceController} from "../controller/MarquePiece.controller";
import {MarquePieceModelVoitureController} from "../controller/MarquePieceModelVoiture.controller";
import {MarqueVoitureController} from "../controller/MarqueVoiture.controller";
import {ModelVoitureController} from "../controller/ModelVoiture.controller";
import {ResponsableController} from "../controller/Responsable.controller";
import {VoitureController} from "../controller/Voiture.controller";

export function init0(): void {
    Object.defineProperty(ClientController.prototype,"rest",{
        value:function(app:Express){
            const router=Router();
            router.get("/:option",async (req:Request,res:Response)=>{
                const arg=new Array<any>();
                arg.push(res);
                arg.push(req.params.option);
                try{
                    await (this.getAll as any)(...arg);
                }
                catch(error:any){
                    res.status(500).send(error?.message||error)
                }
            });

            router.get("/:id",async (req:Request,res:Response)=>{
                const arg=new Array<any>();
                arg.push(res);
                arg.push(req.params.id);
                try{
                    await (this.getById as any)(...arg);
                }
                catch(error:any){
                    res.status(500).send(error?.message||error)
                }
            });

            router.post("",async (req:Request,res:Response)=>{
                const arg=new Array<any>();
                arg.push(res);
                arg.push(req.body);
                try{
                    await (this.save as any)(...arg);
                }
                catch(error:any){
                    res.status(500).send(error?.message||error)
                }
            });

            router.put("",async (req:Request,res:Response)=>{
                const arg=new Array<any>();
                arg.push(res);
                arg.push(req.body);
                try{
                    await (this.update as any)(...arg);
                }
                catch(error:any){
                    res.status(500).send(error?.message||error)
                }
            });

            router.delete("/:id",async (req:Request,res:Response)=>{
                const arg=new Array<any>();
                arg.push(res);
                arg.push(req.params.id);
                try{
                    await (this.delete as any)(...arg);
                }
                catch(error:any){
                    res.status(500).send(error?.message||error)
                }
            });
            app.use("/clientController",router);
        },
        configurable:true
    });
}

export function init1(): void {
    Object.defineProperty(MarquePieceController.prototype,"rest",{
        value:function(app:Express){
            const router=Router();
            router.get("/:option",async (req:Request,res:Response)=>{
                const arg=new Array<any>();
                arg.push(res);
                arg.push(req.params.option);
                try{
                    await (this.getAll as any)(...arg);
                }
                catch(error:any){
                    res.status(500).send(error?.message||error)
                }
            });

            router.get("/:id",async (req:Request,res:Response)=>{
                const arg=new Array<any>();
                arg.push(res);
                arg.push(req.params.id);
                try{
                    await (this.getById as any)(...arg);
                }
                catch(error:any){
                    res.status(500).send(error?.message||error)
                }
            });

            router.post("",async (req:Request,res:Response)=>{
                const arg=new Array<any>();
                arg.push(res);
                arg.push(req.body);
                try{
                    await (this.save as any)(...arg);
                }
                catch(error:any){
                    res.status(500).send(error?.message||error)
                }
            });

            router.put("",async (req:Request,res:Response)=>{
                const arg=new Array<any>();
                arg.push(res);
                arg.push(req.body);
                try{
                    await (this.update as any)(...arg);
                }
                catch(error:any){
                    res.status(500).send(error?.message||error)
                }
            });

            router.delete("/:id",async (req:Request,res:Response)=>{
                const arg=new Array<any>();
                arg.push(res);
                arg.push(req.params.id);
                try{
                    await (this.delete as any)(...arg);
                }
                catch(error:any){
                    res.status(500).send(error?.message||error)
                }
            });
            app.use("/marquePiece",router);
        },
        configurable:true
    });
}

export function init2(): void {
    Object.defineProperty(MarquePieceModelVoitureController.prototype,"rest",{
        value:function(app:Express){
            const router=Router();
            router.get("/:option",async (req:Request,res:Response)=>{
                const arg=new Array<any>();
                arg.push(res);
                arg.push(req.params.option);
                try{
                    await (this.getAll as any)(...arg);
                }
                catch(error:any){
                    res.status(500).send(error?.message||error)
                }
            });

            router.get("/:id",async (req:Request,res:Response)=>{
                const arg=new Array<any>();
                arg.push(res);
                arg.push(req.params.id);
                try{
                    await (this.getById as any)(...arg);
                }
                catch(error:any){
                    res.status(500).send(error?.message||error)
                }
            });

            router.post("",async (req:Request,res:Response)=>{
                const arg=new Array<any>();
                arg.push(res);
                arg.push(req.body);
                try{
                    await (this.save as any)(...arg);
                }
                catch(error:any){
                    res.status(500).send(error?.message||error)
                }
            });

            router.put("",async (req:Request,res:Response)=>{
                const arg=new Array<any>();
                arg.push(res);
                arg.push(req.body);
                try{
                    await (this.update as any)(...arg);
                }
                catch(error:any){
                    res.status(500).send(error?.message||error)
                }
            });

            router.delete("/:id",async (req:Request,res:Response)=>{
                const arg=new Array<any>();
                arg.push(res);
                arg.push(req.params.id);
                try{
                    await (this.delete as any)(...arg);
                }
                catch(error:any){
                    res.status(500).send(error?.message||error)
                }
            });
            app.use("/marquePieceModelVoiture",router);
        },
        configurable:true
    });
}

export function init3(): void {
    Object.defineProperty(MarqueVoitureController.prototype,"rest",{
        value:function(app:Express){
            const router=Router();
            router.get("/:option",async (req:Request,res:Response)=>{
                const arg=new Array<any>();
                arg.push(res);
                arg.push(req.params.option);
                try{
                    await (this.getAll as any)(...arg);
                }
                catch(error:any){
                    res.status(500).send(error?.message||error)
                }
            });

            router.get("/:option",async (req:Request,res:Response)=>{
                const arg=new Array<any>();
                arg.push(res);
                arg.push(req.params.id);
                try{
                    await (this.getById as any)(...arg);
                }
                catch(error:any){
                    res.status(500).send(error?.message||error)
                }
            });

            router.post("",async (req:Request,res:Response)=>{
                const arg=new Array<any>();
                arg.push(res);
                arg.push(req.body);
                try{
                    await (this.save as any)(...arg);
                }
                catch(error:any){
                    res.status(500).send(error?.message||error)
                }
            });

            router.put("",async (req:Request,res:Response)=>{
                const arg=new Array<any>();
                arg.push(res);
                arg.push(req.body);
                try{
                    await (this.update as any)(...arg);
                }
                catch(error:any){
                    res.status(500).send(error?.message||error)
                }
            });

            router.delete("/:id",async (req:Request,res:Response)=>{
                const arg=new Array<any>();
                arg.push(res);
                arg.push(req.params.id);
                try{
                    await (this.delete as any)(...arg);
                }
                catch(error:any){
                    res.status(500).send(error?.message||error)
                }
            });
            app.use("/marqueVoiture",router);
        },
        configurable:true
    });
}

export function init4(): void {
    Object.defineProperty(ModelVoitureController.prototype,"rest",{
        value:function(app:Express){
            const router=Router();
            router.get("/:option",async (req:Request,res:Response)=>{
                const arg=new Array<any>();
                arg.push(res);
                arg.push(req.params.option);
                try{
                    await (this.getAll as any)(...arg);
                }
                catch(error:any){
                    res.status(500).send(error?.message||error)
                }
            });

            router.get("/:id",async (req:Request,res:Response)=>{
                const arg=new Array<any>();
                arg.push(res);
                arg.push(req.params.id);
                try{
                    await (this.getById as any)(...arg);
                }
                catch(error:any){
                    res.status(500).send(error?.message||error)
                }
            });

            router.post("",async (req:Request,res:Response)=>{
                const arg=new Array<any>();
                arg.push(res);
                arg.push(req.body);
                try{
                    await (this.save as any)(...arg);
                }
                catch(error:any){
                    res.status(500).send(error?.message||error)
                }
            });

            router.put("",async (req:Request,res:Response)=>{
                const arg=new Array<any>();
                arg.push(res);
                arg.push(req.body);
                try{
                    await (this.update as any)(...arg);
                }
                catch(error:any){
                    res.status(500).send(error?.message||error)
                }
            });

            router.delete("/:id",async (req:Request,res:Response)=>{
                const arg=new Array<any>();
                arg.push(res);
                arg.push(req.params.id);
                try{
                    await (this.delete as any)(...arg);
                }
                catch(error:any){
                    res.status(500).send(error?.message||error)
                }
            });
            app.use("/modelVoiture",router);
        },
        configurable:true
    });
}

export function init5(): void {
    Object.defineProperty(ResponsableController.prototype,"rest",{
        value:function(app:Express){
            const router=Router();
            router.get("/:option",async (req:Request,res:Response)=>{
                const arg=new Array<any>();
                arg.push(res);
                arg.push(req.params.option);
                try{
                    await (this.getAll as any)(...arg);
                }
                catch(error:any){
                    res.status(500).send(error?.message||error)
                }
            });

            router.get("/:id",async (req:Request,res:Response)=>{
                const arg=new Array<any>();
                arg.push(res);
                arg.push(req.params.id);
                try{
                    await (this.getOne as any)(...arg);
                }
                catch(error:any){
                    res.status(500).send(error?.message||error)
                }
            });

            router.post("",async (req:Request,res:Response)=>{
                const arg=new Array<any>();
                arg.push(res);
                arg.push(req.body);
                try{
                    await (this.save as any)(...arg);
                }
                catch(error:any){
                    res.status(500).send(error?.message||error)
                }
            });

            router.put("",async (req:Request,res:Response)=>{
                const arg=new Array<any>();
                arg.push(res);
                arg.push(req.body);
                try{
                    await (this.update as any)(...arg);
                }
                catch(error:any){
                    res.status(500).send(error?.message||error)
                }
            });

            router.delete("/:id",async (req:Request,res:Response)=>{
                const arg=new Array<any>();
                arg.push(res);
                arg.push(req.params.id);
                try{
                    await (this.delete as any)(...arg);
                }
                catch(error:any){
                    res.status(500).send(error?.message||error)
                }
            });
            app.use("/responsableController",router);
        },
        configurable:true
    });
}

export function init6(): void {
    Object.defineProperty(VoitureController.prototype,"rest",{
        value:function(app:Express){
            const router=Router();
            router.get("/:option",async (req:Request,res:Response)=>{
                const arg=new Array<any>();
                arg.push(res);
                arg.push(req.params.option);
                try{
                    await (this.getAll as any)(...arg);
                }
                catch(error:any){
                    res.status(500).send(error?.message||error)
                }
            });

            router.post("",async (req:Request,res:Response)=>{
                const arg=new Array<any>();
                arg.push(res);
                arg.push(req.body);
                try{
                    await (this.save as any)(...arg);
                }
                catch(error:any){
                    res.status(500).send(error?.message||error)
                }
            });

            router.put("",async (req:Request,res:Response)=>{
                const arg=new Array<any>();
                arg.push(res);
                arg.push(req.body);
                try{
                    await (this.update as any)(...arg);
                }
                catch(error:any){
                    res.status(500).send(error?.message||error)
                }
            });

            router.delete("/:id",async (req:Request,res:Response)=>{
                const arg=new Array<any>();
                arg.push(res);
                arg.push(req.params.id);
                try{
                    await (this.delete as any)(...arg);
                }
                catch(error:any){
                    res.status(500).send(error?.message||error)
                }
            });
            app.use("/voiture",router);
        },
        configurable:true
    });
}
