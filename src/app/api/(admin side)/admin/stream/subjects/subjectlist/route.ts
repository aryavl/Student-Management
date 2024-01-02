import Stream from "@/models/Stream";
import Subjects from "@/models/Subjects";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export const GET = async (req: NextApiRequest) => {
  try {
    const url = new URL(req.url!);
    const searchParams = url.searchParams;
    // console.log(searchParams.get('id'));
    const id = searchParams.get("id");
    const stream = await Stream.findOne({ _id: id });
    const subjects = await Subjects.find({ stream: id, isList: false });
    // console.log(subjects);

    return NextResponse.json(
      { subjects, stream },
      { status: 200, statusText: "Stream fetched successfully" }
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

export const PATCH =async (req:NextApiRequest) => {
    try {
        const url = new URL(req.url!)
        const searchParams = url.searchParams
        console.log(searchParams.get('id'));
        const id=searchParams.get('id')
        const update = await Subjects.findOneAndUpdate({_id:id},{isList:true})
        console.log(update);
        
        if(update){
            return NextResponse.json({message:"Subject listed successfully"},{status:200,statusText:"Subject listed successfully"})
        }else{
            return NextResponse.json({message:"Subject listed failed"},{status:404,statusText:"Subject listed failed"})
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