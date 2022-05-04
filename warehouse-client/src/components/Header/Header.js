import React from 'react';
import './Header.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"  sticky="top" >
        <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
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