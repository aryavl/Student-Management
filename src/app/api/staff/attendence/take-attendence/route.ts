import Attendence from "@/models/Attendence";
import Student from "@/models/Student";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const { studentId, isPresent, currentDate,streamId } = await req.json();
    console.log(studentId, isPresent, currentDate,streamId);

    const dateParts = currentDate.split("/");
    const formattedDate = new Date(
      `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`
    );

    console.log(formattedDate);
      const studentdata= await Student.findOne({_id:studentId})
      // console.log(studentdata.division,studentdata.stream);
      
    const attendence = await Attendence.findOne({
      studentId: studentId,
      date: currentDate,
    });
    // const dateAttendence = await Attendence.findOne({ date: currentDate });
    if (attendence) {
      return NextResponse.json(
        { message: "already marked attendence" },
        { status: 400, statusText: "already marked attendence" }
      );
    } else {
      if (isPresent) {
        const newattendence = await new Attendence({
          studentId: studentId,
          date: currentDate,
          isPresent: true,
          streamId:studentdata.stream,
          divisionId:studentdata.division
        });
        await newattendence.save();
        return NextResponse.json(
          { message: `Attendence for ${currentDate} is added successfully` },
          {
            status: 200,
            statusText: `Attendence for ${currentDate} is added successfully`,
          }
        );
      } else {
        const newattendence = await new Attendence({
          studentId: studentId,
          date: currentDate,
          isPresent: false,
          streamId:studentdata.stream,
          divisionId:studentdata.division
        });
        await newattendence.save();
        return NextResponse.json(
          { message: `Attendence for ${currentDate} is added successfully` },
          {
            status: 200,
            statusText: `Attendence for ${currentDate} is added successfully`,
          }
        );
      }
    }
  } catch (error: any) {
    console.log("post register error ==>", error.message);
    return new NextResponse(error, {
      status: 500,
      statusText: error.message,
    });
  }
};
