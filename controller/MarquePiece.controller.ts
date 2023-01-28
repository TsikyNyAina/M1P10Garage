import { Response, Express } from "express";
import { ObjectId } from "mongodb";
import { Option } from "../type";
import connect from "../datasource";

import { cast, Delete, Get, Post, Put, RequestBody, RequestParam, RestController } from "../decorator";
import { MarqueVoiture } from "../model";
import { MarquePiece } from "../model/MarquePiece";








@RestController("/marquePiece")
export class MarquePieceController{
    rest: (app: Express) => void;
    @Get("/option/:option")
    async getAll(res:Response,@RequestParam("option") option:Option ){
        option= option?JSON.parse(option+""):[]
        let client ;
        try {
            client=await connect();
            res.json(await MarquePiece.getAll(client.currentDb,option as any))
        } catch (error:any) {
            res.status(500).send(error.message)
        }
        finally{
            await client?.close();
        }
    }

    @Get("/:id")
    async getById(res:Response,@RequestParam("id") id:string ){
        
        let client ;
        try {
            client=await connect();
            res.json(await MarquePiece.getById(client.currentDb,id))
        } catch (error:any) {
            res.status(500).send(error.message)
        }
        finally{
            await client?.close();
        }
    }

    @Post("")
    async save(res:Response,@RequestBody @cast marquePiece:MarquePiece){
        let client;
        try {
            client=await connect();
            res.json(await marquePiece.save(client.currentDb))
        } catch (error) {
            res.status(500).json(error)
        }
        finally{
            return await client?.close()
        }
    }
    @Put("")
    async update(res:Response,@cast @RequestBody marquePiece:MarquePiece){
        let client;
        try {
            client=await connect();
            res.json(await marquePiece.update(client.currentDb))
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
            const marquePiece=new MarquePiece();
            marquePiece.id=id;
            res.status(200).json(await marquePiece.delete(client.currentDb));
        } catch (error:any) {
            res.status(500).json(error.message||error)
        }
        finally{
            return await client?.close()
        }
    }
}