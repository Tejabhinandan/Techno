import React from 'react'



function Lolakshi() {
    const displayGreeting=()=>{
        document.write('Hello to git World')
    }

    const greet= ()=>{
      document.write("Have a Happy Day")

    }
  return (
    <div>
        <button onClick={displayGreeting}> Lolakshi</button>

        <div>Hello Lolakshi</div>
        <button onClick={greet}>Devina</button>
    </div>


  )
}

export default Lolakshi