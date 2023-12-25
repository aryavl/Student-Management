import Divisions from "@/models/Divisions";
import Stream from "@/models/Stream";
import mongoose, { mongo } from "mongoose";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export const GET =async (req:NextApiRequest) => {
    try {
        const url = new URL(req.url!)
        const searchParams = url.searchParams
        console.log(searchParams.get('id'));
        const id=searchParams.get('id')
      
        if (id !== null) {
          const stream = await Stream.findOne({_id:id})
            const plusonedivisions = await Divisions.aggregate([
                {
                    $match: {
                        "className": "plus one",
                        "stream": new mongoose.Types.ObjectId(id)
                    }
                },
                {
                    $lookup: {
                        from: "streams",  
                        localField: "stream",
                        foreignField: "_id",
                        as: "streamdata"
                    }
                },
                {
                    $lookup:{
                        from:'teachers',
                        localField:'classTeacher',
                        foreignField:'_id',
                        as:'teacherdata'
                    }
                },
                {
                    $unwind: '$streamdata'
                  },
                  {
                    $unwind: '$teacherdata'
                  },
            ])
            const plustwodivisions = await Divisions.aggregate([
                {
                    $match: {
                        "className": "plus two",
                        "stream": new mongoose.Types.ObjectId(id)
                    }
                },
                {
                    $lookup: {
                        from: "streams",  
                        localField: "stream",
                        foreignField: "_id",
                        as: "streamdata"
                    }
                },
                {
                    $lookup:{
                        from:'teachers',
                        localField:'classTeacher',
                        foreignField:'_id',
                        as:'teacherdata'
                    }
                },
                {
                    $unwind: '$streamdata'
                  },
                  {
                    $unwind: '$teacherdata'
                  },
            ])
           
            console.log(plusonedivisions);
// student data coming soon
            return NextResponse.json({
                plusonedivisions,
                plustwodivisions,
                stream
            }, { status: 200, statusText: 'OK' });
        } else {
            throw new Error("Invalid or missing 'id' parameter");
        }
        
    } catch (error:any) {
        return NextResponse.json(
            { message: "error" },
            {
              status: 500,
              statusText: error.message,
            }
          ); 
    }
}