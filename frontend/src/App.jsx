import Connexion from "@pages/Connexion";
import Registration from "@pages/Registration";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/connexion" element={<Connexion />} />
      <Route path="/registration" element={<Registration />} />
    </Routes>
  );
}

export default App;
