import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../images/logo.png';
import './navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar, Container} from 'react-bootstrap'

class nav_component extends React.Component {
  render() {
    return (
        <div className="Navbar">
            <Navbar bg="white" expand="lg" sticky="top">
                <Container>
                    {/* <Navbar.Brand href="#home"><img src={logo} className ="logo" alt="logo"/></Navbar.Brand> */}
                    <img src={logo} className ="logo" alt="logo"/>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className=" text-dark">Home</Nav.Link>
                        <Nav.Link href="#link" className=" text-dark">About</Nav.Link>
                        <Nav.Link href="#link" className=" text-dark">Team</Nav.Link>
                        <Nav.Link href="#link" className=" text-dark">Events</Nav.Link>
                        <Nav.Link href="#link" className=" text-dark">Contacts</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
  }
}

export default nav_component;