import React from 'react'

const Increment = ({increment}) => {
  return (
    <div>
        <button onClick={increment}>+</button>
    </div>
  )
}

export default Increment