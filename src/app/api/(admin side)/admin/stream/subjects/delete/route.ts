import Subjects from "@/models/Subjects";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export const GET =async (req:NextApiRequest) => {
    try {
        const url = new URL(req.url!)
        const searchParams = url.searchParams
        console.log(searchParams.get('id'));
        const id=searchParams.get('id')
        const subject = await Subjects.findOneAndUpdate({_id:id},{isList:true})
        return NextResponse.json(
            { message:'Subject deleted successfully'},
            { status: 200, statusText: "Subject deleted successfully" }
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