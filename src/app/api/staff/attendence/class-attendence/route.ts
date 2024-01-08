import Attendence from "@/models/Attendence";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const GET = async(req:Request)=>{
    try {
        const url = new URL(req.url!)
        const searchParams = url.searchParams
        const divisionId:any = searchParams.get('divisionId')
        const streamId:any = searchParams.get('streamId')
        const date:any = searchParams.get('date')
        console.log(divisionId,streamId,date);
        const divIdObjId= new mongoose.Types.ObjectId(divisionId)
        const streamObjId= new mongoose.Types.ObjectId(streamId)
        // console.log(divIdObjId);
        // const att= await Attendence.find({divisionId:divIdObjId,streamId:streamObjId})
        // console.log(att);
        
        const attendence = await Attendence.aggregate([
            {
                $match: {
                    'divisionId': divIdObjId,
                    'streamId': streamObjId
                }
            },
            {
                $lookup: {
                    from: 'studentdatas',
                    localField: 'studentId',
                    foreignField: '_id',
                    as: 'studentdata'
                }
            },
            {
                $unwind: "$studentdata"
            },
            {
                $lookup: {
                    from: "divisions",
                    localField: "studentdata.division",
                    foreignField: "_id",
                    as: "divisiondata"
                }
            },
            {
                $unwind: '$divisiondata'
            },
            {
                $group: {
                    _id: {
                        date: '$date',
                        studentName: '$studentdata.studentName'
                    },
                    attendance: { $push: '$$ROOT' }
                }
            },
            {
                $sort: {
                    '_id.date': 1 // 1 for ascending order, -1 for descending order
                }
            },
            {
                $project: {
                    _id: 0,
                    date: '$_id.date',
                    studentName: '$_id.studentName',
                    attendance: 1
                }
            }
        ]);
        
        console.log(attendence);
        
        // console.log(attendence);
        return NextResponse.json({
            attendence
        }, { status: 200, statusText: 'OK' });
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