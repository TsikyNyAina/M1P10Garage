import * as mongoose from "mongoose";
const Schema = mongoose.Schema;

const ResponsableSchem = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mdp: {type: String, required: true},
  type: {
    type: String,
    enum: ['atelier','financier']
  }
});


export const ResponsableSchema =mongoose.model('Responsable', ResponsableSchem);
export default ResponsableSchema;