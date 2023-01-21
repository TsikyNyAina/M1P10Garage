import mongoose, { Schema } from "mongoose";

const Action=new Schema({ 
    name: {type: String, required: true},
    cout:{type:Number,required:true},
    resourceId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Resource"
    }
  });

export const ActionSchema =mongoose.model('Action', Action);
export default ActionSchema;