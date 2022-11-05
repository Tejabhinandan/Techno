import logo from './logo.svg';
import './App.css';
import Test from './component/Test';
import ButtonComponent from './component/ButtonComponent';
import CustomSelect from './component/CustomSelect';
import { ComponentA } from './component/ComponentA';
import Stepper from "./component/Stepper"
import { useState } from 'react';


function App() {
  const [state, setstate] = useState(true)
  return (
    <div className="App">
      {/* {state? <CustomSelect setstate={setstate} />:<ComponentA />} */}
      
<Stepper/>

     
    </div>
  );
}

export default App;
