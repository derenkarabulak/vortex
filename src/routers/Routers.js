import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import Shop from "../pages/Shop";
import About from "../pages/About";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="home" element={<Home />} />
      <Route path="/vortex" element={<Home />} />
      <Route path="product/:id" element={<ProductDetails />} />
      <Route path="products" element={<Shop />} />
      <Route path="about" element={<About />} />
    </Routes>
  );
};

export default Routers;
