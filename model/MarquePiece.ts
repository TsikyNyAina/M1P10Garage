import { Db ,ObjectId} from "mongodb";
import { cast } from "../decorator";
import { assignArray } from "../util";
import { Entity } from "./Entity";
import { ModelVoiture } from "./ModelVoiture";
import { modelVoitureMarquePieceRelation } from "../relation"

export class MarquePiece extends Entity{
    marquePieceName:string;
    @cast modelVoiture:ModelVoiture[];
    touteModelVoiture:boolean ;
    save(db:Db){
        const collection=db.collection("marquePiece");
        return collection.insertOne({
            marquePieceName:this.marquePieceName,
            touteModelVoiture:this.touteModelVoiture,
            modelVoiture:this.modelVoiture
        });
        
    }   
    static getAll(db:Db,pipeline:Array<any>=new Array<any>()){
        const collection=db.collection("marquePiece");
        
        return collection.aggregate([...modelVoitureMarquePieceRelation,...pipeline]).toArray().then(m=>assignArray(MarquePiece,m));
    }
    update(db:Db){
        const collection=db.collection("marquePiece");
        return collection.updateOne({_id:this.id},{
            marquePieceName:this.marquePieceName,
            touteModelVoiture:this.touteModelVoiture
        });
    }
    delete(db:Db){
        const collection=db.collection("marquePiece");
        return collection.deleteOne({_id:this.id})    
    }

    static async getById(db:Db,id:string){
        return await MarquePiece.getAll(db,[
            {
                $match:{
                      _id:ObjectId.createFromHexString(id)
                }
            }
        ])
  }
}

