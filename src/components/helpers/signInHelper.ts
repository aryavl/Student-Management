import Admin from "@/models/Admin";
import Student from "@/models/Student";
import Teachers from "@/models/Teachers";

export async function signInWithOAuth({
    account,
    profile,
  }: {
    account: any;
    profile: any;
  }) {
    console.log("profile",profile,account);
    
    const user = await Admin.findOne({ email: profile.email });
    if (user) {
      return true;
    }
    const newUser = new Admin({
      firstname: profile.name,
      email: profile.email,
      image: profile.picture,
      provider: account.provider,
      type:"admin"
    });
    await newUser.save();
    console.log({ newUser });
    return true;
  }
export async function signInWithOAuthForTeacher({
    account,
    profile,
  }: {
    account: any;
    profile: any;
  }) {
    console.log("profile",profile,account);
    
    const user = await Teachers.findOne({ email: profile.email });
    if (user) {
      return true;
    }
    const newUser = new Teachers({
      teacherName: profile.name,
      email: profile.email,
      type:"teacher"
    });
    await newUser.save();
    console.log({ newUser });
    return true;
  }

  
export async function getUserByEmail({
    email
}:{
    email:any
}){
    const user = await Admin.findOne({email}).select('-password')
    if(!user) {
      const teacher = await Teachers.findOne({email}).select('-password')
      if(!teacher){
        // student logic
      const student = await Student.findOne({email}).select('-password')
      return {
        ...student._doc,
        _id:student._id.toString()
      }
        
      }else{
        console.log(teacher,"getUserByEmail");

      return {
        ...teacher._doc,
        _id:teacher._id.toString()
      }
      }
    }else{
      console.log(user,"getUserByEmail");

      return {
        ...user._doc,
        _id:user._id.toString()
      }
  }

}
  
export async function getUserByEmailForTeacher({
    email
}:{
    email:any
}){
    const teacher = await Teachers.findOne({email}).select('-password')
    if(!teacher) throw new Error('Email doesnot exist!')
console.log(teacher,"getUserByEmail");

    return {
      ...teacher._doc,
      _id:teacher._id.toString()
    }
}
  