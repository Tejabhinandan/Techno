import logo from './logo.svg';
import './App.css';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';

function App() {
  return (
    <div className="App">
      <ClickCounter name="raju"/>
      <HoverCounter/>
    </div>
  );
}

export default App;
