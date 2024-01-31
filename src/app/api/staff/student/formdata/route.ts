import Divisions from "@/models/Divisions";
import Student from "@/models/Student";
import Teachers from "@/models/Teachers";
import mongoose from "mongoose";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export const GET =async (req:Request) => {
    try {
        const url = new URL(req.url!)
        const searchParams = url.searchParams
        // console.log(searchParams.get('id'));
        // console.log(searchParams.get("page"));
        const page: number = parseInt(searchParams.get("page")!) || 1;
    const pageSize: number = 10;
 
    const skip = (page - 1) * pageSize;
        const id = searchParams.get('id');
        const t= await Teachers.findOne({_id:id})
        console.log(t,"teachr");
        
        const teacher = await Teachers.aggregate([
            {
                $match: {
                    _id: new mongoose.Types.ObjectId(id!)
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
                    $lookup: {
                        from: "subjects",  
                        localField: "subject",
                        foreignField: "_id",
                        as: "subjectdata"
                    }
                
            },
            {
                $unwind: '$streamdata'
              },
              {
                $unwind: '$subjectdata'
              },

           
        ]);
        const division =await Divisions.aggregate([
            {
                $match: {
                    
                    "classTeacher": new mongoose.Types.ObjectId(id!)
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
                    from:'teacherslists',
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
        const stu = await Student.find()
        const students= await Student.aggregate([
            {
                $lookup: {
                    from: "streams",  
                    localField: "stream",
                    foreignField: "_id",
                    as: "streamdata"
                }
            },
            {
                $lookup: {
                    from: "divisions",  
                    localField: "division",
                    foreignField: "_id",
                    as: "divisiondata"
                }
            },
            {
                $unwind: '$streamdata'
              },
              {
                $unwind: '$divisiondata'
              },
              {
                $lookup:{
                    from:'teacherslists',
                    localField:"divisiondata.classTeacher",
                    foreignField:'_id',
                    as:'teacherData'
                }
              },{
                $unwind:'$teacherData'
              },
              {
                $skip: skip,
              },
              {
                $limit: pageSize,
              },
        ])
        
        console.log(division,'<---- stuu');
        return NextResponse.json({
            teacher,division,students
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