import React from 'react';
import {Route, Link, Switch} from "react-router-dom"
import HomePage from '../components/Home'
import Navbar from '../components/Navbar';
import Login from '../components/Login'
import CharacterSheets from './character_sheets';
import Moves from './moves'
import { Grid } from 'semantic-ui-react';

const Main = () => {

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

export default Main