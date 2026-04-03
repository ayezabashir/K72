import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Agency from "./pages/Agency";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="agency" element={<Agency />} />
        <Route path="work" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default App;
