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

// export const GET = async (req: NextApiRequest) => {
//   try {
//     const url = new URL(req.url!);
//     const searchParams = url.searchParams;
//     const email = searchParams.get("email");
//     console.log(email);
//     const student = await Student.findOne({ email });
//     console.log(student);
    
//     if (student.isVerified) {
//       return NextResponse.json(
//         { message: "student already verified " },
//         { status: 200, statusText: "student already verified" }
//       );
//     }else{
//       return NextResponse.json({
//         message:"student is not verified"
//       },{
//         status:404,
//         statusText:'"student is not verified"'
//       })
//     }
//   } catch (error: any) {
//     return NextResponse.json(
//       { message: "error" },
//       {
//         status: 500,
//         statusText: error.message,
//       }
//     );
//   }
// };
