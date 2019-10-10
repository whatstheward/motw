import React from 'react';
import Navbar from './components/Navbar'
import Main from './containers/Main';
import { Grid } from 'semantic-ui-react';

function App() {
  return (
    <div>
        <Navbar />
        <Main />
    </div>
  );
}

export default App;
