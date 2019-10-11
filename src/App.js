import React from 'react';
import Navbar from './components/Navbar'
import Main from './containers/Main';
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react';

class App extends React.Component {
  

  render(){
    return (
      <>
          <Navbar />
          <Main />
      </>
    )
  }
}

export default connect()(App);
