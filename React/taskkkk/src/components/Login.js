import React from 'react'
import { useState } from 'react'

function Login() {
    const [getdata, setgetdata] = useState({
        fname:"",
        lname:""
    })
    let get=(e)=>{setgetdata({...getdata,[e.target.name]:e.target.value})}

const submit = ()=>{console.log(getdata)}    
    
  return (
    <div>
        <form onSubmit={(e)=>e.preventDefault()}>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">
        Email address
      </label>
      <input
      name='fname'
      value={getdata.fname}
        type="text"
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp" onChange={(e)=>{get(e)}}
      />
      <div id="emailHelp" className="form-text">
      </div>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">
        Password
      </label>
      <input
      name='lname'
      value={getdata.lname}
        type="text"
        className="form-control"
        id="exampleInputPassword1"
        onChange={(e)=>{get(e)}}
      />
    </div>
    <div className="mb-3 form-check">
      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
      <label className="form-check-label" htmlFor="exampleCheck1">
      </label>
    </div>
    <button type="submit" className="btn btn-primary" onClick={submit}>
      Submit
    </button>
  </form>
  </div>
  )
}

export default Login