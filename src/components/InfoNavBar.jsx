import React from 'react'

const InfoNavBar = () => {
  return (
    <div className='flex justify-center items-center text-white'>
        <div className='mr-5 cursor-pointer hover:text-lg transition-all duration-500'>
            <p className='font-semibold'>Cerrar Sesion</p>
        </div>
        <div className='h-28 opacity-20 w-px bg-black'></div>
        <div className='flex justify-center items-center gap-5 mx-5'>
            <p>Nombredelhpqueselogea</p>
            <img className='w-20 h-20 rounded-full' src="https://res.cloudinary.com/dnont3pur/image/upload/v1661301181/Prueba%20Tecnica%20Geek/Octocat_ihqzqf.jpg" alt="profile img" />
        </div>
    </div>
  )
}

export default InfoNavBar