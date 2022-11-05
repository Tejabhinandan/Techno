import React, { useMemo, useState } from 'react'

function Counter() {
    const [counterOne, setcounterOne] = useState(0)
    const [counterTwo, setcounterTwo] = useState(10)

    let incrementCounterOne=()=>{
        setcounterOne(counterOne+1)
    }
    let incrementCounterTwo=()=>{
        setcounterTwo(counterTwo+10)
    }

    let isEven=useMemo(()=>{
        console.log("isEven is Executed")
        let i=0
        while(i<200000000) i++;
        return counterOne%2===0
        
    },[counterOne])
  return (
    <div>
        {isEven ?"Even":"odd"}
        <h2>Counter 1: {counterOne}</h2>
        <button onClick={incrementCounterOne}>Increment Counter One</button>
        <h2>Counter 2: {counterTwo}</h2>
        <button onClick={incrementCounterTwo}>Increment Counter Two</button>

    </div>
  )
}

export default Counter