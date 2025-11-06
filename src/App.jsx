import React from "react";
import Home from "./pages/Home.jsx";
import Agency from "./pages/Agency.jsx";
import Projects from "./pages/Projects.jsx";
import { Route, Routes, Link } from "react-router-dom";
const App = () => {
  return (
    <div className="text-white">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agency" element={<Agency />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default App;
