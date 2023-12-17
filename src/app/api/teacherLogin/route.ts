import Teacher from "@/models/Teacher";
import connect from "@/utils/db";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export const POST = async(request:NextApiRequest)=>{
    try {
        const { email } = await request.json();
        await connect();
      const teacher = await Teacher.findOne({email});
      if(teacher){
        return NextResponse.json(
            { message:"Email is valid " },
            { status: 200, statusText: "Teachers fetched successfully" }
          );
      }else{
        return NextResponse.json(
            { message:"Email is Invalid " },
            { status: 404, statusText: "Teachers Not found" }
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