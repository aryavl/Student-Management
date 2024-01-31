import Admin from '@/models/Admin'
import EmailActive from '@/models/EmailActive'
import Subjects from '@/models/Subjects'
import Teacher from '@/models/Teachers'
import connect from '@/utils/db'
import bcrypt from 'bcryptjs'
import { NextApiRequest } from 'next'
import {NextResponse} from 'next/server'


export const POST = async(request : Request)=>{
try {
    
    const { teacherName, email, stream, subject } = await request.json();
   console.log(teacherName,email,stream,subject);
   
    
    await connect()
// console.log(teacherName,email,stream);

    const existing = await Teacher.findOne({email})
    if(existing){
        return NextResponse.json({message:"Teacher is already in Registered"},{status:400,statusText:"Teacher is already in Registered"})
    }
        

        const newTeacher = new Teacher({
            teacherName:teacherName,
            email: email,
            stream:stream,
            subject:subject,
            type:"teacher",
            // isClassTeacher:false
        })

        await newTeacher.save()
        return  NextResponse.json({message:"Teacher registered "},{status:200,statusText:"Teacher registered"})
    


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


export const GET = async(req:Request)=>{
    try {
        // console.log("get");
        
        const url = new URL(req.url!)
        const searchParams = url.searchParams
        console.log(searchParams.get('id'));
        const id=searchParams.get('id') 
        const subject = await Subjects.find({stream:id,isList:false})
        return NextResponse.json(
            { subject },
            { status: 200, statusText: "Teachers fetched successfully" }
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

