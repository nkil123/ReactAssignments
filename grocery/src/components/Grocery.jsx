import {GroceryInput} from "./GroceryInput";
import {GroceryList} from "./GroceryList";
import {nanoid} from "nanoid"
import {useState} from "react";

export const Grocery=()=>{
  const [list,setList]=useState([])
  const handleClick =(data)=>{
    console.log(data)
    const payload = {
      title:data,
      status:"purchased",
      id:nanoid(6)
    }
    setList([...list,payload])
  }
  const handleDel =(id)=>{
    console.log(id)
    let nList = list.filter((e)=>e.id !==id);
    console.log(nList)
    setList(nList)
  }
  return (
    <>
    
    <GroceryInput getData = {handleClick} />
    {
      list.map((e)=><GroceryList key={e.id} {...e} deleteData={handleDel}/>)
    }
    </>
  )
}