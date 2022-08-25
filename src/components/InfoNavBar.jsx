import { getAuth } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context/ContextProvider';

const InfoNavBar = () => {
  const { img, name } = useContext(Context);
  const [condiImg, setCondiImg] = useState()
  const auth = getAuth();
  
  useEffect(()=>{
    if(name[1] === "undefined"){
      setCondiImg("https://res.cloudinary.com/dnont3pur/image/upload/v1661301181/Prueba%20Tecnica%20Geek/Octocat_ihqzqf.jpg")
    }else{
      setCondiImg(img)
    }
  },[])

  const handleclicker = () => {
    console.log(condiImg);
  }
  return (
    <div className='flex justify-center items-center h-full text-center text-white'>
        <div onClick={() => {
            auth.signOut();
          }} className='pr-5 cursor-pointer hover:text-lg transition-all duration-500'>
            <p className='font-semibold'>Cerrar Sesion</p>
        </div>
        <div className='h-28 opacity-20 w-px bg-black'></div>
        <div className='md:flex gap-5 justify-end items-center px-5'>
          <button onClick={handleclicker}>aqui</button>
            <p className='mb-5 md:mb-0 cursor-default'>{name[1]}</p>
            <img className='md:w-20 md:h-20 w-10 h-10 rounded-full cursor-pointer' src={condiImg[1]} />
        </div>
    </div>
  )
}

export default InfoNavBar