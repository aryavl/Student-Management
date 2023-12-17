import DivisionList from "@/models/Divisions";
import Student from "@/models/Student";
import connect from "@/utils/db";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export const POST = async (request: NextApiRequest) => {
  try {
    console.log("apiii activated");

    const { className, stream, division } = await request.json();
    console.log(className, stream, division);

    await connect();
    const existing = await DivisionList.findOne({ division });
    console.log(existing);

    if (existing) {
      return new NextResponse("Division is already available", {
        status: 400,
        statusText: "Division is already available",
      });
    }
    const newDivision = new DivisionList({
      className: className,
      stream: stream,
      division: division,
    });

    await newDivision.save();
    return NextResponse.json(
      { message: "Division registered successfully" },
      {
        status: 200,
        statusText: "Division registered successfully",
      }
    );
  } catch (error: any) {
    console.log("post register error ==>", error.message);
    return new NextResponse(error, {
      status: 500,
      statusText: error.message,
    });
  }
};

export const GET = async (request: NextApiRequest) => {
  try {
    await connect();
    const divisions = await DivisionList.find({ isList: true });
    return NextResponse.json(
      { divisions },
      { status: 200, statusText: "Divisions fetched successfully" }
    );
  } catch (error: any) {
    return new NextResponse(error, {
      status: 500,
      statusText: error.message,
    });
  }
};

export const DELETE = async (request: NextApiRequest) => {
  try {
    
    // const id = request.query.id 
    const {id} = request.query
  console.log(id);
  
    await connect();
    await DivisionList.findOneAndDelete({ _id: id });
    return NextResponse.json(
      { message: id },
      { status: 200, statusText: "division unlisted successfully" }
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
