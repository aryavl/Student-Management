import Admin from "@/models/Admin";

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

  
export async function getUserByEmail({
    email
}:{
    email:any
}){
    const user = await Admin.findOne({email}).select('-password')
    if(!user) throw new Error('Email doesnot exist!')
console.log(user,"getUserByEmail");

    return {
      ...user._doc,
      _id:user._id.toString()
    }
}
  