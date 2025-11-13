import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import { Card, Button, ProgressBar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
`;

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

  body, h1, h2, h3, h4, h5, h6, p, .btn, .card-title, .nav-link, input, button {
    font-family: 'Poppins', sans-serif;
  }

  .anim-item-title,
  .anim-item-card1,
  .anim-item-card2 {
    opacity: 0;
    animation: ${fadeInUp} 0.5s ease-out forwards;
  }

  .anim-item-title {
    animation-delay: 0.1s;
  }

  .anim-item-card1 {
    animation-delay: 0.2s;
  }

  .anim-item-card2 {
    animation-delay: 0.3s;
  }

  .btn-hover {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .btn-hover:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  .card-hover {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .card-hover:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(63, 63, 163, 0.2);
  }
  
  .image-float {
    animation: ${float} 4s ease-in-out infinite;
  }
`;

const DashboardContainer = styled.div`
  padding: 2rem;
  background-color: #d5d5ee;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

const Title = styled.h2`
  color: #3f3fa3;
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: 600;
`;

const StyledCard = styled(Card)`
  background-color: #a4a4e5;
  color: #fff;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 700px;
  border: none;
`;

const TampinhasCount = styled.h1`
  font-size: 3rem;
  margin: 1rem 0;
  font-weight: 700;
`;

const StyledProgressBar = styled(ProgressBar)`
  height: 25px;
  border-radius: 12px;
`;

const HistoryButton = styled(Button)`
  margin-top: 1rem;
  background: #3f3fa3;
  color: #fff;
  border-radius: 12px;
  font-weight: 600;
  padding: 0.5rem 1.2rem;
  border: none;
  transition: background-color 0.2s ease;

  &:hover {
    background: #2c2c7c;
  }
`;

const fetchTampinhas = async (userId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(38);
    }, 500);
  });
};

const Dashboard = ({ userName, userId }) => {
  const [tampinhas, setTampinhas] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const loadTampinhas = async () => {
      const qtd = await fetchTampinhas(userId);
      setTampinhas(qtd);
    };
    loadTampinhas();
  }, [userId]);

  const meta = 1000;
  const progresso = Math.min((tampinhas / meta) * 100, 100);

  return (
    <>
      <GlobalStyle />
      <DashboardContainer>
        <Title className="anim-item-title">Olá, {userName}!</Title>

        <StyledCard className="anim-item-card1 card-hover">
          <h4 style={{ fontSize: "1.5rem" }}>
            Minhas Tampinhas
          </h4>
          <TampinhasCount>{tampinhas}</TampinhasCount>
          <StyledProgressBar
            now={progresso}
            label={`${Math.round(progresso)}%`}
            variant="light"
          />
          <HistoryButton
            onClick={() => navigate("/historico")}
            className="btn-hover"
          >
            Ver todas as tampinhas
          </HistoryButton>
        </StyledCard>
      </DashboardContainer>
    </>
  );
};

export default Dashboard;