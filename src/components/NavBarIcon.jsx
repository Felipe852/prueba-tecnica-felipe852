
import React from 'react'
import InfoNavBar from './InfoNavBar'


const NavBarIcon = ({loquequiera}) => {
  
  
  return (
    <div className='w-screen bg-primary h-32 flex justify-between items-center mx-auto'>
      <div className='md:flex md:justify-center md:items-center hover:opacity-70 transition-all duration-500 w-1/2'>
        <img className='cover mt-5 ml-5 md:mt-0 md:ml-0 filtereamesta md:w-32 md:h-24 w-20 h-12 cursor-pointer' src="https://res.cloudinary.com/dnont3pur/image/upload/v1661478220/Prueba%20Tecnica%20Geek/cloud_stk2ui.png" alt="GitHub Icon" />
        <h1 className='text-white font-bold text-2xl md:text-4xl mb-5 ml-5 md:mt-5 cursor-pointer '>Hunter Talent</h1>
      </div>
      {
        loquequiera && <InfoNavBar />
      }
    </div>
  )
}

export default NavBarIcon