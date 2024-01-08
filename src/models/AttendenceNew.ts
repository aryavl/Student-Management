
import mongoose, { Schema } from "mongoose";

const attendenceSchema = new Schema<AttendenceProps>({
  studentId:[{
    type:mongoose.Schema.Types.ObjectId
  }],
  date:{
    type:Date
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

export default mongoose.models.AttendenceNewData || mongoose.model('AttendenceNewData',attendenceSchema)

