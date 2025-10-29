import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

const HomeWrapper = () => {
  const navigate = useNavigate();
  const [userName] = useState("Fulano");

  // Função para navegar pro dashboard
  const goToDashboard = () => {
    navigate("/dashboard", { state: { userName } });
  };

  return <Home goToDashboard={goToDashboard} />;
};

// Wrapper para pegar o state do usuário e enviar para o Dashboard
const DashboardWrapper = () => {
  const location = useLocation();
  const userName = location.state?.userName || "Usuário";
  return <Dashboard userName={userName} />;
};

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomeWrapper />} />
        <Route path="/dashboard" element={<DashboardWrapper />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
