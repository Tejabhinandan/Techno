import React, { useState } from 'react'

function Frm() {
  const [userData, setuserData] = useState({
    firstName:"",
    lastName:""
  })
  const [firstNameError, setfirstNameError] = useState("")
  const [lastNameError, setlastNameError] = useState("")


  let firstNamevalidation=()=>{
    if(userData.firstName){
      if(/^[A-Za-z]+$/.test(userData.firstName)){
        setfirstNameError("")
        return true
      }else{
        setfirstNameError("invalid")
      }
    }else{
      setfirstNameError("enter first Name")
    }
  }

  let lastNamevalidation=()=>{
    if(userData.lastName){
      if(/[0-9]/.test(userData.lastName)){
        setlastNameError('')
        return true

      }else{
        setlastNameError("invalid")
      }
    }else{
      setlastNameError("enter last name")
    }
  }

  let saveData=()=>{
    firstNamevalidation()
    lastNamevalidation()

    if(firstNamevalidation() && lastNamevalidation()){
        setuserData({
          firstName:"",
          lastName:""
        })
        console.log(userData)
      }

  }
  let updateuser=(event)=>{
      setuserData({
        ...userData,
        [event.target.name]:event.target.value
      })
  }


  return (
    <div>
      <input placeholder='firstName' name='firstName' value={userData.firstName} onChange={(event)=>{updateuser(event)}}/>
      <br/>
      {firstNameError && <div style={{color:"red"}}>{firstNameError} </div>}
      <input placeholder='lastName' name='lastName' value={userData.lastName} onChange={(event)=>{updateuser(event)}}/>
      <br/>
      {lastNameError && <div style={{color:"red"}}>{lastNameError} </div>}
      <button type='submit' onClick={saveData}>
        Submit
      </button>
        </div>
  )
}

export default Frm