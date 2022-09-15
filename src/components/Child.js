
import React from 'react'

function Child(props) {
    const data = "I am updated from my child"
  return (
    <div>
        <button onClick={()=>props.updateVal(data)}>updateParent</button>
    </div>
  )
}

export default Child