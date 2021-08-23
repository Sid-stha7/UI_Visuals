import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComponent from './components/Navbar/navbar';
import TestSlider from './components/Slidebar/slider';
import Footer from "./components/Footer/Footer"
import Portfolio from "./components/WHO_AM_I/Portfolio"
function App() {
  return (
    <div>
      <NavComponent />
      <TestSlider/>
      <Portfolio/>
      <Footer/>
      
    </div>
  );
}

export default App;
