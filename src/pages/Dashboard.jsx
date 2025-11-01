import React, { useState, useEffect } from "react";
import { Card, Button, Form, Row, Col, ProgressBar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../css/animations.css";

// --- Suas funções (fetchTampinhas, postTampinhas) ---
const fetchTampinhas = async (userId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(120); 
    }, 500);
  });
};

const postTampinhas = async (userId, quantidade) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 300);
  });
};
// --- Fim das Funções ---


const Dashboard = ({ userName, userId }) => {
  // --- Sua Lógica (useState, useEffect, etc.) ---
  const [tampinhas, setTampinhas] = useState(0);
  const [novaTampinhas, setNovaTampinhas] = useState("");
  const navigate = useNavigate(); 

  useEffect(() => {
    const loadTampinhas = async () => {
      const qtd = await fetchTampinhas(userId);
      setTampinhas(qtd);
    };
    loadTampinhas();
  }, [userId]);

  const adicionarTampinhas = async () => {
    const qtd = parseInt(novaTampinhas);
    if (!isNaN(qtd) && qtd > 0) {
      const success = await postTampinhas(userId, qtd);
      if (success) {
        setTampinhas(tampinhas + qtd);
        setNovaTampinhas("");
      } else {
        alert("Erro ao cadastrar tampinhas. Tente novamente.");
      }
    } else {
      alert("Digite um número válido de tampinhas.");
    }
  };

  const meta = 1000;
  const progresso = Math.min((tampinhas / meta) * 100, 100);

  return (
    <div
      style={{ padding: "2rem", backgroundColor: "#D5D5EE", minHeight: "100vh" }}
    >
      <h2 
        className="anim-item-title" 
        style={{ color: "#3F3FA3", marginBottom: "2rem" }}
      >
        Olá, {userName}!
      </h2>

      <Row className="g-4">
        <Col md={6}>
          <Card
            className="anim-item-card1"
            style={{
              backgroundColor: "#A4A4E5",
              color: "#fff",
              borderRadius: "20px",
              padding: "1.5rem",
              boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
            }}
          >
            <h4>Tampinhas Cadastradas</h4>
            <h1 style={{ fontSize: "3rem", margin: "1rem 0" }}>{tampinhas}</h1>
            <ProgressBar
              now={progresso}
              label={`${Math.round(progresso)}%`}
              style={{ height: "25px", borderRadius: "12px" }}
              variant="light"
            />
            <Button
              onClick={() => navigate("/historico")}
              style={{
                marginTop: "1rem",
                background: "#3F3FA3",
                color: "#fff",
                borderRadius: "12px",
                fontWeight: "600",
                padding: "0.5rem 1.2rem",
                border: "none",
              }}
            >
              Ver todas as tampinhas
            </Button>
          </Card>
        </Col>

        <Col md={6}>
          <Card
            className="anim-item-card2"
            style={{
              backgroundColor: "#fff",
              color: "#3F3FA3",
              borderRadius: "20px",
              padding: "1.5rem",
              boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
            }}
          >
            <h4>Adicionar Tampinhas</h4>
            <Form className="mt-3">
              <Form.Group className="mb-3">
                <Form.Label>Quantidade</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Digite a quantidade"
                  value={novaTampinhas}
                  onChange={(e) => setNovaTampinhas(e.target.value)}
                  style={{ borderRadius: "12px" }}
                />
              </Form.Group>
              <Button
                onClick={adicionarTampinhas}
                style={{
                  background: "linear-gradient(90deg, #3F3FA3, #A4A4E5)",
                  color: "#fff",
                  borderRadius: "12px",
                  fontWeight: "600",
                  padding: "0.6rem 1.5rem",
                  border: "none",
                }}
              >
                Adicionar
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;