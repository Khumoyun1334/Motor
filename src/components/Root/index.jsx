import React from "react";
import { Route, Routes } from "react-router";
import Home from "../../pages/Home";
import Product from "../../pages/Product";
import Service from "../../pages/Service";
import Gallery from "../../pages/Gallery";
import Contact from "../../pages/Contact";
import Navbar from "../Navbar";
import Futter from "../Futter";

function Root() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/service" element={<Service />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Futter />
    </div>
  );
}

export default Root;
