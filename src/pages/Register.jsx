import React from 'react'
import Button from '../components/Button'

const Register = () => {
  return (
    <div className='container relative flex flex-col items-center mt-24 h-screen max-w-4xl mx-auto'>
        <h1 className='text-xl md:text-3xl'>Register</h1>
        <form
        className="flex flex-col items-center justify-center w-full max-w-md px-5 mt-6"
      >
        <h1 className="text-2xl text-white md:text-3xl">Sign Un</h1>
        <input
          name="name"
          type="text"
          placeholder="Full name"
          className="w-3/4 p-2 mt-4 text-center text-white transition-all duration-500 rounded-full outline-none bg-secondary focus:w-full"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-3/4 p-2 mt-4 text-center text-white transition-all duration-500 rounded-full outline-none bg-secondary focus:w-full"
        />
        <input
          name="phoneNumber"
          type="number"
          placeholder="Phone number"
          className="w-3/4 p-2 mt-4 text-center text-white transition-all duration-500 rounded-full outline-none bg-secondary focus:w-full"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-3/4 p-2 mt-4 text-center text-white transition-all duration-500 rounded-full outline-none bg-secondary focus:w-full"
        />
        <div className="flex justify-center w-full mt-10">
          <Button text={"Registration"} />
        </div>
      </form>
    </div>
  )
}

export default Register