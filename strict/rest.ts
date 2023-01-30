import { Router,Express,Response, Request } from "express";
import {AchatPieceController} from "../controller/AchatPiece.controller";
import {ClientController} from "../controller/Client.controller";
import {LoyerController} from "../controller/Loyer.controller";
import {MarquePieceController} from "../controller/MarquePiece.controller";
import {MarquePieceModelVoitureController} from "../controller/MarquePieceModelVoiture.controller";
import {MarqueVoitureController} from "../controller/MarqueVoiture.controller";
import {ModelVoitureController} from "../controller/ModelVoiture.controller";
import {PayementController} from "../controller/Payement.controller";
import {ReparationController} from "../controller/Reparation.controller";
import {ReparationDetailController} from "../controller/ReparationDetail.controller";
import {ResponsableController} from "../controller/Responsable.controller";
import {SalaireController} from "../controller/Salaire.controller";
import {VoitureController} from "../controller/Voiture.controller";

export function init0(): void {
    Object.defineProperty(AchatPieceController.prototype,"rest",{
        value:function(app:Express){
            const router=Router();
            router.get("/option/:option",async (req:Request,res:Response)=>{
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

            router.get("/depense",async (req:Request,res:Response)=>{
                const arg=new Array<any>();
                arg.push(res);
                try{
                    await (this.getDepense as any)(...arg);
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
            app.use("/api/achatPiece",router);
        },
        configurable:true
    });
}

export function init1(): void {
    Object.defineProperty(ClientController.prototype,"rest",{
        value:function(app:Express){
            const router=Router();
            router.get("/option/:option",async (req:Request,res:Response)=>{
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

            router.post("/:email",async (req:Request,res:Response)=>{
                const arg=new Array<any>();
                arg.push(res);
                arg.push(req.params.email);
                try{
                    await (this.sendmail as any)(...arg);
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
            app.use("/api/client",router);
        },
        configurable:true
    });
}

export function init2(): void {
    Object.defineProperty(LoyerController.prototype,"rest",{
        value:function(app:Express){
            const router=Router();
            router.get("/option/:option",async (req:Request,res:Response)=>{
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

            router.get("/depense",async (req:Request,res:Response)=>{
                const arg=new Array<any>();
                arg.push(res);
                try{
                    await (this.getDepense as any)(...arg);
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
            app.use("/api/loyer",router);
        },
        configurable:true
    });
}

export function init3(): void {
    Object.defineProperty(MarquePieceController.prototype,"rest",{
        value:function(app:Express){
            const router=Router();
            router.get("/option/:option",async (req:Request,res:Response)=>{
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
            app.use("/api/marquePiece",router);
        },
        configurable:true
    });
}

export function init4(): void {
    Object.defineProperty(MarquePieceModelVoitureController.prototype,"rest",{
        value:function(app:Express){
            const router=Router();
            router.get("/option/:option",async (req:Request,res:Response)=>{
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
            app.use("/api/marquePieceModelVoiture",router);
        },
        configurable:true
    });
}

export function init5(): void {
    Object.defineProperty(MarqueVoitureController.prototype,"rest",{
        value:function(app:Express){
            const router=Router();
            router.get("/option/:option",async (req:Request,res:Response)=>{
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
            app.use("/api/marqueVoiture",router);
        },
        configurable:true
    });
}

export function init6(): void {
    Object.defineProperty(ModelVoitureController.prototype,"rest",{
        value:function(app:Express){
            const router=Router();
            router.get("/option/:option",async (req:Request,res:Response)=>{
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
            app.use("/api/modelVoiture",router);
        },
        configurable:true
    });
}

export function init7(): void {
    Object.defineProperty(PayementController.prototype,"rest",{
        value:function(app:Express){
            const router=Router();
            router.get("/option/:option",async (req:Request,res:Response)=>{
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

            router.get("/entree",async (req:Request,res:Response)=>{
                const arg=new Array<any>();
                arg.push(res);
                try{
                    await (this.getEntree as any)(...arg);
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
            app.use("/api/payement",router);
        },
        configurable:true
    });
}

export function init8(): void {
    Object.defineProperty(ReparationController.prototype,"rest",{
        value:function(app:Express){
            const router=Router();
            router.get("/option/:option",async (req:Request,res:Response)=>{
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
            app.use("/api/reparation",router);
        },
        configurable:true
    });
}

export function init9(): void {
    Object.defineProperty(ReparationDetailController.prototype,"rest",{
        value:function(app:Express){
            const router=Router();
            router.get("/option/:option",async (req:Request,res:Response)=>{
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
            app.use("/api/reparationDetail",router);
        },
        configurable:true
    });
}

export function init10(): void {
    Object.defineProperty(ResponsableController.prototype,"rest",{
        value:function(app:Express){
            const router=Router();
            router.get("/option/:option",async (req:Request,res:Response)=>{
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
            app.use("/api/responsable",router);
        },
        configurable:true
    });
}

export function init11(): void {
    Object.defineProperty(SalaireController.prototype,"rest",{
        value:function(app:Express){
            const router=Router();
            router.get("/option/:option",async (req:Request,res:Response)=>{
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

            router.get("/depense",async (req:Request,res:Response)=>{
                const arg=new Array<any>();
                arg.push(res);
                try{
                    await (this.getDepense as any)(...arg);
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
            app.use("/api/salaire",router);
        },
        configurable:true
    });
}

export function init12(): void {
    Object.defineProperty(VoitureController.prototype,"rest",{
        value:function(app:Express){
            const router=Router();
            router.get("/option/:option",async (req:Request,res:Response)=>{
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
            app.use("/api/voiture",router);
        },
        configurable:true
    });
}
