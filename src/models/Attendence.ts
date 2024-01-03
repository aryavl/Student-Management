import { timeStamp } from "console";
import mongoose, { Schema } from "mongoose";

const attendenceSchema = new Schema({
  studentId:{
    type:mongoose.Schema.Types.ObjectId
  },
  date:{
    type: String
  },
  isPresent:{
    type:Boolean,
    default:false
  }
},{timestamps:true}
)

export default mongoose.models.Attendencelist || mongoose.model('Attendencelist',attendenceSchema)

