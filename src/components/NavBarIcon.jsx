import React from 'react'
import InfoNavBar from './InfoNavBar'

const NavBarIcon = () => {
  return (
    <div className='w-screen bg-primary h-32 flex justify-between items-center'>
      <div className='md:flex md:justify-center md:items-center hover:opacity-70 transition-all duration-500'>
        <img className='md:w-48 md:h-24 w-24 h-12 cursor-pointer' src="https://res.cloudinary.com/dnont3pur/image/upload/v1661301171/Prueba%20Tecnica%20Geek/GitHub_Logo_White_ulk5eg.png" alt="GitHub Icon" />
        <h1 className='text-white font-bold text-2xl md:text-4xl mb-5 ml-5 md:mt-5 cursor-pointer '>Search Users</h1>
      </div>
        <InfoNavBar />
    </div>
  )
}

export default NavBarIcon