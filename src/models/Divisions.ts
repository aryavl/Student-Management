
import mongoose, { Schema } from "mongoose";

const divisionSchemas = new Schema({
    className :{
        type:String
    },
    stream:{
        type: mongoose.Schema.Types.ObjectId,
       
    },
    division:{
        type:String
    },
    isList:{
        type:Boolean,
        default:true
    },
    students:[{
        type:mongoose.Schema.Types.ObjectId
    }    
    ],
    classTeacher:{
        type: mongoose.Schema.Types.ObjectId,
        
    }
},{timestamps:true})

export default mongoose.models.Divisions || mongoose.model("Divisions",divisionSchemas)