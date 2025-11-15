import React from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/logo.png";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
  body, h1, h2, h3, h4, h5, h6, p, .btn, .card-title, .nav-link {
    font-family: 'Poppins', sans-serif;
  }
`;

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const StyledNavbar = styled(Navbar)`
  background-color: #fff !important;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 1rem;
  position: sticky;
  top: 0;
  z-index: 1000;

  .navbar-toggler {
    border-color: #3F3FA3 !important;
  }

  .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgb(63,63,163)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E") !important;
  }
`;

const BrandLogo = styled.img`
  height: 50px;
  width: auto;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const StyledNavLink = styled(Nav.Link)`
  color: #3F3FA3 !important;
  font-weight: 500;
  position: relative;
  margin: 0 0.5rem;
  transition: color 0.3s ease, transform 0.3s ease;
  animation: ${fadeInUp} 0.5s ease-out forwards;

  &:hover {
    color: #A4A4E5 !important;
    transform: scale(1.05);
  }

  &::after {
    content: "";
    display: block;
    height: 2px;
    width: 0;
    background: #A4A4E5;
    transition: width 0.3s;
    position: absolute;
    bottom: -4px;
    left: 0;
  }

  &:hover::after {
    width: 100%;
  }
`;

const Header = () => {
  return (
    <>
      <GlobalStyle />
      <StyledNavbar expand="lg" variant="light">
        <Container>
          <Navbar.Brand href="home">
            <BrandLogo src={logo} alt="Huggin Tampinhas" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <StyledNavLink href="home">Início</StyledNavLink>
              <StyledNavLink href="#about">Sobre</StyledNavLink>
              <StyledNavLink href="#how">Como Ajudar</StyledNavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </StyledNavbar>
    </>
  );
};

export default Header;
