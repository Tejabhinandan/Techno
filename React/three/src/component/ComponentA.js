import React from 'react'
import ButtonComponent from './ButtonComponent'
import Stepper from './Stepper'

export const ComponentA = () => {
    const handleSubmit=()=>{
        console.log("this data is from component A")
    }
  return (
    <div>
      <ButtonComponent lable='submit'
      onSubmit={()=>{handleSubmit()}}/>
    </div>
  )
}
