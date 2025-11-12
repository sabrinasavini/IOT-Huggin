import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap"; 
import { useNavigate } from "react-router-dom";
import "../css/HistoricoTampinhas.css"; 

const generateId = () => `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 9)}`;

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
    <div className="historico-container">
      
      <h2 className="historico-title">Histórico de Tampinhas</h2>
      
      <Button
        variant="secondary"
        className="btn-voltar" 
        onClick={() => navigate(-1)}
      >
        Voltar
      </Button>
      
      <Card className="historico-card">
        <div className="historico-lista">
          
          {historico.map((item, index) => (
            <div 
              key={item.id} 
              className="tampinha-item anim-item"
              
              style={{ animationDelay: `${0.4 + index * 0.1}s` }} 
            >
              
              <div className="tampinha-item-info">
                <strong>{item.data}</strong>
                <span>às {item.hora}</span>
              </div>
              
              <div className="tampinha-item-id">
                ID: {item.id}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default HistoricoTampinhas;