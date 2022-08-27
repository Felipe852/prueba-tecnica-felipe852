import React from 'react'
import { Card } from '@mui/material';


const HeaderInfo = ({info,img}) => {
  return (
    <div className='container mt-10 '>
        <Card className='flex flex-col justify-center items-center p-5' style={{background:"#ededed" , width:"400px"}}>
          <img className='md:w-20 md:h-20 w-12 h-12 rounded-full border-2 border-slate-300' src={img.avatar_url} />
          <div className=' mx-auto w-2/3 mt-3'>
            <span className='flex justify-center'>Nombre:
                &nbsp;<p className='font-base'>{info.name} </p> &nbsp;
                <p>{info.lastName}</p>
            </span>
            <span  className='flex justify-center'>C.C: 
              &nbsp;<p className='font-base'>{info.cc}</p>
            </span>
            <span  className='flex justify-center'>Fecha de nacimiento:
              &nbsp;<p className='font-base'>{info.birth}</p>
            </span>
            <span  className='flex justify-center'>Correo:
               <p className='font-base'> &nbsp;{info.email}</p>
            </span>
            <span  className='flex justify-center'>Usuario GitHub:
              &nbsp;<p className='font-base'>{info.githubname}</p>
            </span>
          </div>
        </Card>
    </div>
  )
}

export default HeaderInfo