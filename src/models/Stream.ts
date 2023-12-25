import mongoose, { Schema } from "mongoose";

const streamSchema = new Schema({
streamName:{
    type:String
},

},{timestamps:true})

export default mongoose.models.Stream || mongoose.model("Stream",streamSchema)