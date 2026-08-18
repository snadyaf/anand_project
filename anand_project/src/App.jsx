import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import DashboardPage from "./pages/DashboardPage"
import RelatoriosPage from "./pages/RelatoriosPage"
import './App.css'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/relatorios" element={<RelatoriosPage />} />
    </Routes>
  );
}


