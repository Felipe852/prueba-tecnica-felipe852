import React, { useEffect, useState } from 'react'
import { collection, getDocs, deleteDoc, doc, query, where } from "firebase/firestore";
import { db } from '../Firebase/firebaseConfig';
import Swal from 'sweetalert2';

const TableContratados = ({contador}) => {
    const [data, setData] = useState([])
    const [render, setRender] = useState(contador)

    useEffect(() => {
        traerdatos();
    }, [render,contador])
    

    const traerdatos = async() => {
        let aux = []
        const querySnapshot = await getDocs(collection(db, "accepted"));
        querySnapshot.forEach((doc) => {  
            aux.push(doc.data());
        });
        setData(aux)
    } 
    
    const handleDelete = (e) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then( async(result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              await deleteDoc(doc(db, "accepted", e.id));
              setRender(e.id)
            }
          })
    }

  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg mt-16">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="py-3 px-6">
                    Name
                </th>
                <th scope="col" className="py-3 px-6">
                    C.C
                </th>
                <th scope="col" className="py-3 px-6">
                    Email
                </th>
                <th scope="col" className="py-3 px-6">
                    GitHub
                </th>
                <th scope="col" className="py-3 px-6">
                    Delete
                </th>
            </tr>
        </thead>
        <tbody>
            {
                data && data.map(({name,cc,email,github,uid},idx)=> (
                    <tr key={uid} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {name}
                        </th>
                        <td className="py-4 px-6">
                            {cc}
                        </td>
                        <td className="py-4 px-6">
                            {email}
                        </td>
                        <td className="py-4 px-6">
                            {github}
                        </td>
                        <td className="py-4 px-6">
                            <a id={uid} onClick={(e)=> handleDelete(e.target)} href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
                        </td>
                    </tr>
                ))
            }
            
        </tbody>
    </table>
</div>
  )
}

export default TableContratados


/* {
    data && data.map(({name,cc,email,github,uid},idx)=> (
        
    ))} */