import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import NavComponent from './components/Navbar/navbar';
import TestSlider from './components/Slidebar/slider';
import Footer from "./components/Footer/Footer"
import Portfolio from "./components/WHO_AM_I/Portfolio"
import About from "./components/About/about"
import Contact_component from './components/Contact/contacts';
import Banner from './components/Slidebar/Banner';
import Event from './components/Event page/event'
  
function App() {
  return (
    <div>
      <NavComponent />
      {/* <TestSlider /> */}
      <Banner/>
      <About/>
      <Portfolio/>
      <Contact_component />
      <Footer/>
    </div>
  );
}

export default App;
