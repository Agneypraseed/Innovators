import "./App.css";
import React, { Component }  from 'react';
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/Login/LoginPage";
import Home from "./pages/Home/Home";
import MyTarget from "./pages/MyTarget/MyTarget";
import GreenProgram from "./pages/GreenProgram/GreenProgram";
import Confirmation from "./pages/Confirmation/Confirmation";
import Discover from "./pages/Discover/Discover";
import Checkout from "./pages/Checkout/Checkout";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Discover />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/mytarget" element={<MyTarget />} />
        <Route path="/greenprogram" element={<GreenProgram />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </div>
  );
}

export default App;
