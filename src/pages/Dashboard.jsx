import React, { useState, useEffect } from "react";
import { Card, Button, ProgressBar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../css/animations.css";

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
    <div
      style={{
        padding: "2rem",
        backgroundColor: "#D5D5EE",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <h2
        className="anim-item-title"
        style={{
          color: "#3F3FA3",
          marginBottom: "2rem",
          fontSize: "2rem",
          fontWeight: "600",
        }}
      >
        Olá, {userName}!
      </h2>

      <Card
        className="anim-item-card1"
        style={{
          backgroundColor: "#A4A4E5",
          color: "#fff",
          borderRadius: "20px",
          padding: "2rem",
          boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
          width: "100%",
          maxWidth: "700px",
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
    </div>
  );
};

export default Dashboard;
