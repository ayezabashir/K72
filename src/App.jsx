import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Agency from "./pages/Agency";
import Projects from "./pages/Projects";
import Navbar from "./components/navbar/Navbar";
import FullScreenNavBar from "./components/navbar/FullScreenNavBar";
import Footer from "./components/footer/Footer";

const App = () => {
  const location = useLocation();
  const footerPaths = ["/agency", "/work"];
  const showFooter = footerPaths.includes(location.pathname);
  return (
    <>
      <Navbar />
      <FullScreenNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="agency" element={<Agency />} />
        <Route path="work" element={<Projects />} />
      </Routes>
      {showFooter && <Footer />}
    </>
  );
};

export default App;
