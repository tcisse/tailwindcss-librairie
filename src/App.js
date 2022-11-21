import { Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import SignUp from "./components/SignUp";
import TeamSection from "./components/TeamSection";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import Newsletter from "./components/Newsletter";
import FaqSection from "./components/FaqSection";
import PrincingSection from "./components/PrincingSection";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/navbar" element={<NavBar />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/teamSection" element={<TeamSection />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/faq" element={<FaqSection />} />
        <Route path="/pricing" element={<PrincingSection />} />
      </Routes>
    </div>
  );
}

export default App;
