import Stream from "@/models/Stream";
import Teacher from "@/models/Teachers";
import connect from "@/utils/db";

import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
    try {
      await connect();
      const teachers = await Teacher.find({isClassTeacher:false});
      const stream = await Stream.find()
      return NextResponse.json(
        { stream },
        { status: 200, statusText: "Teachers fetched successfully" }
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