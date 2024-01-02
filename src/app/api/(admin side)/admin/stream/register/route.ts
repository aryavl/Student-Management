import Stream from "@/models/Stream";
import { NextApiRequest } from "next"
import { NextResponse } from "next/server";

export const POST =async (Request:NextApiRequest) => {
    try {
        const {streamName} = await Request.json()
        const existing = await Stream.findOne({ streamName: { $regex: new RegExp(`^${streamName}$`, 'i') } });
        if(existing ){
          
          return NextResponse.json({message:"Stream already exists"},{status:400,statusText:"Stream already registered"})
        }else{
          const newStream = new Stream({
            streamName
          })
          
          await newStream.save()
          return NextResponse.json({message:"Stream registered"},{status:200,statusText:"Stream registered"})
        }
        
    } catch (error:any) {
      console.log(error);
      
        return NextResponse.json(
            { message: "error" },
            {
              status: 500,
              statusText: error.message,
            }
          );
    }
    
}