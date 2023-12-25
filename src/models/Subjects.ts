import mongoose, { Schema } from "mongoose";

const subjectSchema = new Schema({
    stream:{
        type:  mongoose.Schema.Types.ObjectId 
    },
    subjectName:{
        type: String
    },
    isList:{
        type:Boolean,
        default:false
    }
},{timestamps:true})
export default mongoose.models.Subject || mongoose.model("Subject",subjectSchema)
