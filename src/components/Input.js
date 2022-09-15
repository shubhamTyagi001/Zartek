import React, { useState } from 'react'

function Input() {
    const[data,setData] = useState("");
    
  return (
    <div>
        <input type="text" onChange={(e)=>{setData(e.target.value)}}/>
        <h3>{data}</h3>
    </div>
  )
}

export default Input