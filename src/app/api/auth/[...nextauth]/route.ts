// "use client"
import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
import CredentialProvider from "next-auth/providers/credentials"
import connect from '@/utils/db';
import Admin from '@/models/Admin';
import bcrypt from 'bcryptjs'
import { getUserByEmail, signInWithOAuth } from '@/components/helpers/signInHelper';
import { NextApiRequest, NextApiResponse } from 'next';
// const dispatch = useDispatch() 
export const authOptions = {
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID || '',
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
        redirect: '/admin/dashboard', 
      }), 
      CredentialProvider({
                name:"credentials",
                credentials:{},
               async authorize(credentials: any){
                    console.log("credentialsss",credentials);
                    
                    const {email, password} = credentials as {
                        email:string,
                        password:string
                    }
                    try {
                        await connect()
                        const admin: AdminDocument | null = await Admin.findOne({ email });

                        // const admin = await Admin.findOne({email})
                        // console.log("found amdin", admin);
                        
                        if(!admin){
                            
                            throw new Error('Admin not found');
                           
                        }
                      
                        const passwordMatch = await bcrypt.compare(password,admin.password)
                      
                        
                        if(!passwordMatch){
                            
                            throw new Error('Incorrect password');
                        }
                       
                        return {
                            id: admin._id,
                            email: admin.email,
                            firstname: admin.firstname,
                            lastname: admin.lastname,
                            name: `${admin.firstname} ${admin.lastname}`,
                          };
                    } catch (error:any) {
                        console.error("Error in credential auth ==>", error.message);
                       
                    }
                }
              })
    ],
    pages: {
       signIn: '/admin/login',
       signInStudent: '/student/login',
       signInteacher: '/teacher/login',
       oauth: '/api/auth/callback/google'
    },
    callbacks:{
        async signIn({ account, profile, email, credentials }:any) {
            console.log({ account, profile });
            if (account.type === 'oauth') {
                console.log("google login");
                
                return signInWithOAuth({ account, profile }).then(() => {
                  return { url: '/admin/dashboard' }; // Customize this URL to your desired landing page
                });
            }

            return true;
          },
          async jwt({ token, trigger, session }:any) {
            console.log({token},session);
            const user = await getUserByEmail({email:token.email})
            // console.log({user});
            token.user = user
          return token;
    
        },
        async session({ session, token }:any) {
            console.log(session,token);
            session.user = token.user
            return session;
          },
    }
}
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
