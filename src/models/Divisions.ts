
import mongoose, { Schema } from "mongoose";

const divisionSchema = new Schema({
    className :{
        type:String
    },
    stream:{
        type:String
    },
    division:{
        type:String
    },
    isList:{
        type:Boolean,
        default:true
    },
    students:[{
        type:String
    }    
    ],
},{timestamps:true})

export default mongoose.models.DivisionList || mongoose.model("DivisionList",divisionSchema)