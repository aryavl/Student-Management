import Teachers from "@/models/Teachers";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export const GET = async(req:Request)=>{

    try {
         const url = new URL(req.url!)
        const searchParams = url.searchParams
        console.log(searchParams.get('id'));
        const id=searchParams.get('id')

        const teacher = await Teachers.find({stream:id,isClassTeacher:false})
        return NextResponse.json(
            { teacher },
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