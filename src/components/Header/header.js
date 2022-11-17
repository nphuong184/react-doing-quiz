import { Button, NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import "./header.scss";

const Header = () => {
  // state cua redux
  const isAuthenticated = useSelector(state => state.user.isAuthenticated)
  const account = useSelector(state => state.user.account)
  console.log(account);
  console.log(isAuthenticated);

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login')
  }

  const handleRegister = () => {
    navigate('/register')
  }

  return (
    <div className="header-container">
      <Navbar bg="light" expand="lg">
        <Container>
          <NavLink to="/" className="navbar-brand">
            PAT QUIZ
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/users" className="nav-link">
                Users
              </NavLink>
              <NavLink to="/admins" className="nav-link">
                Admin
              </NavLink>
            </Nav>
            <Nav>
              {isAuthenticated === false ?
                <>
                  <Button variant="outline-dark" className="btn-login" onClick={() => handleLogin()}>
                    Login
                  </Button>
                  <Button variant="outline-dark" className="btn-signup" onClick={() => handleRegister()}>
                    Sign up
                  </Button>
                </> 
                :
                <NavDropdown title="Setting" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.2">Logout</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Profile</NavDropdown.Item>
                </NavDropdown>
              }

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
