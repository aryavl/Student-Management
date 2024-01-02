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
    type:  mongoose.Schema.Types.ObjectId 
},
subject:{
    type:  mongoose.Schema.Types.ObjectId 
},
type:{
    type:String
},
isVerified:{
    type:Boolean,
    default:false
},
otp:{
    type:Number,
},
isClassTeacher:{
    type:Boolean,
    default:false
},
password:{
    type:String
},
},{timestamps:true})

export default mongoose.models.TeachersList || mongoose.model("TeachersList",teacherSchema)