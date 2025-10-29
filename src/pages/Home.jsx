import React, { useState } from "react";
import { Row, Col, Button, Card, Container } from "react-bootstrap";
import { FaRecycle, FaHandsHelping, FaBullhorn } from "react-icons/fa";
import iconHuggin from "../assets/icon-huggin.png";
import Login from "./Login"; // Import do componente de login
import "../animations.css";

const WaveDivider = ({ color }) => (
  <div style={{ lineHeight: 0, overflow: "hidden" }}>
    <svg viewBox="0 0 1440 320" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "100px" }}>
      <path fill={color || "#ffffff"} fillOpacity="1" d="M0,192L48,181.3C96,171,192,149,288,160C384,171,480,213,576,240C672,267,768,277,864,250.7C960,224,1056,160,1152,138.7C1248,117,1344,139,1392,149.3L1440,160L1440,320H0Z"></path>
    </svg>
  </div>
);

const Home = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleOpenLogin = () => setShowLogin(true);
  const handleCloseLogin = () => setShowLogin(false);

  return (
    <div style={{ overflowX: "hidden", width: "100%", margin: 0, padding: 0 }}>
      {/* Hero Section */}
      <section
        className="text-white text-center d-flex align-items-center justify-content-center animated-gradient"
        id="home"
        style={{ height: "100vh", position: "relative", overflow: "hidden" }}
      >
        <div style={{ position: "relative", zIndex: 1 }}>
          <h1 className="display-3 mb-4" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
            Participe e Ganhe Pontos
          </h1>
          <p className="lead mb-4" style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}>
            Participe do Huggin Tampinhas e ajude a reciclar, proteger o meio ambiente e apoiar causas sociais.
          </p>
          <Button
            variant="light"
            size="lg"
            className="btn-hover"
            style={{ backgroundColor: "#A4A4E5", color: "#fff", border: "none" }}
            onClick={handleOpenLogin}
          >
            Ajudar e Pontuar
          </Button>
        </div>
      </section>

      <WaveDivider color="#D5D5EE" />

      {/* Sobre Section */}
      <section className="py-5 d-flex align-items-center justify-content-center" id="about" style={{ backgroundColor: "#D5D5EE", minHeight: "400px" }}>
        <Container>
          <Row className="align-items-center justify-content-center g-4">
            <Col md={5} className="text-center text-md-start">
              <h2 className="mb-3" style={{ color: "#3F3FA3" }}>Sobre o Huggin Tampinhas</h2>
              <p className="mb-4" style={{ color: "#3F3FA3", fontSize: "1.1rem" }}>
                Coletamos tampinhas de plástico para reciclagem, transformando resíduos em recursos e ajudando projetos sociais e ambientais. Cada tampinha conta!
              </p>
              <Button
                variant="light"
                size="lg"
                className="btn-hover"
                style={{ backgroundColor: "#A4A4E5", color: "#fff", border: "none" }}
                onClick={handleOpenLogin}
              >
                Saiba Mais
              </Button>
            </Col>
            <Col md={5} className="text-center">
              <img src={iconHuggin} alt="Logo do Huggin Tampinhas" className="img-fluid image-float" style={{ maxWidth: "220px" }} />
            </Col>
          </Row>
        </Container>
      </section>

      <div style={{ transform: "rotate(180deg)" }}>
        <WaveDivider color="#B4B4D5" />
      </div>

      {/* Como Ajudar Section */}
      <section className="py-5" id="how" style={{ backgroundColor: "#B4B4D5" }}>
        <Container>
          <h2 className="text-center mb-5" style={{ color: "#3F3FA3" }}>Como Você Pode Ajudar</h2>
          <Row className="g-4 justify-content-center">
            {[
              { icon: <FaRecycle />, title: "Coletando Tampinhas", text: "Separe tampinhas plásticas em casa e leve até um ponto de coleta." },
              { icon: <FaHandsHelping />, title: "Doando Tampinhas", text: "Faça doações regulares e ajude a manter projetos de reciclagem ativos." },
              { icon: <FaBullhorn />, title: "Divulgando", text: "Compartilhe nossa iniciativa com amigos e nas redes sociais." },
            ].map((item, i) => (
              <Col key={i} md={4}>
                <Card className="h-100 shadow-sm text-center p-3 card-hover" style={{ backgroundColor: "#D5D5EE" }}>
                  <div style={{ color: "#3F3FA3", fontSize: "2.5rem", marginBottom: "1rem" }}>{item.icon}</div>
                  <Card.Title style={{ color: "#3F3FA3" }}>{item.title}</Card.Title>
                  <Card.Text style={{ color: "#3F3FA3" }}>{item.text}</Card.Text>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Componente de Login */}
      <Login show={showLogin} handleClose={handleCloseLogin} />
    </div>
  );
};

export default Home;
