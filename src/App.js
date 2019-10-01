import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Main from './containers/Main';
import { Grid } from 'semantic-ui-react';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Main />
    </div>
  );
}

export default App;
