import DivisionList from "@/models/Divisions";
import Stream from "@/models/Stream";
import Student from "@/models/Student";
import Teacher from "@/models/Teachers";
import connect from "@/utils/db";
import mongoose from "mongoose";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  try {
    // console.log("apiii activated");

    const { studentName, email, admissionNo, dateOfJoining, stream, division } =
      await request.json();
    console.log(
      studentName,
      email,
      admissionNo,
      dateOfJoining,
      stream,
      division
    );

    const streamObjectId = new mongoose.Types.ObjectId(stream);
    const divisionObjectId = new mongoose.Types.ObjectId(division);

    await connect();
    const existing = await Student.findOne({ email });
    console.log(existing);
    // const teachers = await Teacher.findOne({_id:classTeacher})

    if (existing) {
      return new NextResponse("Student is already available", {
        status: 400,
        statusText: "Student is already registered",
      });
    }
    const admissionExistng = await Student.findOne({
      admissionNumber: admissionNo,
    });
    if (admissionExistng) {
      return new NextResponse("Student is already available", {
        status: 400,
        statusText: "Student is already registered",
      });
    }
    const newStudent = new Student({
      studentName,
      email,
      admissionNumber: admissionNo,
      dateOfJoining,
      stream: streamObjectId,
      division: divisionObjectId,
    });

    await newStudent.save();

    return NextResponse.json(
      { message: "Student registered successfully" },
      {
        status: 200,
        statusText: "Student registered successfully",
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
