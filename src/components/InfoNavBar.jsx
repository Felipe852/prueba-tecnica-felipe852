import { getAuth } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";

const InfoNavBar = () => {
  const auth = getAuth();
  const { photoURL, displayName} = useSelector((state) => state.login);
  const [img, setImg] = useState()

  useEffect(()=>{
    if(!photoURL){
      setImg("https://res.cloudinary.com/dnont3pur/image/upload/v1661301181/Prueba%20Tecnica%20Geek/Octocat_ihqzqf.jpg")
    }else{
      setImg(photoURL)
    }
  },[photoURL])

  return (
    <div className='flex justify-center items-center h-full text-center text-white'>
        <div onClick={() => {
            auth.signOut();
          }} className='pr-5 cursor-pointer hover:text-lg transition-all duration-500'>
            <p className='font-semibold text-sm md:text-lg'>Cerrar Sesion</p>
        </div>
        <div className='h-28 opacity-20 w-px bg-black'></div>
        <div className=' h-full flex gap-5 justify-center items-center px-5'>
            <p className='cursor-default text-sm md:text-lg'>{displayName}</p>
            <img className='md:w-20 md:h-20 w-12 h-12 rounded-full cursor-pointer' src={img} />
        </div>
    </div>
  )
}

export default InfoNavBar