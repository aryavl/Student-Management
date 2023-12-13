import mongoose, { Schema } from "mongoose";

const activeEmailTokenSchema = new Schema({
token:{
    type:String
},
activatedAt:{
    type:String
},
admin: [{
    type:String
}]
},{timestamps:true})

export default mongoose.models.EmailActive|| mongoose.model("EmailActive",activeEmailTokenSchema)