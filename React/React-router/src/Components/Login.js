import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

const [userData,setUserData]=useState({
    userName:"",
    password:""
})

let updateDetails=(e)=>{
    setUserData({
        ...userData,
        [e.target.name]:e.target.value
    })
}

let navigate=useNavigate()
    let navigateToSignUp=()=>{
        navigate("/SignUp")
    }

  return (
    <div className="container mt-5">
      <form className="table border ">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
           UserName
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="userName"
            value={userData.userName}
            onChange={(e)=>{updateDetails(e)}}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
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
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <h4 style={{cursor:"pointer"}} onClick={navigateToSignUp}>Dont have Account? signUp Here</h4>
      </form>
    </div>
  );
}

export default Login;