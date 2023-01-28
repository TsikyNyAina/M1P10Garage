import { Response, Express } from "express";
import { ObjectId } from "mongodb";
import { Option } from "../type";
import connect from "../datasource";

import { cast, Delete, Get, Post, Put, RequestBody, RequestParam, RestController } from "../decorator";
import { Client } from "../model"; 








@RestController("/clientController")
export class ClientController{
    rest: (app: Express) => void;
    @Get("/:option")
    async getAll(res:Response,@RequestParam("option") option:Option ){
        option= option?JSON.parse(option+""):[]
        let dbClient ;
        try {
            dbClient=await connect();
            res.json(await Client.getAll(dbClient.currentDb,option as any))
        } catch (error:any) {
            res.status(500).send(error.message)
        }
        finally{
            await dbClient?.close();
        }
    }

    @Get("/:id")
    async getById(res:Response,@RequestParam("id") id:string ){
        let dbClient ;
        try {
            dbClient=await connect();
            res.json(await Client.getById(dbClient.currentDb,id))
        } catch (error:any) {
            res.status(500).send(error.message)
        }
        finally{
            await dbClient?.close();
        }
    }
    @Post("")
    async save(res:Response,@RequestBody @cast client:Client){
        let dbClient;
        try {
            dbClient=await connect();
            res.json(await client.save(dbClient.currentDb))
        } catch (error:any) {
            res.status(500).json(error.message||error)
        }
        finally{
            return await dbClient?.close()
        }
    }
    @Put("")
    async update(res:Response,@cast @RequestBody client:Client){
        let dbClient;
        try {
            dbClient=await connect();
            res.json(await client.update(dbClient.currentDb))
        } catch (error:any) {
            res.status(500).json(error.message||error)
        }
        finally{
            return await dbClient?.close()
        }
    }
    @Delete("/:id")
    async delete(res:Response,@RequestParam("id") id:ObjectId){
        let dbClient;
        try {
            dbClient=await connect();
            const client=new Client();
            client.id=id;
            res.status(200).json(await client.delete(dbClient.currentDb));
        } catch (error:any) {
            res.status(500).json(error.message||error)
        }
        finally{
            return await dbClient?.close()
        }
    }
}