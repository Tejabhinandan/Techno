import React from 'react'

function FunComp(props) {
    console.log("func comp",props.uname)
  return (
    <div>
        <h1>{props.uname}</h1>
    </div>
  )
}

// export default FunComp
export default React.memo(FunComp)