import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import Dashboard from "./pages/Dashboard"
import Relatorios from "./pages/Relatorios"
import './App.css'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/relatorios" element={<Relatorios />} />
    </Routes>
  );
}


