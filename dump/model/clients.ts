import * as mongoose from "mongoose";
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone_number: { type: String, required: true },
  mdp: {type: String, required: true},
});

export default mongoose.model('Client', ClientSchema);