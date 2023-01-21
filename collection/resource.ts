import * as mongoose from "mongoose";
import ActionShema from "./action";
const Schema = mongoose.Schema;





const ResourceSchema = new Schema({
  name: {type: String, required: true},
});





export const Resource=mongoose.model('Resource', ResourceSchema);
export default Resource