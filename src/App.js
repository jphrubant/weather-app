import React from 'react';
import './App.css';

import AddBar from './components/AddBar';
import OneCity from './components/OneCity'; 
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <AddBar />
      <OneCity />
      <Footer />
    </div>
  );
}

export default App;
