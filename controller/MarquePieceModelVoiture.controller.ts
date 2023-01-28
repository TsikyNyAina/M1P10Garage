import { Response, Express } from "express";
import { ObjectId } from "mongodb";
import { Option } from "../type";
import connect from "../datasource";

import { cast, Delete, Get, Post, Put, RequestBody, RequestParam, RestController } from "../decorator";
import { MarquePieceModelVoiture } from "../model";








@RestController("/marquePieceModelVoiture")
export class MarquePieceModelVoitureController{
    rest: (app: Express) => void;
    @Get("/:option")
    async getAll(res:Response,@RequestParam("option") option:Option ){
        option= option?JSON.parse(option+""):[]
        let client ;
        try {
            client=await connect();
            res.json(await MarquePieceModelVoiture.getAll(client.currentDb,option as any))
        } catch (error:any) {
            res.status(500).send(error.message)
        }
        finally{
            await client?.close();
        }
    }
    @Post("")
    async save(res:Response,@RequestBody @cast marquePieceModelVoiture:MarquePieceModelVoiture){
        let client;
        try {
            client=await connect();
            res.json(await marquePieceModelVoiture.save(client.currentDb))
        } catch (error) {
            res.status(500).json(error)
        }
        finally{
            return await client?.close()
        }
    }
    @Put("")
    async update(res:Response,@cast @RequestBody marquePieceModelVoiture:MarquePieceModelVoiture){
        let client;
        try {
            client=await connect();
            res.json(await marquePieceModelVoiture.update(client.currentDb))
        } catch (error:any) {
            res.status(500).json(error.message||error)
        }
        finally{
            return await client?.close()
        }
    }
    @Delete("/:id")
    async delete(res:Response,@RequestParam("id") id:ObjectId){
        let client;
        try {
            client=await connect();
            const marquePieceModelVoiture=new MarquePieceModelVoiture();
            marquePieceModelVoiture.id=id;
            res.status(200).json(await marquePieceModelVoiture.delete(client.currentDb));
        } catch (error:any) {
            res.status(500).json(error.message||error)
        }
        finally{
            return await client?.close()
        }
    }
    
}