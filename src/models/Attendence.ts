import { timeStamp } from "console";
import mongoose, { Schema } from "mongoose";

const attendenceSchema = new Schema({
  studentName:{
    type:mongoose.Schema.Types.ObjectId
  },
  date:{
    type: Date
  },
  isPresent:{
    type:Boolean,
    default:false
  }
},{timestamps:true}
)

export default mongoose.models.Attendence || mongoose.model('Attendence',attendenceSchema)

