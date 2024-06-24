import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import Shop from "../pages/Shop";
import About from "../pages/About";
import Pantolon from "../pages/Pantolon";
import Mont from "../pages/Mont";
import Polar from "../pages/Polar";
import SoftshellMont from "../pages/SoftshellMont";
import Kaban from "../pages/Kaban";
import IsCeketi from "../pages/IsCeketi";
import Sweatshirt from "../pages/Sweatshirt";
import Tshirt from "../pages/Tshirt";
import Vest from "../pages/Vest";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="home" element={<Home />} />
      <Route path="vortex" element={<Home />} />
      <Route path="product/:id" element={<ProductDetails />} />
      <Route path="products" element={<Shop />} />
      <Route path="about" element={<About />} />
      <Route path="pantolon" element={<Pantolon />} />
      <Route path="mont" element={<Mont />} />
      <Route path="polar" element={<Polar />} />
      <Route path="softshell-mont" element={<SoftshellMont />} />
      <Route path="kaban" element={<Kaban />} />
      <Route path="is-ceketi" element={<IsCeketi />} />
      <Route path="sweatshirt" element={<Sweatshirt />} />
      <Route path="tshirt" element={<Tshirt />} />
      <Route path="vest" element={<Vest />} />
    </Routes>
  );
};

export default Routers;
