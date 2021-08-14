import React, { Component } from 'react';
import logo from '../images/logo_new.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar, Container} from 'react-bootstrap'

class Nav_component extends Component {
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
                        <Nav.Link href="#home" className="nav-element text-dark">Home</Nav.Link>
                        <Nav.Link href="#link" className="nav-element text-dark">About</Nav.Link>
                        <Nav.Link href="#link" className="nav-element text-dark">Team</Nav.Link>
                        <Nav.Link href="#link" className="nav-element text-dark">Events</Nav.Link>
                        <Nav.Link href="#link" className="nav-element text-dark">Contacts</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
  }
}

export default Nav_component;