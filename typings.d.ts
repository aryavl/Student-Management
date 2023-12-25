type ProviderProps = {
    children:React.ReactNode;
}
type RequestType = string | number

type AdminDocument = {
    _id: any; // Change this to the actual type of your _id field
    email: string;
    password: string;
    firstname: string;
    lastname: string;
    active:boolean
   
  };
  type EmailVerifyDocument = {
    _id:any;
    token:string,
    admin:string[]
  }

  interface UserType {
    firstname?: string | null | undefined,
    email?:string | null | undefined,
    type?:string | null | undefined,
    image?: string | null | undefined,
    provider?: string | null | undefined,
  }

  type HandleSubmitType = any 

interface Teacher{
  _id:string,
  teacherName:string,
  email:string,
  stream:string,
  subject:string,
  type:string,
  isVerified:boolean,
  otp:number,
  isClassTeacher:boolean
}

interface MapItem{
  _id: React.Key | null | undefined; image: any;
   teacherName: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.PromiseLikeOfReactNode | null | undefined; 
   subject: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; 
   stream: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; 
   streamdata:{
    _id: string; 
    streamName: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.PromiseLikeOfReactNode | null | undefined; 
   }
   subjectdata:{
    _id:string,
  stream:string,
  subjectName:string,
  isList:boolean
   }
}
interface MapStream{
  _id: string; 
  streamName: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.PromiseLikeOfReactNode | null | undefined; 
}


interface ParamsType {
  params:{
    id:string
  } 
}
 

interface SingleStreamContentProps {
  id: string; 
}
interface DivisionMap{
  _id:string,
  className:string,
  stream:string,
  division:string,
  isList:boolean,
  students:string[],
  classTeacher:string,
  streamdata:{
    _id:string,
    streamName:string,
  },
  teacherdata:{
    _id:string,
    teacherName:string,
  email:string,
  stream:string,
  subject:string,
  type:string,
  isVerified:boolean,
  otp:number,
  isClassTeacher:boolean
  }
}
interface SubjectMap{
  _id:string,
  stream:string,
  subjectName:string,
  isList:boolean
}