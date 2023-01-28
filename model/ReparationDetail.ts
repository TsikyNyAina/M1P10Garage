import { Entity } from "./Entity";
// import { Piece } from "./MarquePiece";
import { Db, ObjectId } from "mongodb";
export class ReparationDetail extends Entity{
    reparationId:ObjectId;
    pieceId:ObjectId;
    quantity:number;
    // piece:Piece;
}
