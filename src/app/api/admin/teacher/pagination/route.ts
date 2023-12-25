import Teachers from "@/models/Teachers";
import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export const  GET = async (req: NextApiRequest) => {
  console.log("hello from sever");
  try {
    // res.status(200).json({ name: "John Doe" });
     
    const url = new URL(req.url!);
    const searchParams = url.searchParams;
    console.log(searchParams.get('page'));

    const page: number = parseInt(searchParams.get('page')!) || 1;
    const pageSize: number = 10

    const skip = (page - 1) * pageSize;
    const teachers = await Teachers.aggregate([
        {
            $lookup: {
                from: "streams",  
                localField: "stream",
                foreignField: "_id",
                as: "streamdata"
            }
        },
        {
            $lookup:{
                from:"subjects",
                localField:'subject',
                foreignField:'_id',
                as:'subjectdata'
            }
        },
        {
            $unwind:'$subjectdata'
        },
        {
            $unwind:'$streamdata'
        },
        {
          $skip: skip
        },
        {
          $limit: pageSize
        }
      ]);
      
    console.log(teachers);
      
    return NextResponse.json(
      { teachers },
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
  
};




// type QueryParams = {
//   key1: string;
//   key2: string;
// };

// export const GET= async (req: NextApiRequest, res: NextApiResponse) => {
//   if (req.method === 'GET') {
//     try {
//         console.log("here");

//       // const { key1, key2 } = req.query;
//             // console.log(key1);

//             console.log(req.query);

//       res.json({ message:"success" });

//     } catch (error: any) {
//       console.log("error" ,error);

//       res.status(500).json({ message: error.message });
//     }
//   } else {
//     res.status(405).json({ message: 'Invalid method' });
//   }
// };
