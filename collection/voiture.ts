import * as mongoose from "mongoose";
const Schema = mongoose.Schema;


const VoitureSchem = new Schema({
    model: { type: String, required: true },
    year: { type: String, required: true },
    plate_number: { type: String, required: true },
    client_id: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Client"
      },
    reparation: [{
        type: mongoose.Schema.Types.ObjectId, ref: "Reparation"
    }]
});


export const VoitureSchema = mongoose.model('Voiture', VoitureSchem);
export default VoitureSchema