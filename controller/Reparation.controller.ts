import { Response, Express } from "express";
import { ObjectId } from "mongodb";
import { Option } from "../type";
import connect from "../datasource";

import { cast, Delete, Get, Post, Put, RequestBody, RequestParam, RestController } from "../decorator"; 
import { Reparation } from "../model";








@RestController("/api/reparation")
export class ReparationController{
    rest: (app: Express) => void;
    @Get("/option/:option")
    async getAll(res:Response,@RequestParam("option") option:Option ){
        option= option?JSON.parse(option+""):[]
        let client ;
        try {
            client=await connect();
            res.json(await Reparation.getAll(client.currentDb,option as any))
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
            const respon =  (await Reparation.getById(dbClient.currentDb,id))[0];
            if (typeof respon === 'undefined'){
                res.status(404).send("pas de correspondant")
            }else{
                res.json(respon)
            }
        } catch (error:any) {
            res.status(500).send(error.message)
        }
        finally{
            await dbClient?.close();
        }
    }
    @Post("")
    async save(res:Response,@RequestBody @cast reparation:Reparation){
        let client;
        try {
            client=await connect();
            res.json(await reparation.save(client.currentDb))
        } catch (error:any) {
            res.status(500).json(error.message||error)
        }
        finally{
            return await client?.close()
        }
    }
    @Put("")
    async update(res:Response,@cast @RequestBody reparation:Reparation){
        let client;
        try {
            client=await connect();
            res.json(await reparation.update(client.currentDb))
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
            const reparation=new Reparation();
            reparation.id=id;
            res.status(200).json(await reparation.delete(client.currentDb));
        } catch (error:any) {
            res.status(500).json(error.message||error)
        }
        finally{
            return await client?.close()
        }
    }
}