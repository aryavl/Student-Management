import Teachers from "@/models/Teachers";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
export const POST = async (req: Request) => {
  try {
    console.log("post pass");

    const { email, password } = await req.json();
    console.log(email, password);
    const hashedPass = await bcrypt.hash(password, 5);
    const teacher = await Teachers.findOneAndUpdate(
      { email },
      { password: hashedPass }
    );
    console.log(teacher);
    return NextResponse.json(
      { message: "Staff registered " },
      { status: 200, statusText: "Staff registered" }
    );
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

export const GET = async (req: Request) => {
  try {
    const url = new URL(req.url!);
    const searchParams = url.searchParams;
    const email = searchParams.get("email");
    console.log(email);
    const teacher = await Teachers.findOne({ email });
    console.log(teacher);
    
    if (teacher.isVerified) {
      return NextResponse.json(
        { message: "Teacher already verified " },
        { status: 200, statusText: "Teacher already verified" }
      );
    }else{
      return NextResponse.json({
        message:"Teahcer is not verified"
      },{
        status:404,
        statusText:'"Teahcer is not verified"'
      })
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
