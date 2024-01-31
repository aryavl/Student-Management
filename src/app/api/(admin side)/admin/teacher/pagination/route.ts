import Stream from "@/models/Stream";
import Subjects from "@/models/Subjects";
import Teachers from "@/models/Teachers";
import mongoose from "mongoose";
import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  console.log("hello from sever");
  try {
    // res.status(200).json({ name: "John Doe" });

    const url = new URL(req.url!);
    const searchParams = url.searchParams;
    console.log(searchParams.get("page"));
    const query = searchParams.get("query");
    const filter = searchParams.get("filter");
    console.log(filter);
    const streams = await Stream.find()
    console.log(streams);
    const subjects = await Subjects.find({isList:false})
    const page: number = parseInt(searchParams.get("page")!) || 1;
    const pageSize: number = 10;
 
    const skip = (page - 1) * pageSize;
    const filterObjectId =new mongoose.Types.ObjectId(filter!) 
    let aggregationPipeline:any[] = [
      {
        $lookup: {
          from: "streams",
          localField: "stream",
          foreignField: "_id",
          as: "streamdata",
        },
      },
      {
        $lookup: {
          from: "subjects",
          localField: "subject",
          foreignField: "_id",
          as: "subjectdata",
        },
      },
      {
        $unwind: '$subjectdata',
      },
      {
        $unwind: '$streamdata',
      },
      {
        $skip: skip,
      },
      {
        $limit: pageSize,
      },
    ];
    if(filter){
      aggregationPipeline=[
        ...aggregationPipeline,
        {
          $match:{
            'streamdata._id':filterObjectId
          }
        }
      ]
      const teachers = await Teachers.aggregate(aggregationPipeline);

      console.log(teachers);
      return NextResponse.json(
        { teachers,streams,subjects},
        { status: 200, statusText: "Teachers fetched successfully" }
      );
      
    }

    if (query === null || filter ==='') {
      const teachers = await Teachers.aggregate(aggregationPipeline);

      console.log(teachers);

      return NextResponse.json(
        { teachers,streams,subjects},
        { status: 200, statusText: "Teachers fetched successfully" }
      );
    }else{
      aggregationPipeline=[
        ...aggregationPipeline,
        {
          $match: {
            $or: [
              { teacherName: { $regex: new RegExp(query, 'i') } }
            ],
          },
        }
      ]
      const teachers = await Teachers.aggregate(aggregationPipeline);

      console.log(teachers);

      return NextResponse.json(
        { teachers, streams,subjects },
        { status: 200, statusText: "Teachers fetched successfully" }
      );
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

