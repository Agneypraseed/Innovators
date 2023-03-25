import "./App.css";
import React, { Component }  from 'react';
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/Login/LoginPage";
import Home from "./pages/Home/Home";
import MyTarget from "./pages/MyTarget/MyTarget";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/mytarget" element={<MyTarget />} />
      </Routes>
    </div>
  );
}

export default App;
