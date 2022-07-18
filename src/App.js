import React from 'react';
import logo from './logo.svg';
import { Link } from "react-router-dom";
import { Counter } from './features/counter/Counter';
import './App.css';
import './getstyle.less';
import './scss/mystyle.sass'
import './scss/scssstyle.scss'
import Header from "./header.jsx"
import Userlist from './userlist';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Link to="/home">home</Link>
      <Link to="/redux">Redux</Link>
        {/* <Userlist/> */}
      </header>
      
    </div>
  );
}

export default App;
