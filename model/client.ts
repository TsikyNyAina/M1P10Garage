import { ClientSchema } from "../collection";
import { Entity } from "./entity";

export class Client extends Entity {
    name: String;
    email: String;
    phone_number: String;
    mdp: String;
    async create() {
        const rep = await ClientSchema.create(this)
        return Object.assign(this, { ...rep, id: rep?.id })
    }
    static async find(filter: any = {}) {
        let rep = new Array();
        for (let a of (await ClientSchema.find(filter)) || []) {
            rep.push(Object.assign(new Client(), {id: a.id, name: a.name, email: a.email, phone_number: a.phone_number, mdp:a.mdp }))
        }
        return rep;
    }
    static async findOne(filter: any = {}) {
        let a = await ClientSchema.findOne(filter);
        return Object.assign(new Client(), {id: a.id, name: a.name, email: a.email, phone_number: a.phone_number, mdp:a.mdp })
    }
    constructor() {
        super()
    }
}