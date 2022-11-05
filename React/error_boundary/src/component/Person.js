import React from 'react'

function Person(props) {
  return (
    <div>
        <h1>I M Preson</h1>
        {/* to generate error in the component */}
        {props.data.splice()}
    </div>
  )
}

export default Person