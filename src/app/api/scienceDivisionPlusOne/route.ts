import connect from "@/utils/db";
import { NextApiRequest } from "next";
import DivisionList from "@/models/Divisions";
import { NextResponse } from "next/server";
export const GET = async(request:NextApiRequest)=>{
    try {
        
        await connect()
        const plusonedivisions = await DivisionList.aggregate([
            {
                $match: {
                  "className": "plus one",
                  "stream": "science"
                }
              }
        ])
        const plustwoDivisions = await DivisionList.aggregate([
            {
                $match: {
                  "className": "plus two",
                  "stream": "science"
                }
              }
        ])
        return NextResponse.json(
            {
                
                    plusOneDivisions: plusonedivisions,
                    plusTwoDivisions: plustwoDivisions,
                    // Add more properties or arrays as needed
                
                message: "Science divisions fetched successfully",
            },
            { status: 200, statusText: "OK" }
        );

    } catch (error) {
        
    }

}