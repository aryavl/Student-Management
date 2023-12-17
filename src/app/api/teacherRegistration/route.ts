import Admin from '@/models/Admin'
import EmailActive from '@/models/EmailActive'
import Teacher from '@/models/Teacher'
import connect from '@/utils/db'
import bcrypt from 'bcryptjs'
import { NextApiRequest } from 'next'
import {NextResponse} from 'next/server'


export const POST = async(request : NextApiRequest)=>{
try {
    
    const { teacherName, email, stream, subject } = await request.json();
    await connect()

    const existing = await Teacher.findOne({email})
    if(existing){
        return NextResponse.json({message:"Teacher is already in Registered"},{status:400,statusText:"Teacher is already in Registered"})
    }
        

        const newTeacher = new Teacher({
            teacherName:teacherName,
            email: email,
            stream:stream,
            subject:subject,
            type:"teacher"
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

export const GET = async (request: NextApiRequest) => {
    try {
      await connect();
      const teachers = await Teacher.find();
      return NextResponse.json(
        { teachers },
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