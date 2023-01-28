import {ClientController} from "../controller/Client.controller";
import {Client} from "../model/Client";
import {MarquePieceController} from "../controller/MarquePiece.controller";
import {MarquePiece} from "../model/MarquePiece";
import {MarquePieceModelVoitureController} from "../controller/MarquePieceModelVoiture.controller";
import {MarquePieceModelVoiture} from "../model/MarquePieceModelVoiture";
import {MarqueVoitureController} from "../controller/MarqueVoiture.controller";
import {MarqueVoiture} from "../model/MarqueVoiture";
import {ModelVoitureController} from "../controller/ModelVoiture.controller";
import {ModelVoiture} from "../model/ModelVoiture";
import {ResponsableController} from "../controller/Responsable.controller";
import {Responsable} from "../model/Responsable";
import {VoitureController} from "../controller/Voiture.controller";
import {Voiture} from "../model/Voiture";
import {Reparation} from "../model/Reparation";
import {ReparationDetail} from "../model/ReparationDetail";
import {Resource} from "../model/Resource";
import {Activity} from "../model/Resource";

export function init0(): void {
    let old0:any=ClientController.prototype.save
    Object.defineProperty(ClientController.prototype,"save",{
        value:function(...arg:any[]){
            if(arg[1] instanceof Client || !arg[1]){}
            else if (typeof arg[1]!= 'object' )
                throw new Error(JSON.stringify(arg[1]) +"cannot be casted to Client client  at ClientController.save");
            else arg[1]=Object.assign(new Client(),arg[1]);

            return old0.bind(this)(...arg);
        }
    })
}

export function init1(): void {
    let old1:any=ClientController.prototype.update
    Object.defineProperty(ClientController.prototype,"update",{
        value:function(...arg:any[]){
            if(arg[1] instanceof Client || !arg[1]){}
            else if (typeof arg[1]!= 'object' )
                throw new Error(JSON.stringify(arg[1]) +"cannot be casted to Client client  at ClientController.update");
            else arg[1]=Object.assign(new Client(),arg[1]);

            return old1.bind(this)(...arg);
        }
    })
}

export function init2(): void {
    let old2:any=MarquePieceController.prototype.save
    Object.defineProperty(MarquePieceController.prototype,"save",{
        value:function(...arg:any[]){
            if(arg[1] instanceof MarquePiece || !arg[1]){}
            else if (typeof arg[1]!= 'object' )
                throw new Error(JSON.stringify(arg[1]) +"cannot be casted to MarquePiece marquePiece  at MarquePieceController.save");
            else arg[1]=Object.assign(new MarquePiece(),arg[1]);

            return old2.bind(this)(...arg);
        }
    })
}

export function init3(): void {
    let old3:any=MarquePieceController.prototype.update
    Object.defineProperty(MarquePieceController.prototype,"update",{
        value:function(...arg:any[]){
            if(arg[1] instanceof MarquePiece || !arg[1]){}
            else if (typeof arg[1]!= 'object' )
                throw new Error(JSON.stringify(arg[1]) +"cannot be casted to MarquePiece marquePiece  at MarquePieceController.update");
            else arg[1]=Object.assign(new MarquePiece(),arg[1]);

            return old3.bind(this)(...arg);
        }
    })
}

export function init4(): void {
    let old4:any=MarquePieceModelVoitureController.prototype.save
    Object.defineProperty(MarquePieceModelVoitureController.prototype,"save",{
        value:function(...arg:any[]){
            if(arg[1] instanceof MarquePieceModelVoiture || !arg[1]){}
            else if (typeof arg[1]!= 'object' )
                throw new Error(JSON.stringify(arg[1]) +"cannot be casted to MarquePieceModelVoiture marquePieceModelVoiture  at MarquePieceModelVoitureController.save");
            else arg[1]=Object.assign(new MarquePieceModelVoiture(),arg[1]);

            return old4.bind(this)(...arg);
        }
    })
}

export function init5(): void {
    let old5:any=MarquePieceModelVoitureController.prototype.update
    Object.defineProperty(MarquePieceModelVoitureController.prototype,"update",{
        value:function(...arg:any[]){
            if(arg[1] instanceof MarquePieceModelVoiture || !arg[1]){}
            else if (typeof arg[1]!= 'object' )
                throw new Error(JSON.stringify(arg[1]) +"cannot be casted to MarquePieceModelVoiture marquePieceModelVoiture  at MarquePieceModelVoitureController.update");
            else arg[1]=Object.assign(new MarquePieceModelVoiture(),arg[1]);

            return old5.bind(this)(...arg);
        }
    })
}

export function init6(): void {
    let old6:any=MarqueVoitureController.prototype.save
    Object.defineProperty(MarqueVoitureController.prototype,"save",{
        value:function(...arg:any[]){
            if(arg[1] instanceof MarqueVoiture || !arg[1]){}
            else if (typeof arg[1]!= 'object' )
                throw new Error(JSON.stringify(arg[1]) +"cannot be casted to MarqueVoiture marqueVoiture  at MarqueVoitureController.save");
            else arg[1]=Object.assign(new MarqueVoiture(),arg[1]);

            return old6.bind(this)(...arg);
        }
    })
}

export function init7(): void {
    let old7:any=MarqueVoitureController.prototype.update
    Object.defineProperty(MarqueVoitureController.prototype,"update",{
        value:function(...arg:any[]){
            if(arg[1] instanceof MarqueVoiture || !arg[1]){}
            else if (typeof arg[1]!= 'object' )
                throw new Error(JSON.stringify(arg[1]) +"cannot be casted to MarqueVoiture marqueVoiture  at MarqueVoitureController.update");
            else arg[1]=Object.assign(new MarqueVoiture(),arg[1]);

            return old7.bind(this)(...arg);
        }
    })
}

export function init8(): void {
    let old8:any=ModelVoitureController.prototype.save
    Object.defineProperty(ModelVoitureController.prototype,"save",{
        value:function(...arg:any[]){
            if(arg[1] instanceof ModelVoiture || !arg[1]){}
            else if (typeof arg[1]!= 'object' )
                throw new Error(JSON.stringify(arg[1]) +"cannot be casted to ModelVoiture modelVoiture  at ModelVoitureController.save");
            else arg[1]=Object.assign(new ModelVoiture(),arg[1]);

            return old8.bind(this)(...arg);
        }
    })
}

export function init9(): void {
    let old9:any=ModelVoitureController.prototype.update
    Object.defineProperty(ModelVoitureController.prototype,"update",{
        value:function(...arg:any[]){
            if(arg[1] instanceof ModelVoiture || !arg[1]){}
            else if (typeof arg[1]!= 'object' )
                throw new Error(JSON.stringify(arg[1]) +"cannot be casted to ModelVoiture modelVoiture  at ModelVoitureController.update");
            else arg[1]=Object.assign(new ModelVoiture(),arg[1]);

            return old9.bind(this)(...arg);
        }
    })
}

export function init10(): void {
    let old10:any=ResponsableController.prototype.save
    Object.defineProperty(ResponsableController.prototype,"save",{
        value:function(...arg:any[]){
            if(arg[1] instanceof Responsable || !arg[1]){}
            else if (typeof arg[1]!= 'object' )
                throw new Error(JSON.stringify(arg[1]) +"cannot be casted to Responsable client  at ResponsableController.save");
            else arg[1]=Object.assign(new Responsable(),arg[1]);

            return old10.bind(this)(...arg);
        }
    })
}

export function init11(): void {
    let old11:any=ResponsableController.prototype.update
    Object.defineProperty(ResponsableController.prototype,"update",{
        value:function(...arg:any[]){
            if(arg[1] instanceof Responsable || !arg[1]){}
            else if (typeof arg[1]!= 'object' )
                throw new Error(JSON.stringify(arg[1]) +"cannot be casted to Responsable client  at ResponsableController.update");
            else arg[1]=Object.assign(new Responsable(),arg[1]);

            return old11.bind(this)(...arg);
        }
    })
}

export function init12(): void {
    let old12:any=VoitureController.prototype.save
    Object.defineProperty(VoitureController.prototype,"save",{
        value:function(...arg:any[]){
            if(arg[1] instanceof Voiture || !arg[1]){}
            else if (typeof arg[1]!= 'object' )
                throw new Error(JSON.stringify(arg[1]) +"cannot be casted to Voiture voiture  at VoitureController.save");
            else arg[1]=Object.assign(new Voiture(),arg[1]);

            return old12.bind(this)(...arg);
        }
    })
}

export function init13(): void {
    let old13:any=VoitureController.prototype.update
    Object.defineProperty(VoitureController.prototype,"update",{
        value:function(...arg:any[]){
            if(arg[1] instanceof Voiture || !arg[1]){}
            else if (typeof arg[1]!= 'object' )
                throw new Error(JSON.stringify(arg[1]) +"cannot be casted to Voiture voiture  at VoitureController.update");
            else arg[1]=Object.assign(new Voiture(),arg[1]);

            return old13.bind(this)(...arg);
        }
    })
}

export function init14(): void {
    Object.defineProperty(Client.prototype,"voiture",{
        set:function(value:any){
            if (value && !(value instanceof Array))
                throw new Error(JSON.stringify(value) +"cannot be casted to voiture:Voiture[]");
            for (let i =0;i<(value||[]).length;i++){
                if(value[i] instanceof Voiture || !value[i]){}
                else if (typeof value[i]!= 'object' )
                    throw new Error(JSON.stringify(value[i]) +" cannot be casted to Voiture");
                else value[i]=Object.assign(new Voiture(),value[i]);
            }
            Object.defineProperty(this,"voiture",{
                value:value,
                enumerable:true,
                writable:true,
            })
        }
    })
}

export function init15(): void {
    Object.defineProperty(MarquePiece.prototype,"modelVoiture",{
        set:function(value:any){
            if (value && !(value instanceof Array))
                throw new Error(JSON.stringify(value) +"cannot be casted to modelVoiture:ModelVoiture[]");
            for (let i =0;i<(value||[]).length;i++){
                if(value[i] instanceof ModelVoiture || !value[i]){}
                else if (typeof value[i]!= 'object' )
                    throw new Error(JSON.stringify(value[i]) +" cannot be casted to ModelVoiture");
                else value[i]=Object.assign(new ModelVoiture(),value[i]);
            }
            Object.defineProperty(this,"modelVoiture",{
                value:value,
                enumerable:true,
                writable:true,
            })
        }
    })
}

export function init16(): void {
    Object.defineProperty(ModelVoiture.prototype,"marqueVoiture",{
        set:function(value:any){
            if(value instanceof MarqueVoiture || !value){}
            else if (typeof value!= 'object' )
                throw new Error(JSON.stringify(value) +"cannot be casted to marqueVoiture:MarqueVoiture");
            else value=Object.assign(new MarqueVoiture(),value);
            Object.defineProperty(this,"marqueVoiture",{
                value:value,
                enumerable:true,
                writable:true,
            })
        }
    })
}

export function init17(): void {
    Object.defineProperty(Reparation.prototype,"reparationDetail",{
        set:function(value:any){
            if (value && !(value instanceof Array))
                throw new Error(JSON.stringify(value) +"cannot be casted to reparationDetail:ReparationDetail[]");
            for (let i =0;i<(value||[]).length;i++){
                if(value[i] instanceof ReparationDetail || !value[i]){}
                else if (typeof value[i]!= 'object' )
                    throw new Error(JSON.stringify(value[i]) +" cannot be casted to ReparationDetail");
                else value[i]=Object.assign(new ReparationDetail(),value[i]);
            }
            Object.defineProperty(this,"reparationDetail",{
                value:value,
                enumerable:true,
                writable:true,
            })
        }
    })
}

export function init18(): void {
    Object.defineProperty(Reparation.prototype,"voiture",{
        set:function(value:any){
            if(value instanceof Voiture || !value){}
            else if (typeof value!= 'object' )
                throw new Error(JSON.stringify(value) +"cannot be casted to voiture:Voiture");
            else value=Object.assign(new Voiture(),value);
            Object.defineProperty(this,"voiture",{
                value:value,
                enumerable:true,
                writable:true,
            })
        }
    })
}

export function init19(): void {
    Object.defineProperty(Resource.prototype,"activity",{
        set:function(value:any){
            if (value && !(value instanceof Array))
                throw new Error(JSON.stringify(value) +"cannot be casted to activity:Activity[]");
            for (let i =0;i<(value||[]).length;i++){
                if(value[i] instanceof Activity || !value[i]){}
                else if (typeof value[i]!= 'object' )
                    throw new Error(JSON.stringify(value[i]) +" cannot be casted to Activity");
                else value[i]=Object.assign(new Activity(),value[i]);
            }
            Object.defineProperty(this,"activity",{
                value:value,
                enumerable:true,
                writable:true,
            })
        }
    })
}

export function init20(): void {
    Object.defineProperty(Voiture.prototype,"modelVoiture",{
        set:function(value:any){
            if(value instanceof ModelVoiture || !value){}
            else if (typeof value!= 'object' )
                throw new Error(JSON.stringify(value) +"cannot be casted to modelVoiture:ModelVoiture");
            else value=Object.assign(new ModelVoiture(),value);
            Object.defineProperty(this,"modelVoiture",{
                value:value,
                enumerable:true,
                writable:true,
            })
        }
    })
}

export function init21(): void {
    Object.defineProperty(Voiture.prototype,"client",{
        set:function(value:any){
            if(value instanceof Client || !value){}
            else if (typeof value!= 'object' )
                throw new Error(JSON.stringify(value) +"cannot be casted to client:Client");
            else value=Object.assign(new Client(),value);
            Object.defineProperty(this,"client",{
                value:value,
                enumerable:true,
                writable:true,
            })
        }
    })
}

export function init22(): void {
    Object.defineProperty(Voiture.prototype,"reparation",{
        set:function(value:any){
            if (value && !(value instanceof Array))
                throw new Error(JSON.stringify(value) +"cannot be casted to reparation:Reparation[]");
            for (let i =0;i<(value||[]).length;i++){
                if(value[i] instanceof Reparation || !value[i]){}
                else if (typeof value[i]!= 'object' )
                    throw new Error(JSON.stringify(value[i]) +" cannot be casted to Reparation");
                else value[i]=Object.assign(new Reparation(),value[i]);
            }
            Object.defineProperty(this,"reparation",{
                value:value,
                enumerable:true,
                writable:true,
            })
        }
    })
}
