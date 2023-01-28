import { Response, Express, response } from "express";
import { ObjectId } from "mongodb";
import { Option } from "../type";
import connect from "../datasource";

import { cast, Delete, Get, Post, Put, RequestBody, RequestParam, RestController } from "../decorator"; 
import { Voiture } from "../model";








@RestController("/voiture")
export class VoitureController{
    rest: (app: Express) => void;
    @Get("/option/:option")
    async getAll(res:Response,@RequestParam("option") option:Option ){
        option= option?JSON.parse(option+""):[]
        let client ;
        try {
            client=await connect();
            res.json(await Voiture.getAll(client.currentDb,option as any))
        } catch (error:any) {
            res.status(500).send(error.message)
        }
        finally{
            await client?.close();
        }
    }

    @Get("/:id")
    async getById(res:Response,@RequestParam("id") id:string ){
        let dbClient ;
        try {
            dbClient=await connect();
            let repsonse = await Voiture.getById(dbClient.currentDb,id);
            
            res.json(await Voiture.getById(dbClient.currentDb,id))
        } catch (error:any) {
            res.status(500).send(error.message)
        }
        finally{
            await dbClient?.close();
        }
    }

    @Post("")
    async save(res:Response,@RequestBody @cast voiture:Voiture){
        let client;
        try {
            client=await connect();
            res.json(await voiture.save(client.currentDb))
        } catch (error:any) {
            res.status(500).json(error.message||error)
        }
        finally{
            return await client?.close()
        }
    }
    @Put("")
    async update(res:Response,@cast @RequestBody voiture:Voiture){
        let client;
        try {
            client=await connect();
            res.json(await voiture.update(client.currentDb))
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
            const voiture=new Voiture();
            voiture.id=id;
            res.status(200).json(await voiture.delete(client.currentDb));
        } catch (error:any) {
            res.status(500).json(error.message||error)
        }
        finally{
            return await client?.close()
        }
    }
}