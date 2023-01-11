import * as mongoose from "mongoose";
const Schema = mongoose.Schema;

const ReparationSchema = new Schema({
  description: { type: String, required: true },
  cost: { type: String, required: false },
  start_date: { type: Date, required: false },
  end_date: {type: Date, required: false},
  avancement: {type: Number, default: 0},
  status: {
    type: String,
    enum: ['nouveau', 'en-cours', 'finie']
  },
  voiture_id: {type: Number, required: true}
});

module.exports = mongoose.model('Reparation', ReparationSchema);