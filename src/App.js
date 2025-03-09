import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./routes/Home";
import Galerija from "./routes/Galerija";
import Meni from "./routes/Meni";
import Prostori from "./routes/Prostori";
import Lokacija from "./routes/Lokacija";
import NavBar from "./components/NavBar/NavBar";
export default function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/galerija" element={<Galerija />} />
          <Route path="/meni" element={<Meni />} />
          <Route path="/prostori" element={<Prostori />} />
          <Route path="/lokacija" element={<Lokacija />} />
        </Routes>
      </div>
    </>
  );
}
