import { useState } from 'react'
import { Routes, Route } from "react-router"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Relatorios from "./pages/Relatorios"
import './App.css'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/relatorios" element={<Relatorios />} />
    </Routes>
  );
}


