import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

function UserFrm(props) {
    const [userData, setuserData] = useState({
        firstName:'',
        lastName:''
    })
    const [FirstNameError, setFirstNameError] = useState(false)
    const [LastNameError, setLastNameError] = useState(false)
    
    const firstNameValidation=()=>{
        if(userData.firstName){
            if(/^[A-Za-z]+$/.test(userData.firstName)){
                setFirstNameError('')
                return true
            }else{
                setFirstNameError("invalid")
            }
        }else{
            setFirstNameError("enter email")
        }
        return false
    }

    const lastNameValidation=()=>{
        if(userData.lastName){
            if(/^(?=.*?[0-9])/.test(userData.lastName)){
                setLastNameError('')
                return true
            }else{
                setLastNameError('invalid')
            }
        }else{
            setLastNameError('enter number')
        }
        return false
    }

    let updataUserData=(event)=>{
        setuserData({
            ...userData,
            [event.target.name]:event.target.value
        })

    }
        let handleSubmit=(e)=>{
            e.preventDefault()
        }
    let saveData=()=>{
        firstNameValidation()
        lastNameValidation()
    

    if(firstNameValidation() && lastNameValidation()){
       props.getdata(userData)
        setuserData({
            firstName:'',
            lastName:''
        })

    }
}


  return (
    <div>
         <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" placeholder="Enter email" name='firstName' value={userData.firstName} onChange={(event)=>{updataUserData(event)}}/>
        
      </Form.Group>
      {FirstNameError && <div className="errorMsg text-danger">{FirstNameError} </div>}

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="text" placeholder="Password" name='lastName' value={userData.lastName} onChange={(event)=>{updataUserData(event)}} />
      </Form.Group>
      {LastNameError && <div className="errorMsg text-danger">{LastNameError}</div>}
      <Button variant="primary" type="submit" onClick={saveData}>
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default UserFrm