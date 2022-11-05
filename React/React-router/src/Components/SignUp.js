import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function SignUp() {


    const [userData,setUserData]=useState({
        fullName:"",
        userName:"",
        password:"",
        confirmPassword:""
    })
    
    let updateDetails=(e)=>{
        setUserData({
            ...userData,
            [e.target.name]:e.target.value
        })
    }
    
    let navigate=useNavigate()
        let navigateToLogin=()=>{
            navigate("/Login")
        }
  return (
    <div>


<form className="table border ">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
           fullName
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="fullName"
            value={userData.fullName}
            onChange={(e)=>{updateDetails(e)}}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            userName
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            name="userName"
            value={userData.userName}
            onChange={(e)=>{updateDetails(e)}}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            value={userData.password}
            onChange={(e)=>{updateDetails(e)}}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            confirm password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="confirmPassword"
            value={userData.confirmPassword}
            onChange={(e)=>{updateDetails(e)}}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <h4 style={{cursor:"pointer"}} onClick={navigateToLogin}>already have Account? Login Here</h4>
      </form>
    </div>
  )
}

export default SignUp