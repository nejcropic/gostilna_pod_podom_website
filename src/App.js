import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import Preloader from "./components/Preloader/Preloader";
import NavBar from "./components/NavBar/NavBar";
import Kontakt from "./components/Kontakt/Kontakt";
import ScrollToTop from "./components/ScrollToTop";

// ✅ Lazy Load Pages
const Home = lazy(() => import("./routes/Home"));
const Galerija = lazy(() => import("./routes/Galerija"));
const Meni = lazy(() => import("./routes/Meni"));
const Gostisce = lazy(() => import("./routes/Gostisce"));
const Okolica = lazy(() => import("./routes/Okolica"));

export default function App({ isLoading }) {
  return (
    <>
      {isLoading && <Preloader isLoading={isLoading} />}
      <div className={`App ${isLoading ? "hidden" : "visible"}`}>
        <ScrollToTop />
        <NavBar />
        <Suspense fallback={<Preloader isLoading={true} />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/galerija" element={<Galerija />} />
            <Route path="/meni" element={<Meni />} />
            <Route path="/gostisce" element={<Gostisce />} />
            <Route path="/okolica" element={<Okolica />} />
          </Routes>
        </Suspense>
        <Kontakt />
      </div>
    </>
  );
}
