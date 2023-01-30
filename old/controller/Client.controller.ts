import { Response, Express } from "express";
import { ObjectId } from "mongodb";
import { Option } from "../type";
import connect from "../datasource";

import { cast, Delete, Get, Post, Put, RequestBody, RequestParam, RestController } from "../decorator";
import { Client } from "../model"; 
import * as nodemailer from "nodemailer";


const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "tramasimiarantsoa@gmail.com",
      pass: "zsxeiauhdghgrxdh"
    }
  });








@RestController("/api/client")
export class ClientController{
    rest: (app: Express) => void;
    @Get("/option/:option")
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
            const respon =  (await Client.getById(dbClient.currentDb,id))[0];
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
    @Post("/:email")
    async sendmail(res:Response,@RequestParam("email") email:string){
        
        try {
            const mailOptions = {
                from: "tramasimiarantsoa@gmail.com",
                to: email,
                subject: "M1P10MEAN",
                text: "Project mean. Theme Garage. Binome: Ramasimiarantsoa Tsiky Ny Aina et Andriamarosoa Raherinjato Tina"
              };
            
              transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                  return res.status(400).send({ error });
                }
            
                return res.status(200).send({ message: "Email sent successfully" });
              });
        } catch (error:any) {
            res.status(500).json(error.message||error)
        }
        finally{
            
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