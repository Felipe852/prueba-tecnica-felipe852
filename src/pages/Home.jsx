import React from 'react'
import Button from '../components/Button';
import DataTable from '../components/DataTable';
import HeaderInfo from '../components/HeaderInfo';
import NavBarIcon from '../components/NavBarIcon'
import { useForm } from '../Hooks/useForm';
import { Input } from '@mui/material';

const Home = () => {
  const { formValue, handleInputChangeName, reset } = useForm({
    name: "",
    lastName: "",
    cc:"",
    birth:"",
    email:"",
    github:""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
      document.cookie=`name=${formValue.name}`
      document.cookie=`lastName=${formValue.lastName}`;
      document.cookie=`cc=${formValue.cc}`
      document.cookie=`birth=${formValue.birth}`
      document.cookie=`email=${formValue.email}`
      document.cookie=`github_user=${formValue.github}`
      let lasCookies = document.cookie;
      console.log(lasCookies);
  } 

  return (
    <div className='container flex flex-col items-center h-screen'>
    <NavBarIcon loquequiera={true} />
    {/* Cabecera */} 
    <div className=''>
      <HeaderInfo />
    </div>
    <div className='w-screen justify-center items-center grid grid-flow-row md:grid-flow-col mt-10 gap-24 mx-auto px-10'>
      
      {/* Formulario */}
        <div className='w-full mx-auto border-2 border-primary flex justify-center items-center' >
          <form onSubmit={handleSubmit}
         className="flex flex-col items-center justify-center w-full max-w-md px-5 mt-6 gap-5">
          <input
          onChange={handleInputChangeName}
            name="name"
            type="text"
            placeholder="Nombre"
            className="rounded-xl w-72 outline-none text-center focus:text-lg transition-all duration-500 focus:ring-2 focus:ring-slate-400"
          />
          <input
          onChange={handleInputChangeName}
            name="lastName"
            type="text"
            placeholder="Apellido"
            className="rounded-xl w-72 outline-none text-center focus:text-lg transition-all duration-500 focus:ring-2 focus:ring-slate-400"
          />
          <input
          onChange={handleInputChangeName}
            name="cc"
            type="number"
            placeholder="Cedula"
            className="rounded-xl w-72 outline-none text-center focus:text-lg transition-all duration-500 focus:ring-2 focus:ring-slate-400"
          />
          <input
          onChange={handleInputChangeName}
            name="birth"
            type="date"
            placeholder="Fecha de nacimiento"
            className="rounded-xl w-72 outline-none text-center focus:text-lg transition-all duration-500 focus:ring-2 focus:ring-slate-400"
          />
          <input
          onChange={handleInputChangeName}
            name="email"
            type="email"
            placeholder="Correo"
            className="rounded-xl w-72 outline-none text-center focus:text-lg transition-all duration-500 focus:ring-2 focus:ring-slate-400"
          />
          <input
            onChange={handleInputChangeName}
            name="githubname"
            type="text"
            placeholder="Usuario GitHub"
            className="rounded-xl w-72 outline-none text-center focus:text-lg transition-all duration-500 focus:ring-2 focus:ring-slate-400"
          />
          <div className="w-full mt-5 text-center">
            <Button text={"Acept"} />
          </div>
          </form>
        </div>
        {/* Tabla */}
        <div className='w-full mx-auto flex flex-col justify-center items-center gap-3'>
          <label className='font-semibold'>Search: <Input type='text'/></label>
          <DataTable />
        </div>
      </div>
    </div>
  )
}

export default Home