import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import Contacto from "../pages/Contacto";
/**
 * 
import ServicioPage from "../pages/ServicioPage";
import About from "./About";
import ContactoPage from "../pages/ContactoPage";
import SobreByPage from "../pages/SobreByPage";
import PortafolioPage from "../pages/PortafolioPage";
 */

function AppRouter() {
  return (
    <Routes>
      {/** rutas pricipales
       *
       */}
      <Route path="/" element={<HomePage />} />

      <Route path="/home" element={<HomePage />} />
      <Route path="/contacto" element={<Contacto />} />
      {/** paginas internas *

        <Route path="/sobre_by" element={<SobreByPage />} />
        <Route path="/portafolio" element={<PortafolioPage />} />
        <Route path="/about" element={<About />} />
        */}
    </Routes>
  );
}

export default AppRouter;
