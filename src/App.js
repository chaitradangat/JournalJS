import logo from './logo.svg';
import './App.css';
import Menu from './Menu';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React, create-react-app was deprecated in 2023 =/
        </a>
      </header>

      <Menu name="Stuff"></Menu>

    </div>
  );
}

export default App;
