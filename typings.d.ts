type ProviderProps = {
  children: React.ReactNode;
};
type RequestType = string | number;

type AdminDocument = {
  _id: any; 
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  active: boolean;
  phone:number,
  password:string,
  type:string,
  image:string,
  provider:string,

};
type EmailVerifyDocument = {
  _id: any;
  token: string;
  admin: string[];
};

interface UserType {
  _id: any; 
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  active: boolean;
  phone:number,
  password:string,
  type:string,
  image:string,
  provider:string,

}

type HandleSubmitType = any;

interface Teacher {
  _id: string;
  teacherName: string;
  email: string;
  stream: string;
  subject: string;
  type: string;
  isVerified: boolean;
  otp: number;
  isClassTeacher: boolean;
  password: string;
}

interface MapItem {
  _id: React.Key | null | undefined;
  image: any;
  type:string,
  teacherName:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.PromiseLikeOfReactNode
    | null
    | undefined;
  subject:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | React.PromiseLikeOfReactNode
    | null
    | undefined;
  stream:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | React.PromiseLikeOfReactNode
    | null
    | undefined;

  streamdata: {
    _id: string;
    streamName:
      | string
      | number
      | boolean
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | Iterable<React.ReactNode>
      | React.PromiseLikeOfReactNode
      | null
      | undefined;
  };
  subjectdata: {
    _id: string;
    stream: string;
    subjectName: string;
    isList: boolean;
  };
}
interface MapStream {
  _id: string;
  streamName:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.PromiseLikeOfReactNode
    | null
    | undefined;
    
}

interface ParamsType {
  params: {
    id: string;
  };
}

interface SingleStreamContentProps {
  id: string;
  totalStudents:number,
  setIsStudentAdded: (value: boolean) => void;
}
interface SingleClassDetailProps{
  classId:string
}
interface DivisionMap {
  _id: string;
  className: string;
  stream: string;
  division: string;
  isList: boolean;
  students: string[];
  classTeacher: string;
  streamdata: {
    _id: string;
    streamName: string;
  };
  teacherdata: {
    _id: string;
    teacherName: string;
    email: string;
    stream: string;
    subject: string;
    type: string;
    isVerified: boolean;
    otp: number;
    isClassTeacher: boolean;
    // password:string
  };
}
interface SubjectMap {
  _id: string;
  stream: string;
  subjectName: string;
  isList: boolean;
}

interface StudentMap{
  _id:string  ,
  studentName:string,
  email:string, 
  phone:number,
  father:string,
  mother:string,
  guardiam:string,
  dateOfJoing:Date,
  stream:string,
  division:string,
  type:string,
  image:string,
  isVerified:boolean,
  otp:number,
  password:string,
  admissionNumber:number,
  streamdata:{
    _id: string;
    streamName: string;
  },
  divisiondata:{
    _id: string;
  className: string;
  stream: string;
  division: string;
  isList: boolean;
  students: string[];
  classTeacher: string;
  },
  teacherdata:{
    _id: string;
    teacherName: string;
    email: string;
    stream: string;
    subject: string;
    type: string;
    isVerified: boolean;
    otp: number;
    isClassTeacher: boolean;
  }
}

interface GetAttendenceDAtaProp{
  divisionId:string,
  streamIds:string
}
interface DivisionProps{
  _id: string;
  className: string;
  stream: string;
  division: string;
  isList: boolean;
  students: string[];
  classTeacher: string;
}
interface TeacherProps{
  _id: string;
  teacherName: string;
  email: string;
  stream: string;
  subject: string;
  type: string;
  isVerified: boolean;
  otp: number;
  isClassTeacher: boolean;
}
interface SubjectProps{
 
    _id: string;
    stream: string;
    subjectName: string;
    isList: boolean;
  
}
interface StudentProps{
  _id:string  ,
  studentName:string,
  email:string, 
  phone:number,
  father:string,
  mother:string,
  guardiam:string,
  dateOfJoing:Date,
  stream:string,
  division:string,
  type:string,
  image:string,
  isVerified:boolean,
  otp:number,
  password:string,
  admissionNumber:number,
}
interface AttendenceProps{
  studentId:[mongoose.Schema.Types.ObjectId];
 date:Date
  streamId: mongoose.Schema.Types.ObjectId;
  divisionId: mongoose.Schema.Types.ObjectId;
  isPresent: boolean;
}
interface AttendenceMap{
  _id:mongoose.Schema.Types.ObjectId,
  studentId: [mongoose.Schema.Types.ObjectId];
  date: Date;
  streamId: mongoose.Schema.Types.ObjectId;
  divisionId: mongoose.Schema.Types.ObjectId;
  isPresent: boolean;
  studentdata:StudentProps,
  divisiondata:DivisionProps
}


type AttendenceData = {
 
  studentId: string;
  date: Date;
  streamId: string;
  divisionId: string;
  isPresent:boolean
};
interface UserType {

    _id?: string;
    stream:string

}

interface SessionType {
 
  user?: UserType;

}

interface StudentData {
  studentId: string;
  streamId: string;
  isPresent: boolean;
  divisionId: string;
}
