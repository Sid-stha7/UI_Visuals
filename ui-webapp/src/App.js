import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import NavComponent from './components/Navbar/navbar';
import Footer from "./components/Footer/Footer"
import Homepage from "./components/Homepage/Homepage";

  
function App() {
  return (
    <div>
      <NavComponent />
      <Homepage />
      <Footer /> 
      {/* <Event/> */}
    </div>
  );
}

export default App;
