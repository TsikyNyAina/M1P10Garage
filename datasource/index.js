"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = exports.MongoClientWithDatabase = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const mongodb_1 = require("mongodb");
dotenv_1.default.config();
const uri = process.env.DB_URI;
class MongoClientWithDatabase extends mongodb_1.MongoClient {
}
exports.MongoClientWithDatabase = MongoClientWithDatabase;
const connect = () => new mongodb_1.MongoClient(uri, {}).connect().then((client) => {
    client.currentDb = client.db("vaika");
    return client;
});
exports.connect = connect;
exports.default = exports.connect;
