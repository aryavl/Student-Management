"use client"
import React from 'react'
import AddSubjectModal from './AddSubjectModal'
import useSWR, { mutate } from 'swr';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClose
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from 'next/navigation';

const SingleStreamSubjects : React.FC<SingleStreamContentProps> = ({ id }) => {
    const router = useRouter()
    console.log(id);
    const { data, error } = useSWR(
      `http://localhost:3000/api/admin/stream/subjects/subjectlist?id=${id}`,
      async (url) => {
        const response = await fetch(url);
        const result = await response.json();
        return result;
      }
    );
    console.log(data);
    const subjects = data?.subjects
    const stream= data?.stream
    const handleDelete=async(id:string)=>{
        try {
           const response = await fetch(`http://localhost:3000/api/admin/stream/subjects/subjectlist?id=${id}`,{
            method:'PATCH',
            headers: {
                'Content-Type': 'application/json',
              },
           }) 
           if(response.ok){
            mutate(`http://localhost:3000/api/admin/stream/subjects/subjectlist?id=${id}`);
           }else{
            console.error('Failed to delete the subject');
           }
        } catch (error:any) {
            console.log("error while deleting");
            
        }
    }
    
  return (
    <>
        <div className="flex flex-col justify-center items-center  sm:px-20 md:px-28 py-4  ">
        <h1 className="text-center font-bold md:pt-1 md:pb-6 text-2xl">
        {stream && 
            stream.streamName
            }
        </h1>
        <h3 className="text-center font-bold   text-lg mb-5">
            Subjects
           
        </h3>
        <AddSubjectModal  id={id}/>
      </div>
      <div className="flex flex-col mx-2 md:mx-20 py-2  px-10 rounded-sm  justify-center items-center ">
        <div className="grid grid-cols-2 sm:grid-cols-4 items-center  py-2 text-white font-bold  gap-5 px-10 rounded-sm ">

         {
         subjects && 
         subjects.map((item:SubjectMap)=>(
            <button key={item._id} className='px-4 py-2 border rounded-xl flex justify-between items-center  cursor-default'>
                {item.subjectName}
                <FontAwesomeIcon icon={faClose} className='ml-2 cursor-pointer' onClick={()=>handleDelete(item._id)}/>
            </button>
         ))}
        </div> 
        </div>

    </>
  )
}

export default SingleStreamSubjects