import { ResponsableSchema } from "../collection";
import { Entity } from "./entity";

export class Responsable extends Entity {
    name: String;
    email: String;
    type: String;
    mdp: String;
    async create() {
        const rep = await ResponsableSchema.create(this)
        return Object.assign(this, { ...rep, id: rep?.id })
    }
    static async find(filter: any = {}) {
        let rep = new Array();
        for (let a of (await ResponsableSchema.find(filter)) || []) {
            rep.push(Object.assign(new ResponsableSchema(), {id: a.id, name: a.name, email: a.email, type: a.type, mdp:a.mdp }))
        }
        return rep;
    }
    static async findOne(filter: any = {}) {
        let a = await ResponsableSchema.findOne(filter);
        if(!a) return
        return Object.assign(new Responsable(), {id: a.id, name: a.name, email: a.email, type: a.type, mdp:a.mdp })
    }
    constructor() {
        super()
    }
}