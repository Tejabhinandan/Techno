import logo from './logo.svg';
import './App.css';
import React, { Suspense, useState } from 'react';
import PersonDetails from './components/PersonDetails';

const PersonDetailsComponents=React.lazy(()=>import("./components/PersonDetails"))

function App() {
  const [isShow, setisShow] = useState(false)
  return (
    <div className="App">
     {isShow &&<Suspense fallback={<h1>Loading................................................................................!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</h1>}>
      <PersonDetailsComponents/>
      </Suspense>}
      <button onClick={()=>{setisShow(true)}}>🤶🎅🤶</button>
    </div>
  );
}

export default App;
