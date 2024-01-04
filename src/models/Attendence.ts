import { timeStamp } from "console";
import mongoose, { Schema } from "mongoose";

const attendenceSchema = new Schema({
  studentId:{
    type:mongoose.Schema.Types.ObjectId
  },
  date:{
    type: String
  },
  streamId:{
    type:mongoose.Schema.Types.ObjectId
  },
  divisionId:{
    type:mongoose.Schema.Types.ObjectId
  },
  isPresent:{
    type:Boolean,
    default:false
  }
},{timestamps:true}
)

export default mongoose.models.Attendencedata || mongoose.model('Attendencedata',attendenceSchema)

