import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar1 from "./components/NavBar1";
import NavBar2 from "./components/NavBar2";
import NavBar3 from "./components/NavBar3";
import NavBar4 from "./components/NavBar4";
import SignUp from "./components/SignUp";
import TeamSection from "./components/TeamSection";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import Newsletter from "./components/Newsletter";
import FaqSection from "./components/FaqSection";
import PricingSection from "./components/PricingSection";
import Accordion from "./components/Accordion";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/navbar1" element={<NavBar1 />} />
        <Route path="/navbar2" element={<NavBar2 />} />
        <Route path="/navbar3" element={<NavBar3 />} />
        <Route path="/navbar4" element={<NavBar4 />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/teamSection" element={<TeamSection />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/faq" element={<FaqSection />} />
        <Route path="/pricing" element={<PricingSection />} />
        <Route path="/accordion" element={<Accordion />} />
      </Routes>
    </div>
  );
}
export default App;
