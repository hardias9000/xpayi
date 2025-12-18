import { Routes, Route, BrowserRouter } from "react-router-dom";

import HomePage from "../pages/HomePage";
import Contacto from "../pages/Contacto";

function AppRouter() {
  return (
    <Routes>
      {/** rutas pricipales*/}
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/contacto" element={<Contacto />} />
    </Routes>
  );
}

export default AppRouter;
