import { timeStamp } from "console";
import mongoose, { Schema } from "mongoose";

const attendenceSchema = new Schema<AttendenceProps>({
  studentId:{
    type:mongoose.Schema.Types.ObjectId
  },
  dateDate:[
    {
        date:Date,
        studentId:mongoose.Schema.Types.ObjectId,
        isPresent:{
            type:Boolean,
            default:false
          }
    }
  ],
  streamId:{
    type:mongoose.Schema.Types.ObjectId
  },
  divisionId:{
    type:mongoose.Schema.Types.ObjectId
  }
 
  
},{timestamps:true}
)

export default mongoose.models.AttendencedNewData || mongoose.model('AttendencedNewData',attendenceSchema)

