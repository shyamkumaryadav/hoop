import React from 'react';
import Hadder from "./nav/Hadder";
import Cards from "./components/Cards";
import TestRoute from './components/TestRoute';
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <React.Fragment>
        <header className="App-header">
          <Hadder />
          <Route path='/' exact component={Cards} />
          <Route path='/:name' exact component={TestRoute} />
        </header>
      </React.Fragment>
    </Router>
  );
}

export default App;
