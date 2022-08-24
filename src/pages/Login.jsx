import { Link } from 'react-router-dom'
import React from 'react'
import Button from '../components/Button'
import { useForm } from '../Hooks/useForm';
import { loginGoogle, LoginWithEmail } from '../Redux/actions/userActions';
import { useDispatch } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch();
  const { formValue, handleInputChangeName, reset } = useForm({
    email: "",
    password: "",
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValue);
    dispatch(LoginWithEmail(formValue.email, formValue.password));
    reset();
  };

  const handleGoogle = () => {
    dispatch(loginGoogle());
  };

  return (
    <div className='container relative flex flex-col items-center mt-24 h-screen max-w-4xl mx-auto'>
      <h1 className='text-xl md:text-3xl'>Login</h1>
      <form
        onSubmit={handleSubmit}
       className="flex flex-col items-center justify-center w-full max-w-md px-5 mt-6 gap-5">
        <h1 className="text-2xl text-white">Sign In</h1>
        <input
        onChange={handleInputChangeName}
          name="email"
          type="email"
          placeholder="Email"
          className="rounded-xl w-3/4 outline-none text-center focus:text-lg transition-all duration-500 focus:ring-2 focus:ring-slate-400"
        />
        <input
        onChange={handleInputChangeName}
          name="password"
          type="password"
          placeholder="Password"
          className="rounded-xl w-3/4 outline-none text-center focus:text-lg transition-all duration-500 focus:ring-2 focus:ring-slate-400"
        />
        <div className="w-full mt-5 text-center">
          <Button text={"Sing in"} />
        </div>
        <p className="mt-2 cursor-pointer text-[10px] font-thin text-white hover:text-primary">
          Forgot Password ?
        </p>
      </form>

      <div className="flex flex-col items-center w-7/12 mt-24 md:mt-10">
        <p className="text-sm font-light text-primary md:text-base">
          Sing In with
        </p>
        <div className="flex items-center justify-center w-full mt-4 ">
          <div className="w-41 flex w-2/4 items-center justify-end border-r border-[#363D6B]">
            <img
              src="https://res.cloudinary.com/dnont3pur/image/upload/v1661306704/Prueba%20Tecnica%20Geek/google_vkmses.png"
              alt="google icon"
              className="mr-2 cursor-pointer w-8 hover:w-10 transition-all duration-500"
              onClick={handleGoogle}
            />
          </div>
          <div className="w-2/4 ">
            <img
              src="https://res.cloudinary.com/dnont3pur/image/upload/v1661306704/Prueba%20Tecnica%20Geek/facebook_jws7oo.png"
              alt="facebook icon"
              className="ml-2 cursor-pointer w-8 hover:w-10 transition-all duration-500"
            />
          </div>
        </div>
      </div>

      <div className="h-36 flex justify-center items-center">
        <p className="text-sm font-light text-primary md:text-base">
          Don't have an account?{" "}
          <Link to="/register">
            <span className="font-medium cursor-pointer text-primary">
              Create Account
            </span>
          </Link>
            
        </p>
      </div>
    </div>
  )
}

export default Login