import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import HistoricoTampinhas from "./pages/HistoricoTampinhas";


const HomeWrapper = () => {
  const navigate = useNavigate();
  const [userName] = useState("Username");
  const goToDashboard = () => {
    navigate("/dashboard", { state: { userName } });
  };

  return <Home goToDashboard={goToDashboard} />;
};

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
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomeWrapper />} />
        <Route path="/dashboard" element={<DashboardWrapper />} />
        <Route path="/historico" element={<HistoricoTampinhas />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
