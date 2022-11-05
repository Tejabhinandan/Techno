import logo from './logo.svg';
import './App.css';
import Json from './Component/Json';
import UserFrm from './Component/UserFrm';

function App() {
  let getdata=(userData)=>{
    console.log(userData)
  }
  return (
    <div className="App">
  <UserFrm getdata={getdata}/>
    </div>
  );
}

export default App;
