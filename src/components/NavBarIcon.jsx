import React from 'react'
import InfoNavBar from './InfoNavBar'

const NavBarIcon = () => {
  return (
    <div className='w-screen bg-primary h-32 flex justify-between items-center'>
        <img className='w-42 h-24 cursor-pointer hover:opacity-70 transition-all duration-500' src="https://res.cloudinary.com/dnont3pur/image/upload/v1661301171/Prueba%20Tecnica%20Geek/GitHub_Logo_White_ulk5eg.png" alt="GitHub Icon" />
        <InfoNavBar />
    </div>
  )
}

export default NavBarIcon