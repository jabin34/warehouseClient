import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from'../../assets/carlogo.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"  sticky="top" >
        <Container>
        <Navbar.Brand as={Link} to="/">
        <img
        src={logo}
        width="80"
        height="30"
        className="d-inline-block align-top"
        alt="car logo"
      />
         </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" >Home</Nav.Link>
            <Nav.Link as={Link} to="/blogs">Blog</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/myitem">MyItem</Nav.Link>
            <Nav.Link as={Link} to="/manage">Manage Inventory</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;