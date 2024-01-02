import mongoose, { Schema } from "mongoose";

const studentSchema = new Schema(
  {
    studentName: {
      type: String,
    },
    email: String,
    phone: Number,
    father: String,
    mother: String,
    guardian: String,
    dateOfJoining: {
      type: Date,
    },
    stream: {
      type: mongoose.Schema.Types.ObjectId,
    },
    division: {
      type: mongoose.Schema.Types.ObjectId,
    },
    type: {
      type: String,
      default: "student",
    },
    image: String,

    isVerified: {
      type: Boolean,
      default: false,
    },
    otp: {
      type: Number,
    },
    password: {
      type: String,
    },
    admissionNumber:{
      type:Number
    }
  },
  { timestamps: true }
);

export default mongoose.models.Studentdata ||
  mongoose.model("Studentdata", studentSchema);
