import mongoose, { Schema } from "mongoose";

const studentSchema = new Schema({

},{timestamps:true})

export default mongoose.models.Students || mongoose.model("Students",studentSchema)