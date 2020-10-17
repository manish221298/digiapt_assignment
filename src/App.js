import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header'
import QuestionForms from './QuestionForms'


function App() {
  return (
    <div style={{width: "100%"}}>
    <div className="App">
        <Header />
        <QuestionForms />
    </div>
    </div>
  );
}

export default App;
