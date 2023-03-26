import "./App.css";
import React, { Component }  from 'react';
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/Login/LoginPage";
import Home from "./pages/Home/Home";
import MyTarget from "./pages/MyTarget/MyTarget";
import GreenProgram from "./pages/GreenProgram/GreenProgram";
import Checkout from "./pages/Checkout/Checkout";
import Confirmation from "./pages/Confirmation/Confirmation";
import Discover from "./pages/Discover/Discover";
import Product from "./pages/Product/Product";

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
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
