import React, { useState } from 'react'
import Button from '../components/Button';
import DataTable from '../components/DataTable';
import HeaderInfo from '../components/HeaderInfo';
import NavBarIcon from '../components/NavBarIcon'
import { useForm } from '../Hooks/useForm';
import { collection, setDoc, addDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../Firebase/firebaseConfig";
import { users } from '../helpers/URL';
import axios from 'axios';
import TableContratados from '../components/TableContratados';
import Swal from 'sweetalert2';


const Home = () => {
  const [show, setShow] = useState(false)
  const [info, setInfo] = useState()
  const [data, setData] = useState()
  const [idGit, setIdGit] = useState()
  const [actualizarData, setActualizarData] = useState()
  const { formValue, handleInputChangeName, reset } = useForm({
    name: "",
    lastName: "",
    cc:"",
    birth:"",
    email:"",
    githubname:""
  });


  const handleSubmit = async(e) => {
    e.preventDefault();
      document.cookie=`name=${formValue.name}`
      document.cookie=`lastName=${formValue.lastName}`;
      document.cookie=`cc=${formValue.cc}`
      document.cookie=`birth=${formValue.birth}`
      document.cookie=`email=${formValue.email}`
      document.cookie=`github_user=${formValue.githubname}`
      let lasCookies = document.cookie;
      setInfo(formValue)
      const usuariogit = await axios.get(`${users}${formValue.githubname}`)
      const datagit = usuariogit.data
      setIdGit(datagit.id)
      if(formValue.name !== "" || formValue.email !== "" || usuariogit ){
        setShow(true)
        if(usuariogit !== undefined){
          setData(usuariogit.data)
          alert(lasCookies)
        }
      }else{
        setShow(false)
      }
  } 

  const handleOnClickAccepted = () => {
    Swal.fire({
      title: 'Deseas aceptar a este candidato?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si!'
    }).then(async(result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Guardado'
        )
        const {name,cc,email} = info
        const giturl = `${users}${formValue.githubname}`
        if(idGit){
          const dataGuardada = {
          name:name,
          cc:cc,
          email:email,
          github:giturl,
          uid:idGit
        }
        const ids = await addDoc(collection(db, "accepted"), dataGuardada);
        const actualizar = doc(db, "accepted", ids.id);
        await updateDoc(actualizar, {
          uid: ids.id
        });
        setActualizarData(ids.id)
        }
        
      }
    })
  }

  return (
    <div className='container flex flex-col items-center h-screen'>
    <NavBarIcon loquequiera={true} />

    {/* Cabecera */} 
    <div className=''>
      {
        show && <HeaderInfo info={info} img={data}/>
      }
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
            required
            className="rounded-xl w-72 outline-none text-center focus:text-lg transition-all duration-500 focus:ring-2 focus:ring-slate-400"
          />
          <input
          onChange={handleInputChangeName}
            name="lastName"
            type="text"
            placeholder="Apellido"
            required
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
            required
            className="rounded-xl w-72 outline-none text-center focus:text-lg transition-all duration-500 focus:ring-2 focus:ring-slate-400"
          />
          <input
          onChange={handleInputChangeName}
            name="email"
            type="email"
            placeholder="Correo"
            required
            className="rounded-xl w-72 outline-none text-center focus:text-lg transition-all duration-500 focus:ring-2 focus:ring-slate-400"
          />
          <input
            onChange={handleInputChangeName}
            name="githubname"
            type="text"
            placeholder="Usuario GitHub"
            required
            className="rounded-xl w-72 outline-none text-center focus:text-lg transition-all duration-500 focus:ring-2 focus:ring-slate-400"
          />
          <div className="w-full mt-5 text-center">
            <Button text={"Search"} />
          </div>
          </form>
        </div>
        {/* Tabla */}
        <div className='w-full mx-auto flex flex-col justify-center items-center gap-3 mb-10'>
          <DataTable data={data} />
        </div>
      </div>
      <div className='mx-auto mt-10 mb-24'>
        <div onClick={handleOnClickAccepted} className='w-36 flex justify-center items-center mx-auto'>
            <Button text={"Acept"}/>
        </div>
        {/* Contratados */}
          <TableContratados contador={actualizarData}  />
      </div>
      <footer className='h-36 w-full'><br /></footer>
    </div>
  )
}

export default Home