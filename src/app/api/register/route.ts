import Admin from '@/models/Admin'
import EmailActive from '@/models/EmailActive'
import connect from '@/utils/db'
import bcrypt from 'bcryptjs'
import { NextApiRequest } from 'next'
import {NextResponse} from 'next/server'


export const POST = async(request : NextApiRequest)=>{
try {
    
    const { firstname, lastname, email, phone, password } = await request.json();
    // // console.log(firstname);
    // console.log(firstname);
  
    
    await connect()

    const existing = await Admin.findOne({email})
    if(existing){
        return new NextResponse("Email is already in use",{status:400,statusText:"Email is already in use"})
    }
        const hashedPass = await bcrypt.hash(password,5);

        const newAdmin = new Admin({
            firstname:firstname,
            lastname : lastname,
            email: email,
            phone: phone,
            password: hashedPass,
            type:"admin"
        })
        // const token = await EmailActive({
        //     token:
        // })
        await newAdmin.save()
        return new NextResponse("user registered ",{status:200,statusText:"user registered"})
    


} catch (error:any) {
    console.log("post register error ==>",error.message);
    return new NextResponse(error,{
        status:500,
    })
}
}