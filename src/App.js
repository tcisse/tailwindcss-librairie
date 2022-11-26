import { Routes, Route } from "react-router-dom";
import './App.css';
import Footer from "./components/Footer";
import Footer1 from "./components/Footer1";
import Footer2 from "./components/Footer2";
import Footer3 from "./components/Footer3";
import Footer4 from "./components/Footer4";
import Footer5 from "./components/Footer5";
import Footer6 from "./components/Footer6";
import NavBar from "./components/NavBar";
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
        <Route path="/navbar" element={<NavBar />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/teamSection" element={<TeamSection />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/footer1" element={<Footer1 />} />
        <Route path="/footer2" element={<Footer2 />} />
        <Route path="/footer3" element={<Footer3 />} />
        <Route path="/footer4" element={<Footer4 />} />
        <Route path="/footer5" element={<Footer5 />} />
        <Route path="/footer6" element={<Footer6 />} />
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
