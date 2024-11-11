import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from '../src/Login.js';
import Cuestionarios from '../src/Cuestionario.js';
import Register from '../src/Register.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cuestionarios" element={<Cuestionarios />} />
      </Routes>
    </Router>
  );
}

export default App;
