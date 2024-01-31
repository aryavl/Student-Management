import { useSession } from 'next-auth/react';
import React from 'react';

const ProfileContent = () => {
  const { data: session } = useSession();

  // Check if session exists and user data is available
  if (!session || !session.user) {
    return <div>Loading...</div>;
  }

  const {
    studentName,
    email,
    phone,
    father,
    mother,
    type,
    createdAt,
    updatedAt,
    otp,
  } = session.user;

  return (
    <div className='flex justify-center items-center'>
    <div className="bg-white mt-20 text-center text-orange-800  p-6 rounded-md shadow-md w-[50%]">
      <h2 className="text-2xl font-semibold mb-4">Profile </h2>
      <ul className="list-none pl-4">
        <li className="mb-2">Name: {studentName}</li>
        <li className="mb-2">Email: {email}</li>
        <li className="mb-2">Phone: {phone}</li>
        <li className="mb-2">Father&apos;s Name: {father}</li>
        <li className="mb-2">Mother&apos;s Name: {mother}</li>
        {/* Add more details as needed */}
      </ul>
    </div>
    </div>
  );
};

export default ProfileContent;
