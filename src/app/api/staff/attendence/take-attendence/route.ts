import Attendence from "@/models/Attendence";
import Student from "@/models/Student";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const { id, isPresent, currentDate } = await req.json();
    console.log(id, isPresent, currentDate);

    const dateParts = currentDate.split("/");
    const formattedDate = new Date(
      `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`
    );

    console.log(formattedDate);

    const attendence = await Attendence.findOne({
      studentId: id,
      date: currentDate,
    });
    const dateAttendence = await Attendence.findOne({ date: currentDate });
    if (attendence) {
      return NextResponse.json(
        { message: "already marked attendence" },
        { status: 400, statusText: "already marked attendence" }
      );
    } else {
      if (isPresent) {
        const newattendence = await new Attendence({
          studentId: id,
          date: currentDate,
          isPresent: true,
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
          studentId: id,
          date: currentDate,
          isPresent: false,
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
