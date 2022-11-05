import React, { useState } from 'react'
import useCounter from './useCounter'

function CounterOne() {
    // const [counterone, setcounterone] = useState(10)
    // let incrementCounterone=()=>{
    //     setcounterone(counterone+1)
    // }
    // let decrementCounterOne=()=>{
    //     setcounterone(counterone-1)
    // }
    // let resetCounterOne=()=>{
    //     setcounterone(10)
    // }

    const [count,increment,decrement,reset]=useCounter(16,5)

  return (
    <div>
        <h1>Counter One:{count}</h1>
        <button onClick={()=>increment(45)}>increment counter1</button>
        <button onClick={decrement}>decrement counter1</button>
        <button onClick={reset}>reset counter1</button>
    </div>
  )
}

export default CounterOne