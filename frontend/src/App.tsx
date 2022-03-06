import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Home } from './pages/Home';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header>
      {/* <Home/>
      <Router>
          <Route path="/"/>
      </Router> */}

    </div>
  );
}

export default App;
