import { getAuth } from 'firebase/auth';
import React from 'react'

const InfoNavBar = () => {
  const auth = getAuth();
  return (
    <div className='flex justify-center items-center h-full text-center text-white'>
        <div onClick={() => {
            auth.signOut();
          }} className='pr-5 cursor-pointer hover:text-lg transition-all duration-500'>
            <p className='font-semibold'>Cerrar Sesion</p>
        </div>
        <div className='h-28 opacity-20 w-px bg-black'></div>
        <div className='md:flex gap-5 justify-end items-center px-5'>
            <p className='mb-5 md:mb-0 cursor-default'>eltetranutraqueselogea</p>
            <img className='md:w-20 md:h-20 w-10 h-10 rounded-full cursor-pointer' src="https://res.cloudinary.com/dnont3pur/image/upload/v1661301181/Prueba%20Tecnica%20Geek/Octocat_ihqzqf.jpg" alt="profile img" />
        </div>
    </div>
  )
}

export default InfoNavBar