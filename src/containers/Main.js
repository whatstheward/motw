import React from 'react';
import {Route, Switch} from "react-router-dom"
import HomePage from '../components/Home'
import Login from '../components/Login'
import CharacterSheets from './character_sheets';
import Moves from './moves'
import { connect } from 'react-redux';
import '../css/Main.css'

class Main extends React.Component {

  componentDidMount(){
    fetch('http://localhost:3000/playbooks')
    .then(res => res.json())
    .then(data => this.props.storePlaybooks(data))
  }

  render(){
    return (
        <div className="main">
          <Switch>
            <Route path="/home" render={()=><HomePage/>}/>
            <Route path="/login" render={()=><Login/>}/>
            <Route path="/charactersheet" render={()=><CharacterSheets/>}/>
            <Route path="/moves" render={()=><Moves/>}/>
          </Switch>
        </div>
      )
    }
}

const mapDispatchToProps = (dispatch) =>{
  return{
      storePlaybooks: (data) => dispatch({type:"ADD PLAYBOOKS", data: data})
  }
}

const mapStatetoProps=state=>{
  
}

export default connect(mapStatetoProps, mapDispatchToProps)(Main)