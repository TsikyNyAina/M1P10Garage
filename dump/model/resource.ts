import * as mongoose from "mongoose";
const Schema = mongoose.Schema;

const ResourceSchema = new Schema({
  nom: {type: String, required: true},
  description: { type: String, required: true },
  cout: { type: String, required: true },
  date: { type: Date, required: true },
  type: {
    type: String,
    enum: ['Loyer', 'Achat Piece', ''],
    required: true
  }
});


export const Resource=mongoose.model('Resource', ResourceSchema);
export default Resource