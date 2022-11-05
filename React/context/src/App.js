// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ComponentA from './components/ComponentA';
import { UserProvider } from './context/userContext';
import ComponentD from './components/ComponentD';
import { LoginProvider } from './context/loginContext';
import ComponentE from './components/ComponentE';

function App() {
  let getDataFromE = (data) => {
    console.log("parent from E", data);
  }
  const [loginData,  setloginData] = useState({
    userName: "Ajay",
    getDataFromE:getDataFromE
  })
  const [uname, setuname] = useState("Amazon")
  // console.log("uname",uname);\\

  
  return (
    <div className="App">
      <UserProvider value={uname} >
        <ComponentA uname={uname} />
      <ComponentD />
      </UserProvider>
      <button onClick={() => { setuname("Netflix") }}>Change Data</button>

      <LoginProvider value={loginData} >
        <ComponentE />
      </LoginProvider>
    </div>
  );
}

export default App;
