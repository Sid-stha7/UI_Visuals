import logo from './images/logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar, Container} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Navbar bg="green" expand="lg" sticky="top">
        <Container>
          {/* <Navbar.Brand href="#home"><img src={logo} className ="logo" alt="logo"/></Navbar.Brand> */}
          <img src={logo} className ="logo" alt="logo"/>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className=" text-light">Home</Nav.Link>
              <Nav.Link href="#link" className=" text-light">About</Nav.Link>
              <Nav.Link href="#link" className=" text-light">Team</Nav.Link>
              <Nav.Link href="#link" className=" text-light">Events</Nav.Link>
              <Nav.Link href="#link" className=" text-light">Contacts</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}


export default App;
