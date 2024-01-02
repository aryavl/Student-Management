import Stream from "@/models/Stream";
import Subjects from "@/models/Subjects";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export const POST =async (req:NextApiRequest) => {
    try {
        const {stream, streamId,subject} = await req.json()
        const existing = await Subjects.findOne({subjectName: { $regex: new RegExp(`^${subject}$`, 'i') } ,stream:streamId})
        console.log(existing);
        
        if(existing){
            return NextResponse.json({message:"Subject already exists"},{status:400,statusText:"Subject already registered"})
        }else{
            const newSubject = new Subjects({
              stream:streamId,
              subjectName:subject
            })
            
            await newSubject.save()
            return NextResponse.json({message:"Subject registered"},{status:200,statusText:"Subject registered"})
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

export const GET =async (req:NextApiRequest) => {
try {
    const url = new URL(req.url!)
    const searchParams = url.searchParams
    console.log(searchParams.get('id'));
    const id=searchParams.get('id')
  
    const stream = await Stream.findOne({_id:id})

    return NextResponse.json(
        { stream},
        { status: 200, statusText: "Stream fetched successfully" }
      );    
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