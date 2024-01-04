import Attendence from "@/models/Attendence";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const GET = async(req:Request)=>{
    try {
        const url = new URL(req.url!)
        const searchParams = url.searchParams
        const divId:any = searchParams.get('id')
        console.log(divId);
        const divIdObjId= new mongoose.Schema.Types.ObjectId(divId)
        console.log(divIdObjId);
        const attendence = await Attendence.aggregate([
            {
                $lookup:{
                    from:'studentdatas',
                    localField:'studentId',
                    foreignField:'_id',
                    as:"studentdata"
                }
            },
            {
                $unwind:"$studentdata"
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
                $match:{
                    'studentdata.division': divId
                
                }
            }
           
        ])
        console.log(attendence);
        
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