import mongoose, { Schema } from "mongoose";

export const ActionSchema=new Schema({
    name: {type: String, required: true},
    cout:{type:Number,required:true}
  });

export default mongoose.model('Action', ActionSchema);