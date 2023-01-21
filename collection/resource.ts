import * as mongoose from "mongoose";
import ActionShema from "./action";
const Schema = mongoose.Schema;





const ResourceSchema = new Schema({
  id:{type:Number,required:true},
  name: {type: String, required: true},
  action:{type:Array<typeof ActionShema>,required:true}
});


export const Resource=mongoose.model('Resource', ResourceSchema);
export default Resource