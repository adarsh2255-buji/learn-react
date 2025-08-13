import React, { useState } from 'react'
import Increment from './Increment';
import Decrement from './Decrement';

const CounterParent = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        if(count > 0){
            setCount(count - 1)
        }
    }

  return (
    <div>
  
        <Increment increment={increment} />
        <Decrement decrement={decrement}/>
        <p>count : {count}</p>
    </div>
  )
}

export default CounterParent