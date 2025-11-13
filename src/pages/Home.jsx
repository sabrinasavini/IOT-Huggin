import React, { useState } from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import { Row, Col, Button, Card, Container } from "react-bootstrap";
import { FaRecycle, FaHandsHelping, FaBullhorn } from "react-icons/fa";
import iconHuggin from "../assets/icon-huggin.png";
import Login from "./Login";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

  body, h1, h2, h3, h4, h5, h6, p, .btn, .card-title, .nav-link {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }
`;

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const floatY = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

const gradientMove = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const waveSlide = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;


const PageWrapper = styled.div`
  overflow-x: hidden;
  width: 100%;
  margin: 0;
  padding: 0;
`;

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  background: linear-gradient(270deg, #3F3FA3, #B4B4D5, #A4A4E5);
  background-size: 600% 600%;
  animation: ${gradientMove} 20s ease infinite;
  position: relative;
`;

const HeroContent = styled.div`
  animation: ${fadeInUp} 1s ease-out forwards;
  opacity: 0;
  animation-delay: 0.2s;
  animation-fill-mode: forwards;

  h1, p {
    text-shadow: 1px 1px 4px rgba(0,0,0,0.3);
  }
`;

const PrimaryButton = styled(Button)`
  background: linear-gradient(90deg, #3F3FA3, #A4A4E5);
  color: #fff !important;
  border-radius: 12px !important;
  font-weight: 600 !important;
  padding: 0.6rem 1.5rem !important;
  border: none !important;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

const AboutSection = styled.section`
  background-color: #D5D5EE;
  padding: 5rem 0;
  min-height: 400px;
  text-align: center;

  h2 {
    color: #3F3FA3;
    font-weight: 600;
    animation: ${fadeInUp} 0.6s ease-out forwards;
  }

  p {
    color: #3F3FA3;
    font-weight: 400;
    animation: ${fadeInUp} 0.8s ease-out forwards;
  }
`;

const FloatingImage = styled.img`
  max-width: 220px;
  animation: ${floatY} 4s ease-in-out infinite, ${fadeInUp} 1.2s ease-out;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const WaveWrapper = styled.div`
  line-height: 0;
  overflow: hidden;

  .wave-inner {
    display: flex;
    width: 200%;
    animation: ${waveSlide} 15s linear infinite;

    svg {
      width: 50%;
      height: 120px;
      display: block;
    }
  }
`;

const WaveDivider = ({ color = "#ffffff" }) => (
  <WaveWrapper>
    <div className="wave-inner">
      <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path
          fill={color}
          d="M0,160 C240,80 480,240 720,160 C960,80 1200,240 1440,160 L1440,320 L0,320 Z"
        />
      </svg>
      <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path
          fill={color}
          d="M0,160 C240,80 480,240 720,160 C960,80 1200,240 1440,160 L1440,320 L0,320 Z"
        />
      </svg>
    </div>
  </WaveWrapper>
);

const WaveFlipped = styled.div`
  transform: rotate(180deg);
`;

const HowSection = styled.section`
  background-color: #D5D5EE;
  padding: 5rem 0;
  text-align: center;

  h2 {
    color: #3F3FA3;
    margin-bottom: 3rem;
    animation: ${fadeInUp} 0.6s ease-out forwards;
  }
`;

const HowCard = styled(Card)`
  background-color: #D5D5EE;
  border: none;
  border-radius: 20px;
  padding: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  opacity: 0;
  animation: ${fadeInUp} 0.8s ease-out forwards;
  animation-delay: ${({ delay }) => delay || "0s"};

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(63, 63, 163, 0.2);
  }

  div {
    color: #3F3FA3;
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  h5, p {
    color: #3F3FA3;
  }
`;

const Home = () => {
  const [showLogin, setShowLogin] = useState(false);
  const handleOpenLogin = () => setShowLogin(true);
  const handleCloseLogin = () => setShowLogin(false);

  const helpOptions = [
    {
      icon: <FaRecycle />,
      title: "Coletando Tampinhas",
      text: "Separe tampinhas plásticas em casa e leve até um ponto de coleta.",
      delay: "0.2s",
    },
    {
      icon: <FaHandsHelping />,
      title: "Doando Tampinhas",
      text: "Faça doações regulares e ajude a manter projetos de reciclagem ativos.",
      delay: "0.4s",
    },
    {
      icon: <FaBullhorn />,
      title: "Divulgando",
      text: "Compartilhe nossa iniciativa com amigos e nas redes sociais.",
      delay: "0.6s",
    },
  ];

  return (
    <PageWrapper>
      <GlobalStyle />

      <HeroSection id="home">
        <HeroContent>
          <h1 className="display-3 mb-4 anim-item-title">Participe e Ganhe Pontos</h1>
          <p className="lead mb-4">
            Participe do Huggin Tampinhas e ajude a reciclar, proteger o meio ambiente e apoiar causas sociais.
          </p>
          <PrimaryButton size="lg" onClick={handleOpenLogin}>
            Ajudar e Pontuar
          </PrimaryButton>
        </HeroContent>
      </HeroSection>

      <WaveDivider color="#D5D5EE" />

      <AboutSection id="about">
        <Container>
          <Row className="align-items-center justify-content-center g-4">
            <Col md={5}>
              <h2>Sobre o Huggin Tampinhas</h2>
              <p>
                Coletamos tampinhas de plástico para reciclagem, transformando resíduos em recursos e ajudando projetos sociais e ambientais. Cada tampinha conta!
              </p>
              <PrimaryButton size="lg" onClick={handleOpenLogin}>
                Saiba Mais
              </PrimaryButton>
            </Col>
            <Col md={5}>
              <FloatingImage src={iconHuggin} alt="Logo do Huggin Tampinhas" />
            </Col>
          </Row>
        </Container>
      </AboutSection>

      <WaveFlipped>
        <WaveDivider color="#D5D5EE" />
      </WaveFlipped>

      <HowSection id="how">
        <Container>
          <h2>Como Você Pode Ajudar</h2>
          <Row className="g-4 justify-content-center">
            {helpOptions.map((item, i) => (
              <Col key={i} md={4}>
                <HowCard delay={item.delay}>
                  <div>{item.icon}</div>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.text}</Card.Text>
                </HowCard>
              </Col>
            ))}
          </Row>
        </Container>
      </HowSection>

      <Login show={showLogin} handleClose={handleCloseLogin} />
    </PageWrapper>
  );
};

export default Home;
