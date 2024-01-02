import Teachers from "@/models/Teachers";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export const POST =async (req:Request) => {
    try {
        const {email,otp} =await req.json()
        console.log(email,otp);
        const teacher = await Teachers.findOne({email,otp})
        console.log(teacher);
        if(teacher){
            await Teachers.findOneAndUpdate({email},{isVerified:true})
            return NextResponse.json(
                { message: "OTP is verified" },
                { status: 200, statusText: "OTP verified" }
              );
        }else{
            return NextResponse.json(
                { message: "OTP invalid " },
                { status: 404, statusText: "OTP Invalid" }
              );
        }
        
        
    } catch (error:any) {
        return NextResponse.json(
            { message: "error" },
            {
              status: 500,
              statusText: error.message,
            }
          ); 
    }
}