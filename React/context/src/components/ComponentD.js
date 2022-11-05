import React from 'react'
import { UserConsumer } from '../context/userContext'

function ComponentD() {
  return (
    <div>
      <UserConsumer>
     {
       (userData)=>{
         return <h1>uname by context api in Component D :{userData}</h1>
       }
     }
      </UserConsumer>
    </div>
  )
}

export default ComponentD