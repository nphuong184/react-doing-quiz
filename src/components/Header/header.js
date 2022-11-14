import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink,useNavigate } from "react-router-dom";
import "./header.scss";

const Header = () => {
  const navigate = useNavigate();
  const handleLogin = () =>{
    navigate('/login')
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
            <Button variant="outline-dark" className="btn-login" onClick={()=>handleLogin()}>
              Login
            </Button>
            <Button variant="outline-dark" className="btn-signup">
              Sign up
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
