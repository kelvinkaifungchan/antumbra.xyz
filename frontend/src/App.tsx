import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Home } from './pages/Home';
import { Article } from './pages/Article';
import { Archive } from './pages/Archive';
import { Info } from './pages/Info';
import { CallForMedia } from './pages/CallforMedia';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  return (
    <div className="App animation">
      <Router>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/essay/:id" element={<Article type="essay"/>}/>
            <Route path="/visual/:id" element={<Article type="visual"/>}/>
            <Route path="/film/:id" element={<Article type="film"/>}/>
            <Route path="/archive" element={<Archive />}/>
            <Route path="/info" element={<Info />}/>
            <Route path="/callformedia" element={<CallForMedia />}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
