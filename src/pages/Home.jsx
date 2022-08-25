import React, { useEffect } from 'react'
import Button from '../components/Button';
import NavBarIcon from '../components/NavBarIcon'
import { useForm } from '../Hooks/useForm';
import { useSelector } from "react-redux";

const Home = () => {
  const types = localStorage.getItem("type")
  const { photoURL, displayName, email , uid } = useSelector((state) => state.login);
  const { formValue, handleInputChangeName, reset } = useForm({
    name: "",
    lastName: "",
    cc:"",
    birth:"",
    email:""
  });
  
  useEffect(()=>{
    if(types === "google" || types==="facebook"){
      document.cookie=`displayName=` + encodeURIComponent(displayName) + "; expires= Wed, 24 Aug 2022 22:53:30 UTC"
      document.cookie=`photoURL=` + encodeURIComponent(photoURL) + "; expires= Wed, 24 Aug 2022 22:53:30 UTC"
      document.cookie=`email=` + encodeURIComponent(email) + "; expires= Wed, 24 Aug 2022 22:53:30 UTC"
      document.cookie=`uid=` + encodeURIComponent(uid) + "; expires= Wed, 24 Aug 2022 22:53:30 UTC"
    }else{
      document.cookie=`displayName=` + encodeURIComponent(displayName) + "; expires= Wed, 24 Aug 2022 22:53:30 UTC"
      document.cookie=`email=` + encodeURIComponent(email) + "; expires= Wed, 24 Aug 2022 22:53:30 UTC"
      document.cookie=`uid=` + encodeURIComponent(uid) + "; expires= Wed, 24 Aug 2022 22:53:30 UTC"
    }
      
  },[])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValue);
  } 

  const handleAqui = () => {  
    alert(document.cookie)
  }

  return (
    <div className='container flex flex-col items-center h-screen'>
    <NavBarIcon loquequiera={true}  />
    <button onClick={handleAqui}>Aqui</button>
    <div className='w-screen justify-center items-center flex mt-10 gap-5 mx-auto px-10'>
      {/* Formulario */}
        <div className='w-1/2 mx-auto border-2 border-primary flex justify-center items-center' >
          <form onSubmit={handleSubmit}
         className="flex flex-col items-center justify-center w-full max-w-md px-5 mt-6 gap-5">
          <input
          onChange={handleInputChangeName}
            name="name"
            type="text"
            placeholder="Nombre"
            className="rounded-xl w-3/4 outline-none text-center focus:text-lg transition-all duration-500 focus:ring-2 focus:ring-slate-400"
          />
          <input
          onChange={handleInputChangeName}
            name="lastName"
            type="text"
            placeholder="Apellido"
            className="rounded-xl w-3/4 outline-none text-center focus:text-lg transition-all duration-500 focus:ring-2 focus:ring-slate-400"
          />
          <input
          onChange={handleInputChangeName}
            name="cc"
            type="number"
            placeholder="Cedula"
            className="rounded-xl w-3/4 outline-none text-center focus:text-lg transition-all duration-500 focus:ring-2 focus:ring-slate-400"
          />
          <input
          onChange={handleInputChangeName}
            name="birth"
            type="date"
            placeholder="Fecha de nacimiento"
            className="rounded-xl w-3/4 outline-none text-center focus:text-lg transition-all duration-500 focus:ring-2 focus:ring-slate-400"
          />
          <input
          onChange={handleInputChangeName}
            name="email"
            type="email"
            placeholder="Correo"
            className="rounded-xl w-3/4 outline-none text-center focus:text-lg transition-all duration-500 focus:ring-2 focus:ring-slate-400"
          />
          <input
            onChange={handleInputChangeName}
            name="githubname"
            type="text"
            placeholder="Nombre GitHub"
            className="rounded-xl w-3/4 outline-none text-center focus:text-lg transition-all duration-500 focus:ring-2 focus:ring-slate-400"
          />
          <div className="w-full mt-5 text-center">
            <Button text={"Acept"} />
          </div>
          </form>
        </div>
        {/* Tabla */}
        <div className='w-1/2  mx-auto border-2 border-primary flex justify-center items-center'>
          tableamesta
        </div>
      </div>
    </div>
  )
}

export default Home