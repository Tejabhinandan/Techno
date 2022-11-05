// import React, { useReducer } from 'react'

// function Counter() {
//     let initialValue={
//         firstCounter:0,
//         secondCounter:0
//     }
//     let reducer=(pervState,action)=>{
//         switch (action.type){
//             case "INCREMENT":
//                 return {
//                     ...pervState,
//                     firstCounter:pervState.firstCounter+action.payload}
//                 case "DECREMENT":
//                     return {
//                         ...pervState,
//                         firstCounter:pervState.firstCounter-action.payload}
//                     case "RESET":
//                         return {
//                             ...pervState,
//                                 firstCounter:initialValue.firstCounter}

//             case "INCREMENT2":
//                 return {
//                     ...pervState,
//                     secondCounter:pervState.secondCounter+action.payload}

//                 case "DECREMENT2":
//                     return {
//                         ...pervState,
//                         secondCounter:pervState.secondCounter-action.payload}
//                     case "RESET2":
//                         return {
//                             ...pervState,
//                                 secondCounter:initialValue.secondCounter}
//                         default:
//                             return pervState
//         }
//     }

//     const [state, dispatch] = useReducer(reducer,initialValue)
//   return (
//     <div>
//         <h1>Count 1 :{state.firstCounter}</h1>
//         {/* <button onClick={()=>{dispatch("INCREMENT")}}>Increment counter</button>
//         <button onClick={()=>{dispatch("DECREMENT")}}>Decrement counter</button>
//         <button onClick={()=>{dispatch("RESET")}}>Reset counter</button> */}
//         <button onClick={()=>{dispatch({type:"INCREMENT",payload:20})}}>Increment counter</button>
//         <button onClick={()=>{dispatch({type:"DECREMENT",payload:10})}}>Decrement counter</button>
//         <button onClick={()=>{dispatch({type:"RESET"})}}>Reset counter</button>


//         <h1>Count 2 :{state.secondCounter}</h1>
//         <button onClick={()=>{dispatch({type:"INCREMENT2",payload:12})}}>Increment counter</button>
//         <button onClick={()=>{dispatch({type:"DECREMENT2",payload:56})}}>Decrement counter</button>
//         <button onClick={()=>{dispatch({type:"RESET2"})}}>Reset counter</button>

//     </div>
//   )
// }

// export default Counter

import React from 'react'
import { useReducer } from 'react'

function Counter() {
    let initialValue={
        a_counter:0
    }
    let reducer=(pervState,action)=>{
        switch(action.type){
            case "INCREMENT":
                return{...pervState,
             a_counter:pervState.a_counter+10 }
            case "DECREMENT":
                return{...pervState,
             a_counter:pervState.a_counter-10 }
            case "RESET":
                return{...pervState,
             a_counter:initialValue.a_counter}

             default:return pervState
        }

    }
    const [state, dispatch] = useReducer(reducer,initialValue)
  return (
    <div>
        <h1>Counter: {state.a_counter}</h1>
        <button onClick={()=>{dispatch({type:"INCREMENT"})}}>INCREMENT</button>
        <button onClick={()=>{dispatch({type:"DECREMENT"})}}>DECREMENT</button>
        <button onClick={()=>{dispatch({type:"RESET"})}}>RESET</button>
    </div>
  )
}

export default Counter