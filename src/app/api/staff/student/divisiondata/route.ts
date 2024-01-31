import Divisions from "@/models/Divisions";
import Teachers from "@/models/Teachers";
import mongoose from "mongoose";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export const GET =async (req:Request) => {
    try {
        const url = new URL(req.url!)
        const searchParams = url.searchParams
        console.log(searchParams.get('id'));
        const id = searchParams.get('id');
       
        const divisions = await Divisions.find({className:"plus one",stream:id})
        console.log(divisions,'<----');
        return NextResponse.json({
            divisions
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