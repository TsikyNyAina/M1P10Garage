const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientSchem = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone_number: { type: String, required: true },
  mdp: {type: String, required: true},
});

export const ClientSchema =mongoose.model('Client', ClientSchem);
export default ClientSchema;