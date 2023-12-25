import { transporter, mailOptions } from "@/config/nodemailer";
import Teacher from "@/models/Teachers";
import connect from "@/utils/db";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

function generateRandom4DigitNumber(): number {
  return Math.floor(1000 + Math.random() * 9000);
}

export const POST = async (request: NextApiRequest) => {
  try {
    const { email } = await request.json();
    await connect();
    // console.log(email);
    
    const teacher = await Teacher.findOne({ email,isVerified:false });
    console.log(teacher);
    const verifiedTeacher = await Teacher.findOne({ email,isVerified:true })
    console.log(verifiedTeacher);
    
    if (teacher) {
      const otp = generateRandom4DigitNumber(); 
      console.log("Current teacher details:", teacher);
      await Teacher.findOneAndUpdate({ email }, { otp, isVerified: true });
      const updatedTeacher = await Teacher.findOne({ email });
      console.log("Updated teacher details:", updatedTeacher);

      await transporter.sendMail({
        ...mailOptions,
        subject: "OTP generation",
        text: `Your OTP is: ${otp}`,
        html: `<h1>OTP Generation</h1><p>Your OTP is: ${otp}</p>`,
      });

      return NextResponse.json(
        { message: "Email is valid and email is sent" ,updatedTeacher},
        { status: 200, statusText: "Teachers fetched successfully" }
      );
    } else if(verifiedTeacher) {
      return NextResponse.json(
        { message: "Email is already verified ",verifiedTeacher },
        { status: 200, statusText: "Teachers Not found" }
      );
    }else{
        return NextResponse.json(
            { message: "Email is invalid ",verifiedTeacher },
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
