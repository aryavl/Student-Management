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


 