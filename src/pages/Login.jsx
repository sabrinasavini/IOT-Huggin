import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const Login = ({ show, handleClose }) => {
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(show);
  }, [show]);

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`CPF: ${cpf}\nSenha: ${senha}\nLogin simulado!`);
    handleClose();
  };
  const styles = {
    modalBody: {
      background: "#D5D5EE",
      borderRadius: "20px",
      padding: "2rem",
      boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
    },
    title: {
      color: "#3F3FA3",
      fontWeight: "700",
    },
    label: {
      color: "#3F3FA3",
      fontWeight: "600",
    },
    input: {
      borderRadius: "12px",
      border: "2px solid #3F3FA3",
      padding: "0.75rem",
      fontWeight: "500",
      boxShadow: "inset 0 2px 5px rgba(0,0,0,0.1)",
      transition: "0.3s",
    },
    button: {
      background: "linear-gradient(90deg, #3F3FA3, #A4A4E5)",
      color: "#fff",
      fontWeight: "600",
      padding: "0.75rem",
      borderRadius: "12px",
      border: "none",
      boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
      transition: "0.3s all",
    },
    forgotText: {
      color: "#3F3FA3",
      fontSize: "0.9rem",
    },
    forgotLink: {
      color: "#A4A4E5",
      textDecoration: "none",
    },
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      backdrop="static"
      keyboard={false}
      dialogClassName="login-modal"
      contentClassName={`login-content ${animate ? "animate-in" : "animate-out"}`}
    >
      <Modal.Body style={styles.modalBody}>
        <h3 className="text-center mb-4" style={styles.title}>
          Entrar na Conta
        </h3>

        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3">
            <Form.Label style={styles.label}>CPF</Form.Label>
            <Form.Control
              type="text"
              placeholder="000.000.000-00"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              style={styles.input}
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label style={styles.label}>Senha</Form.Label>
            <Form.Control
              type="password"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              style={styles.input}
            />
          </Form.Group>

          <Button
            type="submit"
            className="w-100 mb-3"
            style={styles.button}
            onMouseEnter={(e) => (e.target.style.filter = "brightness(1.1)")}
            onMouseLeave={(e) => (e.target.style.filter = "brightness(1)")}
          >
            Entrar
          </Button>

          <div className="text-center" style={styles.forgotText}>
            Esqueceu a senha?{" "}
            <a href="#" style={styles.forgotLink}>
              Clique aqui
            </a>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default Login;
