import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Main from './containers/Main';
import { Grid } from 'semantic-ui-react';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Grid>
          <Grid.Column width={1} />
          <Grid.Column width={14} >
          <Main />
          </Grid.Column>
          <Grid.Column width={1} />
        </Grid>
    </div>
  );
}

export default App;
