import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav_component from './components/navbar';
import TestSlider from './components/slider';


function App() {
  return (
    <div>
      <Nav_component />
      <TestSlider/>
    </div>
  );
}

export default App;
