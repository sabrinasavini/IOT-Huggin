import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#3F3FA3", color: "#D5D5EE", padding: "2rem 0" }}>
      <Container className="text-center">
        <p>© 2025 Huggin. Todos os direitos reservados.</p>
      </Container>
    </footer>
  );
};

export default Footer;
