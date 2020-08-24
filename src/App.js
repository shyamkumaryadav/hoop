import React from 'react';
import Hadder from "./nav/Hadder";
import Cards from "./components/Cards";

function App() {
  return (
    <React.Fragment>
      <header className="App-header">
        <Hadder />
        <Cards />
      </header>
    </React.Fragment>
  );
}

export default App;
