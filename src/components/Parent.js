import React, { useState } from 'react'
import Child from './Child'
function Parent() {
    const[val,setVal] = useState("I need to be updated from my child")

    function parent(data){
     setVal(data)
    }
  return (
    <div>
        <h4>{val}</h4>
        <Child updateVal={parent}/>
       { }
    </div>
  )
}

export default Parent