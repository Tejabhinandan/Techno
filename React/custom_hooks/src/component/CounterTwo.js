import React, { useState } from 'react'
import useCounter from './useCounter'

function CounterTwo() {
    // const [CounterTwo, setcounterTwo]= useState(10)
    // let incrementCounterTwo=()=>{
    //     setcounterTwo(counterone+1)
    // }
    // let decrementCounterTwo=()=>{
    //     setcounterTwo(counterone-1)
    // }
    // let resetCounterTwo=()=>{
    //     setcounterTwo(10)
    // }

    const [count,increment,decrement,reset]=useCounter(10,5)

  return (
    <div>
        <h1>Counter two:{count}</h1>
        <button onClick={increment}>increment counter2</button>
        <button onClick={()=>{decrement(23)}}>decrement counter2</button>
        <button onClick={reset}>reset counter2</button>
    </div>
  )
}

export default CounterTwo