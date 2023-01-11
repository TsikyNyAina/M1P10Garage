import * as mongoose from "mongoose";
const Schema = mongoose.Schema;

const FactureSchema = new Schema({
  total_cout: { type: Number, required: false },
  cost: { type: String, required: false },
  due_date: { type: Date, required: true },
  payment_date: {type: Date, required: false},
  status: {
    type: String,
    enum: ['paye', 'en-attente']
  },
  reparation_id: {type: Number, required: true}
});

module.exports = mongoose.model('Facture', FactureSchema);