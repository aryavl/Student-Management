import DivisionList from "@/models/Divisions";
import Stream from "@/models/Stream";
import Student from "@/models/Student";
import Teacher from "@/models/Teachers";
import connect from "@/utils/db";
import mongoose from "mongoose";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: Request) => {
  try {
    // console.log("apiii activated");

    const { className, stream, division,classTeacher } = await request.json();
    console.log(className, stream, division,classTeacher);
    // const streamObjectId = new mongoose.Types.ObjectId(stream);
    // const teacherObjectId = new mongoose.Types.ObjectId(classTeacher);

    const streamObjectId = new mongoose.Types.ObjectId(stream);
    const teacherObjectId = new mongoose.Types.ObjectId(classTeacher);
    
    await connect();
    const existing = await DivisionList.findOne({ division });
    console.log(existing);
    // const teachers = await Teacher.findOne({_id:classTeacher})

    if (existing) {
      return new NextResponse("Division is already available", {
        status: 400,
        statusText: "Division is already available",
      });
    }
    const newDivision = new DivisionList({
      className: className,
      stream: streamObjectId,
      division: division,
      classTeacher:teacherObjectId
    });

    await newDivision.save();
    const teachers = await Teacher.findOneAndUpdate({_id:classTeacher},{isClassTeacher:true})
    await teachers.save()
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

export const GET = async (request: Request) => {
  try {
    await connect();
    const divisions = await DivisionList.find({ isList: true });
   
    
//    const divisions = await DivisionList.aggregate([
//     {
//         $lookup: {
//             from: "streams",  
//             localField: "stream",
//             foreignField: "_id",
//             as: "streamInfo"
//         }
//     }
// ])
//   const divisions = await Stream.findOne({_id:stream})
// console.log(divisions);
return NextResponse.json(
  {  divisions},
  { status: 200, statusText: "Divisions fetched successfully" }
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

export const DELETE = async (request: Request) => {
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
