import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from'../../assets/carlogo.png'
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';


const Header = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const logout = () =>{
    signOut(auth);
    navigate('/login');
  }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"  sticky="top"  className='back-drop hover'>
        <Container>
        <Navbar.Brand as={Link} to="/">
        <img
        src={logo}
        width="120"
        height="40"
        className="d-inline-block align-top"
        alt="car logo"
      />
         </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
           
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/" >Home</Nav.Link>
            <Nav.Link as={Link} to="/blogs">Blog</Nav.Link>
            <Nav.Link as={Link} to="/myitem">MyItem</Nav.Link>
            <Nav.Link as={Link} to="/manage">Manage Inventory</Nav.Link>
            {user?<Nav.Link onClick={logout}>Logout</Nav.Link>:<Nav.Link as={Link} to="/login">Login</Nav.Link>}
            
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;