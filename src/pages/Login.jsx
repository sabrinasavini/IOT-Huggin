import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Modal, Button, Form } from "react-bootstrap";

const StyledModalBody = styled(Modal.Body)`
  background: #d5d5ee;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h3`
  color: #3f3fa3;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const StyledLabel = styled(Form.Label)`
  color: #3f3fa3;
  font-weight: 600;
`;

const StyledInput = styled(Form.Control)`
  border-radius: 12px;
  border: 2px solid #3f3fa3;
  padding: 0.75rem;
  font-weight: 500;
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: 0.3s;

  &:focus {
    outline: none;
    border-color: #a4a4e5;
    box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.1),
      0 0 0 3px rgba(63, 63, 163, 0.2);
  }
`;

const LoginButton = styled(Button)`
  background: linear-gradient(90deg, #3f3fa3, #a4a4e5);
  color: #fff;
  font-weight: 600;
  padding: 0.75rem;
  border-radius: 12px;
  border: none;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: 0.3s all;
  width: 100%;
  margin-bottom: 1rem; 
  &:hover {
    filter: brightness(1.1);
    transform: translateY(-2px);
    box-shadow: 0 7px 20px rgba(0, 0, 0, 0.25);
  }
`;

const ForgotText = styled.div`
  color: #3f3fa3;
  font-size: 0.9rem;
  text-align: center;
`;

const ForgotLink = styled.a`
  color: #a4a4e5;
  text-decoration: none;
  font-weight: 600;

  &:hover {
    color: #3f3fa3;
    text-decoration: underline;
  }
`;


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
      <StyledModalBody>
        <Title>Entrar na Conta</Title>

        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3">
            <StyledLabel>CPF</StyledLabel>
            <StyledInput
              type="text"
              placeholder="000.000.000-00"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <StyledLabel>Senha</StyledLabel>
            <StyledInput
              type="password"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </Form.Group>

          <LoginButton
            type="submit"
          >
            Entrar
          </LoginButton>

          <ForgotText>
            Esqueceu a senha? <ForgotLink href="#">Clique aqui</ForgotLink>
          </ForgotText>
        </Form>
      </StyledModalBody>
    </Modal>
  );
};

export default Login;