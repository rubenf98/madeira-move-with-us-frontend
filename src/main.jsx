import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./Layout.jsx";
import Homepage from "./cli/homepage/Homepage.jsx";
import About from "./cli/About.jsx";
import Transfers from "./cli/transfers/Transfers.jsx";
import Tours from "./cli/tours/Tours.jsx";
import Contact from "./cli/Contact.jsx";
import Experiences from "./cli/experiences/Experiences.jsx";
import "leaflet/dist/leaflet.css";
import TransferProduct from "./cli/transfers/TransferProduct.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/transfers/:id" element={<TransferProduct />} />

        <Route path="/services/transfers" element={<Transfers />} />
        <Route path="/services/tours" element={<Tours />} />
        <Route path="/services/experiences" element={<Experiences />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
