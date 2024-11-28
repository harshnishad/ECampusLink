import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
const HomePage = () => {
    const [input,setInput] = useState("");
    const navigate = useNavigate();
    const sumbitHandler = ()=>{
        navigate(`/room/${input}`)
    }
    
  return (
   
    <div>
       <div>
         <input type="text" onChange={(e)=>setInput(e.target.value)} placeholder='Enter Your name ...' />
         <button onClick={sumbitHandler}>Join</button>
       </div>
    </div>
  )
}

export default HomePage
