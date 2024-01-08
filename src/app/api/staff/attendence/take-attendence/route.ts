import Attendence from "@/models/Attendence";
import AttendenceNew from "@/models/AttendenceNew";
import NewAttendence from "@/models/NewAttendence";
import Student from "@/models/Student";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const { attendenceData, currentDate } = await req.json();
    const studentArr: string[] = [];

    console.log(currentDate);
    attendenceData.map((item: StudentData) => {
      studentArr.push(item.studentId);
    });
    // console.log(studentArr);

    const dateParts = currentDate.split("/");
    const formattedDate = new Date(
      `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`
    );

    console.log(formattedDate);

    const students= await Student.find({})
    
  const areAllElementsIncluded=  students.every(element => studentArr.includes((element._id).toString()));
console.log(areAllElementsIncluded);

  

    for (const item of attendenceData) {
      const existingDateRecord = await AttendenceNew.findOne({
        date: formattedDate,
      });
      if (existingDateRecord) {
        return NextResponse.json(
          { message: "already marked attendence" },
          { status: 400, statusText: "already marked attendence" }
        );
      }else if(!areAllElementsIncluded){
        return NextResponse.json(
          { message: "Must mark all students Attendence" },
          { status: 400, statusText: "Must mark all students Attendence" }
        );
      } else {
        const newAttend = new AttendenceNew({
          date: formattedDate,
          streamId: item.streamId,
          divisionId: item.divisionId,
          isPresent: item.isPresent,

          studentId: studentArr,
        });
        await newAttend.save();
        return NextResponse.json(
          { message: `Attendence  added successfully` },
          {
            status: 200,
            statusText: `Attendence  added successfully`,
          }
        );
      }
    }

    // console.log(formattedDate);
    //   const studentdata= await Student.findOne({_id:studentId})

    //   const existingAttendance = await NewAttendence.findOne({
    //     studentId,
    //     streamId,
    //     date: formattedDate,
    //   });
    // console.log(existingAttendance);

    // if(existingAttendance){
    //   return NextResponse.json(
    //         { message: "already marked attendence" },
    //         { status: 400, statusText: "already marked attendence" }
    //       );
    // }
    // else if(isPresent){
    //   const result = await NewAttendence.updateOne(
    //     {
    //       studentId,
    //       streamId,
    //       divisionId,
    //       date:formattedDate,
    //       isPresent:true
    //     },
    //     {
    //       $push: {
    //         dateData: {
    //           date: formattedDate,
    //           studentId,
    //           isPresent:true
    //         },
    //       },
    //     },
    //     { upsert: true } // Creates a new document if it doesn't exist
    //   );

    //         return NextResponse.json(
    //           { message: `Attendence for ${currentDate} is added successfully` },
    //           {
    //             status: 200,
    //             statusText: `Attendence for ${currentDate} is added successfully`,
    //           }
    //         );
    // }
    // if (attendance) {
    //   return NextResponse.json(
    //     { message: "already marked attendence" },
    //     { status: 400, statusText: "already marked attendence" }
    //   );
    // } else {
    //   if (isPresent) {
    //     const newattendence = await new Attendence({
    //       studentId: studentId,
    //       date: currentDate,
    //       isPresent: true,
    //       streamId:studentdata.stream,
    //       divisionId:studentdata.division
    //     });
    //     await newattendence.save();
    //     return NextResponse.json(
    //       { message: `Attendence for ${currentDate} is added successfully` },
    //       {
    //         status: 200,
    //         statusText: `Attendence for ${currentDate} is added successfully`,
    //       }
    //     );
    //   } else {
    //     const newattendence = await new Attendence({
    //       studentId: studentId,
    //       date: currentDate,
    //       isPresent: false,
    //       streamId:studentdata.stream,
    //       divisionId:studentdata.division
    //     });
    //     await newattendence.save();
    //     return NextResponse.json(
    //       { message: `Attendence for ${currentDate} is added successfully` },
    //       {
    //         status: 200,
    //         statusText: `Attendence for ${currentDate} is added successfully`,
    //       }
    //     );
    //   }
    // }
  } catch (error: any) {
    console.log("post register error ==>", error.message);
    return new NextResponse(error, {
      status: 500,
      statusText: error.message,
    });
  }
};
