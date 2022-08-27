import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { Input } from "@mui/material";
import { useForm } from "../Hooks/useForm";
import { BiUndo } from "react-icons/bi";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Repo Name", width: 130 },
  { field: "description", headerName: "Repo Description", width: 130 },
  {
    field: "languages_url",
    headerName: "Lenguages",
    width: 100,
  },
  {
    field: "default_branch",
    headerName: "Defautl Branch",
    width: 160,
  },
  {
    field: "html_url",
    headerName: "Link GitHub Repos",
    width: 160,
  },
];

export default function DataTable({ data }) {
  let datas = [];
  let loquesea;
  let indice = 0;
  const [dataRepo, setDataRepo] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [dataRepo2, setDataRepo2] = React.useState([]);
  const { formValue, handleInputChangeName, reset } = useForm({
    search: "",
  });


  const lenguaje = async(url) => {
      
      const vari =  await axios.get(url)
      const aux2 = await vari.data
      const aux3 = Object.keys(aux2)  
      return aux3
  }

  const zapato = async() =>{
    let aux = await axios.get(data?.repos_url);
    const datos = aux.data;
    loquesea = datos.map((e, i) => {
      const auxiliar = {
        id: e.id,
        name: e.name,
        description: e.description,
        languages_url: lenguaje(e.languages_url),
        default_branch: e.default_branch,
        html_url: e.html_url,
      };
      datas.push(auxiliar);
      return auxiliar
    }) 
    setDataRepo(loquesea);
    setDataRepo2(loquesea)
  }

  React.useEffect(() => {
    zapato();
  }, [data])
  
 const filtrar = (busq) => {
    let resultadoB = dataRepo.filter((e)=>{
      if(e.name.includes(busq)){
        return e
      }
  })
  setDataRepo(resultadoB);
 }

 const handleSearch = (e) => {
  filtrar(e)
  setSearch(e)
 }

 const handleOnClick = () =>{
  setDataRepo(dataRepo2);
  setSearch("")
 }

  return (
    <div className="w-[750px] h-[380px]">
      <div className="flex justify-between">
        <label className="font-semibold">
          Search: 
          &nbsp; <Input className="capitalize" placeholder="Use Mayus and Minus" name="search" value={search} onChange={(e)=> handleSearch(e.target.value)} type="text" />
        </label>
        <button onClick={handleOnClick}> <BiUndo size={25}/> </button>
      </div>
      <DataGrid
        rows={dataRepo}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
