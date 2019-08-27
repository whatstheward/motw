import React from 'react';
import logo from './logo.svg';
import {Route, Link, Switch} from "react-router-dom"
import './App.css';
import HomePage from './components/Home.js'
import Navbar from './components/Navbar';
import Login from './components/Login'
import CharacterSheets from './containers/character_sheets';
import Moves from './containers/moves'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/home" render={()=><HomePage/>}/>
        <Route path="/login" render={()=><Login/>}/>
        <Route path="/charactersheet" render={()=><CharacterSheets/>}/>
        <Route path="/moves" render={()=><Moves/>}/>
      </Switch>
    </div>
  );
}

export default App;
