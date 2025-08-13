import React, { useState } from 'react'

const Counter = () => {
    let [Count, setCount] = useState(0)
    const increment =()=>{
         setCount(Count+1)
    }
    const decrement = () => {
        if(Count > 0){
            setCount(Count - 1)
        }
      
    }    
  return (
    <div>
        <h1>Count: {Count} </h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </div>
  )
}

export default Counter