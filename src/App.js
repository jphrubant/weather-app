import React from 'react';
import './App.css';

import AddBar from './components/AddBar';
import OneCity from './components/OneCity'; 
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <AddBar />
      <OneCity />
      <Footer />
    </div>
  );
}

export default App;
