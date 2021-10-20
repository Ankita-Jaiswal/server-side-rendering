import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> Hey There I am Ankita
        </p>
        <Hello />
      </header>
    </div>
  );
}

export default App;
