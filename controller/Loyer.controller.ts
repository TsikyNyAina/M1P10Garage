import { Response, Express, response } from "express";
import { ObjectId } from "mongodb";
import { Option } from "../type";
import connect from "../datasource";

import { cast, Delete, Get, Post, Put, RequestBody, RequestParam, RestController } from "../decorator"; 
import { Loyer } from "../model";


@RestController("/api/loyer")
export class LoyerController{
    rest: (app: Express) => void;
    @Get("/option/:option")
    async getAll(res:Response,@RequestParam("option") option:Option ){
        option= option?JSON.parse(option+""):[]
        let client ;
        try {
            client=await connect();
            res.json(await Loyer.getAll(client.currentDb,option as any))
        } catch (error:any) {
            res.status(500).send(error.message)
        }
        finally{
            await client?.close();
        }
    }

    @Get("/depense")
    async getDepense(res:Response){
        let client ;
        try {
            client=await connect();
            res.json(await Loyer.getAll1(client.currentDb))
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
            const respon =  (await Loyer.getById(dbClient.currentDb,id))[0];
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
    async save(res:Response,@RequestBody @cast voiture:Loyer){
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
    async update(res:Response,@cast @RequestBody voiture:Loyer){
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
            const voiture=new Loyer();
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