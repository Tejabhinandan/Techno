import React, { useCallback, useState } from 'react'
import Button from './Button'
import Count from './Count'

function Parents() {
    const [age, setage] = useState(10)
    const [salary, setsalary] = useState(1000)

    console.log("age",age);
    // incermentAge variable will be reassigned with the function only
    // when the age value is changed (which is passed as Dependency)

    // let incermentAge=()=>{
    //     setage(age+1)
    // }

    let incermentAge=useCallback(() => {
        setage(age+1)
      },[age])

    //   incermentSalary variable will be reassigned with the function only when the salary value 
    //   is changed (which is passes as Dependency)

    // let incermentSalary=()=>{
    //     setsalary(salary+100)
    // }
    
    let incermentSalary=useCallback(()=>{
        setsalary(salary+100)
    },[salary])

  return (
    <div>
        <Count text="Age" count={age}/>
        <Button handleClick={incermentAge}>incerment Age</Button>
        <Count text="Salary" count={salary}/>
        <Button handleClick={incermentSalary}>incerment salary</Button>
    </div>
  )
}

export default Parents