import { timeStamp } from "console";
import mongoose, { Schema } from "mongoose";

const divisionSchema = new Schema({
    class :{
        type:String
    },
    stream:{
        type:String
    },
    division:{
        type:String
    },
    students:[{
        type:String
    }    
    ]
},{timestamps:true})

export default mongoose.models.Division || mongoose.model("Division",divisionSchema)