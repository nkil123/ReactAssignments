import { useState } from "react"

import "./counter.css"

function Counter({val}){

  const [count,setCount]=useState(val)
  const addOne = ()=>{
    setCount(count+1)
  }
  const decOne = ()=>{
    setCount(count-1)
  }
  const double = ()=>{
    setCount(count*2)
  }

  return (
    <div>
      <h1 >Counter:{count}</h1>
     <button onClick={addOne}>Add</button>
     <button onClick={decOne}>Dec</button>
     <button onClick={double}>Double</button>
    </div>
  )
}


export {Counter}