import Teachers from "@/models/Teachers";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import Student from "@/models/Student";
export const POST = async (req: Request) => {
  try {
    console.log("post pass");

    const { email, password } = await req.json();
    console.log(email, password);
    const hashedPass = await bcrypt.hash(password, 5);
    const student = await Student.findOneAndUpdate(
      { email },
      { password: hashedPass }
    );
    console.log(student);
    return NextResponse.json(
      { message: "Pass registered " },
      { status: 200, statusText: "pass registered" }
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

