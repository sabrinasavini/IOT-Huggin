import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/logo.png";
import '../animations.css';

const Header = () => {
  return (
    <Navbar
      expand="lg"
      style={{
        backgroundColor: '#ffffff',
        boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
        padding: '0.5rem 1rem',
      }}
      variant="light"
      sticky="top"
    >
      <Container>
        <Navbar.Brand href="home">
          <img
            src={logo}
            alt="Huggin Tampinhas"
            className="logo-animate"
            style={{ height: "50px", width: "auto" }}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="home" className="nav-link-modern">Início</Nav.Link>
            <Nav.Link href="#about" className="nav-link-modern">Sobre</Nav.Link>
            <Nav.Link href="#how" className="nav-link-modern">Como Ajudar</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
