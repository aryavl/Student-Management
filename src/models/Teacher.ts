import mongoose, { Schema } from "mongoose";

const teacherSchema = new Schema({
teacherName:{
    type:String
},
email:{
    type:String,
    unique:true
},
stream:{
    type:String
},
subject:{
    type:String
},
type:{
    type:String
}
},{timestamps:true})

export default mongoose.models.Teachers || mongoose.model("Teachers",teacherSchema)