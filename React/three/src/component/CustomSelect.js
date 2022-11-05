      import React from 'react'
import ButtonComponent from './ButtonComponent'

function CustomSelect({setstate}) {
  const handleSubmit=()=>{
    console.log("hi i am on submit");
    setstate(false)
  };
  return (
    <div>
      <ButtonComponent lable="Create" onSubmit={()=>{handleSubmit()}}
      style={{color:"blue"}}
      />
    </div>
  )
}

export default CustomSelect