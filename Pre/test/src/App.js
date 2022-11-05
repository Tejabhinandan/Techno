import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Test1 from './Components/Test1';

function App() {
  const [input, setinput] = useState({username:"",email:""})
  return (
    <div className="App">
      <div>
        <input className='sample' value={input.username} data-testid="usernameInput" name="userrname" onChange={(e)=>setinput({...input,username:e.target.value})}></input>
        <input className='sample' value={input.email} data-testid="emailInput" name="emailId" onChange={(e)=>setinput({...input,email:e.target.value})}></input>
        <button data-testid="submit" >Submit</button>
        <Test1/>
      </div>
    </div>
  );
}

export default App;
