import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AppRouter from "./router/AppRouter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <AppRouter />
      <h1>Vite + React</h1>
      <div className="card"></div>
      <Footer />
    </>
  );
}

export default App;
