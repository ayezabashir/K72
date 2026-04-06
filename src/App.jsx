import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Agency from "./pages/Agency";
import Projects from "./pages/Projects";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="agency" element={<Agency />} />
        <Route path="work" element={<Projects />} />
      </Routes>
    </>
  );
};

export default App;
