import { transporter, mailOptions } from "@/config/nodemailer";
import Student from "@/models/Student";
import Teacher from "@/models/Teachers";
import connect from "@/utils/db";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

function generateRandom4DigitNumber(): number {
  return Math.floor(1000 + Math.random() * 9000);
}

export const POST = async (request: Request) => {
  try {
    const { email } = await request.json(); 
    await connect();
    console.log(email);
    
    const student = await Student.findOne({ email,isVerified:false });
    console.log(student);
    const verifiedStudent = await Student.findOne({ email,isVerified:true })
    console.log(verifiedStudent);
    
    if (student) {
      const otp = generateRandom4DigitNumber(); 
      console.log("Current teacher details:", student);
      await Student.findOneAndUpdate({ email }, { otp });
      const updatedStudent = await Student.findOne({ email });
      console.log("Updated Student details:", updatedStudent);

      await transporter.sendMail({
        ...mailOptions,
        to:email,
        subject: "OTP generation",
        text: `Your OTP is: ${otp}`,
        html: `<h1>OTP Generation</h1><p>Your OTP is: ${otp}</p>`,
      });

      return NextResponse.json(
        { message: "Email is valid and email is sent" ,updatedStudent},
        { status: 200, statusText: "Teachers fetched successfully" }
      );
    } else if(verifiedStudent) {
      return NextResponse.json(
        { message: "Email is already verified ",verifiedStudent },
        { status: 200, statusText: "Teachers Not found" }
      );
    }else{
        return NextResponse.json(
            { message: "Email is invalid ",verifiedStudent },
            { status: 404, statusText: "Teachers Not found" }
          );
    }
  } catch (error: any) {
    return NextResponse.json(
      { message: "error" },
      {
        status: 500,
        statusText: error.message,
      }
    );
  }
};
