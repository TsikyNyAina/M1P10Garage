import * as mongoose from "mongoose";
const Schema = mongoose.Schema;

const VoitureSchema = new Schema({
  model: { type: String, required: true },
  year: { type: String, required: true },
  plate_number: { type: String, required: true },
  client_id: {type: Number, required: true},
});

module.exports = mongoose.model('Voiture', VoitureSchema);