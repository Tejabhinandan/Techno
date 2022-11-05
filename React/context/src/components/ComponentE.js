import React, { useContext } from 'react'
import loginContext from '../context/loginContext';
function ComponentE() {
    let context = useContext(loginContext)
    console.log("context in E", context);

    let data="hey data in component E"
    
    let sendData=()=>{
        context.getDataFromE(data)
    }
    return (
        <div>
            <h2>login details: userName: {context.userName}</h2>
            <button onClick={sendData}>send data to app</button>
        </div>
    )
}

export default ComponentE