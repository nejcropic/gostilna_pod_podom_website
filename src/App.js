import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./routes/Home";
import Galerija from "./routes/Galerija";
import Meni from "./routes/Meni";
import Gostisce from "./routes/Gostisce";
import Okolica from "./routes/Okolica";
import NavBar from "./components/NavBar/NavBar";
import Kontakt from "./components/Kontakt/Kontakt";

import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      <div className="App">
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/galerija" element={<Galerija />} />
          <Route path="/meni" element={<Meni />} />
          <Route path="/gostisce" element={<Gostisce />} />
          <Route path="/okolica" element={<Okolica />} />
        </Routes>
        <Kontakt />
      </div>
    </>
  );
}
