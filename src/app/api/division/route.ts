import Division from "@/models/Division";
import Student from "@/models/Student";
import connect from "@/utils/db";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export const POST = async (request:NextApiRequest) => {
  try {
    console.log("apiii activated");
    
    const { className, stream, division } = await request.json();
    console.log(className,stream,division);
    
    await connect();
    const existing = await Division.findOne({ division });
console.log(existing);

    if (existing) {
      return new NextResponse("Division is already available",{status:400,statusText:"Division is already available"});
    }
    const newDivision = new Division({
      class: className,
      stream: stream,
      division: division,
    });

    await newDivision.save();
    return new NextResponse("Division registered successfully", {
      status: 200,
      statusText:"Division registered successfully"
    });
  } catch (error: any) {
    console.log("post register error ==>", error.message);
    return new NextResponse(error, {
      status: 500,
      statusText:error.message
    });
  }
};
