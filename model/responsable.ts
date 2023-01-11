import * as mongoose from "mongoose";
const Schema = mongoose.Schema;

const ResponsableSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mdp: {type: String, required: true},
  type: {
    type: String,
    enum: ['atelier','financier']
  }
});

module.exports = mongoose.model('Responsable', ResponsableSchema);