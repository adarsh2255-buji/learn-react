import React, { useState } from 'react'

const Toggle = () => {
    const [show, setShow] = useState(false)
  return (
    <>
    <button onClick={()=> setShow(!show)}>{show ? "hide" : "show"}</button>
    <p>{show ? "I am visible now" : ""}</p>
    </>
  )
}

export default Toggle