import React from 'react'
import Button from '../components/Button'
import { useForm } from '../Hooks/useForm';
import { useDispatch } from "react-redux";
import { registerWithEmail } from '../Redux/actions/userActions';

const Register = () => {
  const dispatch = useDispatch();
  const { formValue, handleInputChangeName, reset } = useForm({
    email: "",
    password: "",
    name: "",
    phoneNumber: "",
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValue);
    dispatch(
      registerWithEmail(
        formValue.email,
        formValue.password,
        formValue.name,
        formValue.phoneNumber
      )
    );
    reset();
  };

  return (
    <div className='container relative flex flex-col items-center mt-24 h-screen max-w-4xl mx-auto'>
        <h1 className='text-xl md:text-3xl'>Register</h1>
        <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center w-full max-w-md px-5 mt-6 gap-5"
      >
        <h1 className="text-2xl text-white md:text-3xl">Sign Un</h1>
        <input
        onChange={handleInputChangeName}
          name="name"
          type="text"
          placeholder="Full name"
          className="rounded-xl w-3/4 outline-none text-center focus:text-lg transition-all duration-500 focus:ring-2 focus:ring-slate-400"
        />
        <input
        onChange={handleInputChangeName}
          name="email"
          type="email"
          placeholder="Email"
          className="rounded-xl w-3/4 outline-none text-center focus:text-lg transition-all duration-500 focus:ring-2 focus:ring-slate-400"
        />
        <input
        onChange={handleInputChangeName}
          name="phoneNumber"
          type="number"
          placeholder="Phone number"
          className="rounded-xl w-3/4 outline-none text-center focus:text-lg transition-all duration-500 focus:ring-2 focus:ring-slate-400"
        />
        <input
        onChange={handleInputChangeName}
          name="password"
          type="password"
          placeholder="Password"
          className="rounded-xl w-3/4 outline-none text-center focus:text-lg transition-all duration-500 focus:ring-2 focus:ring-slate-400"
        />
        <div className="flex justify-center w-full mt-10">
          <Button text={"Registration"} />
        </div>
      </form>
    </div>
  )
}

export default Register