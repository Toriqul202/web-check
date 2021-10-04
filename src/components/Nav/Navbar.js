import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbars.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const Navbars = () => {
    return (
        <div>
            <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand >Karate Hero</Navbar.Brand>
    <Nav className="ms-auto">
      <Link className="link" to="/">Home</Link>
      <Link className="link" to="/about">About</Link>
      <Link className="link" to="/services">Serivces</Link>
      <Link className="link" to="/contact">Contact</Link>
    </Nav>
    </Container>
  </Navbar>
        </div>
    );
};

export default Navbars;