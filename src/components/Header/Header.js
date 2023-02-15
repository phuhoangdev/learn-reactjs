import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { NavLink, useNavigate } from "react-router-dom";

const Header = () =>{
  const navigage = useNavigate();

  const handleLogin = () => {
    navigage('/login');
  }

  const handleRegister = () => {
    navigage('/register');
  }

  return (
    <Navbar expand="lg" fixed="top">
      <Container fluid>
        <NavLink to="/" className='navbar-brand'>Logo</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className='nav-link'>Home</NavLink>
            <NavLink to="/users" className='nav-link'>Users</NavLink>
            <NavLink to="/admins" className='nav-link'>Admin</NavLink>
          </Nav>
          <Nav>
            <Button 
              variant='outline-dark' 
              className='me-3'
              onClick={() => handleLogin()}
            >
              Log in
            </Button>
            <Button 
              variant='dark'
              onClick={() => handleRegister()}
            >
              Sign up
            </Button>
            <NavDropdown title="Settings" id="basic-nav-dropdown">
              <NavDropdown.Item>
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item>
                Log out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;