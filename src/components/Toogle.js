import React, { useState } from 'react'
import {Switch} from "antd"


function Toogle() {
  const [toogle,setToogle] = useState(false)

  const toogler = ()=>{
    toogle ? setToogle(false) : setToogle(true)
  }
  const mystyle = {
    height : "50px",
    width : "80px",
  }

  return (
    <div>
        <Switch onClick={toogler} style={mystyle}/>
        {toogle? <span><h1>Welcome</h1></span>:<span></span>}
    </div>
  )
}

export default Toogle