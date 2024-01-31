import Teachers from "@/models/Teachers";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
export const POST = async (req: Request) => {
  try {
    console.log("post login staff");

    const { email, password } = await req.json();
    console.log(email, password);
    const teacher = await Teachers.findOne({ email: email });
    console.log(teacher);
    if (teacher) {
      const matchPass =await bcrypt.compare(password, teacher.password);
      console.log(matchPass);
      
      if (matchPass) {
        return NextResponse.json(
          {
            message: "class teacher successfully login",
          },
          { status: 200, statusText: "teacher login" }
        );
      } else {
        return NextResponse.json(
          {
            message: "Password Incorrect",
          },
          { status: 404, statusText: "Password Incorrect" }
        );
      }
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
