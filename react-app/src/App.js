import "./App.css";
import React, { Component }  from 'react';
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/Login/LoginPage";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
