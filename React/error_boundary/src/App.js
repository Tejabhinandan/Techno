import logo from './logo.svg';
import './App.css';
import ErrorBoundary from './component/ErrorBoundary';
import Person from './component/Person';

function App() {
  return (
    <div className="App">
     <ErrorBoundary>
      <Person/>

     </ErrorBoundary>
    </div>
  );
}

export default App;
