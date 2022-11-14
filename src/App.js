import { Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import SignUp from "./components/SignUp";
import TeamSection from "./components/TeamSection";
import Home from "./components/Home";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/navbar" element={<NavBar />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/teamSection" element={<TeamSection />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </div>
  );
}

export default App;
