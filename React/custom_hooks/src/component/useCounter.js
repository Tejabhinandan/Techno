import { useState } from "react"

const useCounter=(initialvalue,val)=>{

    const [count, setcount] = useState(initialvalue)

      let increment=(value)=>{
        if(!isNaN(value)){
            setcount(count+val+value)
        }else{
            setcount(count+val)
        }
    }
    let decrement=(value)=>{
        if(!isNaN(value))
            setcount(count-val-value)
        else
            
            setcount(count-val)
        
    }
    let reset=()=>{
        setcount(initialvalue)
    }
    return(
        [count,increment,decrement,reset]
    )
}
export default useCounter