import React, { useState } from 'react'

const ControllerInput = () => {
    const [name, setName] = useState("")
  return (
    <div>
        <input type="text"  value={name} onChange={(e)=> setName(e.target.value)}/>
        <p>hello, {name}</p>
    </div>
  )
}

export default ControllerInput