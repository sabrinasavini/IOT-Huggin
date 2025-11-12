import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Card, Button } from "react-bootstrap";
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

const HistoricoContainer = styled.div`
  padding: 2rem;
  background-color: #d5d5ee;
  min-height: 100vh;
`;

const HistoricoTitle = styled.h2`
  color: #3f3fa3;
  margin-bottom: 2rem;
  font-weight: 700;
  opacity: 0;
  animation: ${fadeInUp} 0.5s ease-out 0.1s forwards;
`;

const VoltarButton = styled(Button)`
  border-radius: 12px;
  font-weight: 600;
  margin-bottom: 1.5rem;
  background-color: #3f3fa3;
  border-color: #3f3fa3;

  &:hover {
    background-color: #3f3fa3;
    border-color: #3f3fa3;
  }

  opacity: 0;
  animation: ${fadeInUp} 0.5s ease-out 0.2s forwards;
`;

const StyledCard = styled(Card)`
  border-radius: 20px;
  padding: 1.5rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  border: none;
  background-color: #ffffff;

  opacity: 0;
  animation: ${fadeInUp} 0.5s ease-out 0.3s forwards;
`;

const HistoricoLista = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TampinhaItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1.5rem;
  background-color: #f8f9fa;
  border-radius: 12px;
  border: 1px solid #e9ecef;
  transition: all 0.2s ease;

  opacity: 0;
  animation: ${fadeInUp} 0.5s ease-out forwards;

  &:hover {
    background-color: #f8f7ff;
    border-color: #a4a4e5;
    box-shadow: 0 4px 10px rgba(0, 0, 213, 0.1);
    cursor: pointer;
  }
`;

const TampinhaItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  strong {
    font-size: 1.1rem;
    color: #3f3fa3;
    font-weight: 600;
  }

  span {
    font-size: 0.9rem;
    color: #6c757d;
  }
`;

const TampinhaItemID = styled.div`
  font-size: 0.85rem;
  color: #6c757d;
  font-family: "Courier New", Courier, monospace;
`;

const generateId = () =>
  `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 9)}`;

const HistoricoTampinhas = ({ userId }) => {
  const [historico, setHistorico] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const mockHistorico = [
      { data: "2025-11-01", hora: "09:42" },
      { data: "2025-10-30", hora: "14:15" },
      { data: "2025-10-28", hora: "11:05" },
    ];
    const historicoComId = mockHistorico.map((item) => ({
      id: generateId(),
      ...item,
    }));
    setHistorico(historicoComId);
  }, [userId]);

  return (
    <HistoricoContainer>
      <HistoricoTitle>Histórico de Tampinhas</HistoricoTitle>

      <VoltarButton variant="secondary" onClick={() => navigate(-1)}
        className="btn-hover">
        Voltar
        
      </VoltarButton>

      <StyledCard>
        <HistoricoLista>
          {historico.map((item, index) => (
            <TampinhaItem
              key={item.id}
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <TampinhaItemInfo>
                <strong>{item.data}</strong>
                <span>às {item.hora}</span>
              </TampinhaItemInfo>

              <TampinhaItemID>ID: {item.id}</TampinhaItemID>
            </TampinhaItem>
          ))}
        </HistoricoLista>
      </StyledCard>
    </HistoricoContainer>
  );
};

export default HistoricoTampinhas;