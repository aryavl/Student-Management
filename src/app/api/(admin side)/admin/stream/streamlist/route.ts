import Stream from "@/models/Stream";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export const GET = async (Request: NextApiRequest) => {
  try {
    const stream = await Stream.find();
    return NextResponse.json(
      { stream },
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
