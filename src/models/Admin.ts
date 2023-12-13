import mongoose, { Schema } from 'mongoose'

const adminSchema = new Schema({
    firstname:{
        type:String,
        // required: true,
    },
    lastname:{
        type:String,
        // required: true,
    },
    email:{
        type:String,
        required: true,
        unique:true
    }, 
    phone:{
        type:Number,
        // required: true,
    },
    password:{
        type:String,
        // required: true,
    }, 
    type:{
        type:String
    },
    image:{
        type:String 
    },
    provider:{
        type:String
    },
    // active:{
    //     type:Boolean,
    //     default: false
    // }  
},
{timestamps:true}
)
 
export default mongoose.models.Admin || mongoose.model("Admin",adminSchema)