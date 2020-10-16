import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import FormData from './FormData'
import Header from './Header'

function App() {
  return (
    <div style={{width: "100%"}}>
    <div className="App">
        <Header />
        <FormData />
    </div>
    </div>
  );
}

export default App;
