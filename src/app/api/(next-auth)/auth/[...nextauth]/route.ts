// "use client"
import NextAuth from "next-auth/next";
import GoogleProvider, { GoogleProfile } from "next-auth/providers/google";
import CredentialProvider, { CredentialsConfig } from "next-auth/providers/credentials";
import connect from "@/utils/db";
import Admin from "@/models/Admin";
import bcrypt from "bcryptjs";
import {
  getUserByEmail,
  getUserByEmailForTeacher,
  signInWithOAuth,
  signInWithOAuthForTeacher,
} from "@/components/helpers/signInHelper";
import { NextApiRequest, NextApiResponse } from "next";
import Teachers from "@/models/Teachers";
import Student from "@/models/Student";
import { OAuthConfig } from "next-auth/providers/oauth";
import { Awaitable, RequestInternal } from "next-auth";
// const dispatch = useDispatch()
interface CredentialType{
  email: string;
  password: string;
  role: "admin" | "teacher" | "student"
}
export const authOptions:{
  providers: (OAuthConfig<GoogleProfile> | CredentialsConfig<{}>)[];
  pages: {
      signIn: string;
      signInteacher: string;
      oauth: string;
  };
  callbacks: {
    signIn({ account, profile, email, credentials }: any): Promise<true | st>;
    jwt({ token, user, trigger, session }: any): Promise<any>;
    session({ session, token }: any): Promise<any>;
};
//  authorize: (credentials: Record<never, string> | undefined, req: Pick<RequestInternal, "body" | "method" | "query" | "headers">) => Awaitable<UserType|null|any>
  
} = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    CredentialProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials: CredentialType) {
        console.log("credentialsss", credentials);

        const { email, password, role } = credentials as {
          email: string;
          password: string;
          role: "admin" | "teacher" | "student";
        };
        if (!role || (role !== 'admin' && role !== 'teacher' && role !== 'student'))
          throw new Error("Invalid Role.");
        try {
          await connect();
          if (role === "admin") {
            const admin: AdminDocument | null = await Admin.findOne({ email });
            if (!admin) {
              throw new Error("Incorrect email");
            }

            const passwordMatch = await bcrypt.compare(password, admin.password);

            if (!passwordMatch) {
              throw new Error("Incorrect password");
            }

            return {
              id: admin._id,
              email: admin.email,
              firstname: admin.firstname,
              lastname: admin.lastname,
              name: `${admin.firstname} ${admin.lastname}`,
              role: 'admin'
            };
          }
          if (role === 'teacher') {
            console.log("inside teacher");

            const teacher = await Teachers.findOne({ email });
            console.log(teacher._id.toString());

            if (!teacher) {
              throw new Error("Incorrect email");
            }

            const passwordMatch = await bcrypt.compare(password, teacher.password);

            if (!passwordMatch) {
              throw new Error("Incorrect password");
            }

            return {
              id: teacher._id,
              email: teacher.email,
              teacherName: teacher.teacherName,
              isVerified: teacher.isVerified,
              isClassTeacher: teacher.isClassTeacher,
              role: "teacher"
            };
          }
          if (role === 'student') {
            console.log("inside student");

            const student = await Student.findOne({ email });
            console.log(student._id.toString());

            if (!student) {
              throw new Error("Incorrect email");
            }

            const passwordMatch = await bcrypt.compare(password, student.password);

            if (!passwordMatch) {
              throw new Error("Incorrect password");
            }

            return {
              id: student._id,
              email: student.email,
              studentName: student.studentName,
              isVerified: student.isVerified,
              role: "teacher"
            };
          }
        } catch (error: any) {
          console.error("Error in credential auth ==>", error.message);
        }
      },
    }),
  ],
  pages: {
    signIn: "/admin/login",
    signInteacher: "/teacher/login",
    oauth: "/api/auth/callback/google",
  },
  callbacks: {
    async signIn({ account, profile, email, credentials }: any) {
      console.log({ account, profile });
      if (account.type === "oauth") {
        console.log("google login");

        return signInWithOAuth({ account, profile }).then(() => {
          return { url: "/dashboard" };
        });
      }

      return true;
    },
    async jwt({ token, user: USER, trigger, session }: any) {
      console.log({ token }, session, USER);

      console.log({ token }, session);
      const user = await getUserByEmail({ email: token.email });
      // console.log({user});
      token.user = user;
      token.user = {
        ...user,
        type: user.type
      };
      return token;
    },
    async session({ session, token }: any) {
      console.log(session, token);
      session.user = token.user;
      return session;

    },
  },
  // authorize: function (credentials: Record<never, string> | undefined, req: Pick<RequestInternal, "body" | "method" | "query" | "headers">) {
  //   throw new Error("Function not implemented.");
  // }
};


const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };


