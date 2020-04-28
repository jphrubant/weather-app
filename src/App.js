import React from 'react';
import './App.css';

import OneCity from './components/OneCity'; 
import AddBar from './components/AddBar';

function App() {
  return (
    <div className="App">
      <h1>Weather App!!!!</h1>
      <AddBar />
      <OneCity />
    </div>
  );
}

export default App;
