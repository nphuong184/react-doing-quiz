import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "./header.scss";

const Header = () => {
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
            <Button variant="outline-dark" className="btn-login">
              Login
            </Button>
            <Button variant="outline-dark" className="btn-signup">
              Sign up
            </Button>
            {/* <Nav>
              <NavDropdown title="Setting" id="basic-nav-dropdown">
                <NavDropdown.Item>Login</NavDropdown.Item>
                <NavDropdown.Item>Logout</NavDropdown.Item>
                <NavDropdown.Item>Profile</NavDropdown.Item>
              </NavDropdown>
            </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
