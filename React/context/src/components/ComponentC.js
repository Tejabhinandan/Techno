import React from 'react'
import { UserConsumer } from '../context/userContext'

function ComponentC(props) {
  // console.log("props in C", props);
  return (
    <div>
      <UserConsumer >
        {
          (something) => {
            return <h1>uname by context api in Component C :{something}</h1>
          }
        }
      </UserConsumer>

      <h1 style={{ color: "red" }}>uname by props drilling : {props.uname}</h1>
    </div>
  )
}

export default ComponentC
