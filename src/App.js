import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Footer1 from "./components/Footer/Footer1";
import Footer2 from "./components/Footer/Footer2";
import Footer3 from "./components/Footer/Footer3";
import Footer4 from "./components/Footer/Footer4";
import Footer5 from "./components/Footer/Footer5";
import Footer6 from "./components/Footer/Footer6";
import NavBar from "./components/NavBar/NavBar";
import NavBar1 from "./components/NavBar/NavBar1";
import NavBar2 from "./components/NavBar/NavBar2";
import NavBar3 from "./components/NavBar/NavBar3";
import NavBar4 from "./components/NavBar/NavBar4";
import SignUp from "./components/SignUp/SignUp";
import TeamSection from "./components/TeamSection";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
// import Index from "./components/Newsletter/index";
import FaqSection from "./components/FaqSection";
import PricingSection from "./components/PricingSection";
import Accordion from "./components/Accordion";
// import {
//   Newsletter1,
//   Newsletter2,
//   Newsletter3,
//   Newsletter4,
// } from "./components/Newsletter";
import SignUp1 from "./components/SignUp/SignUp1";
import SignUp2 from "./components/SignUp/SignUp2";
import SignUp3 from "./components/SignUp/SignUp3";
import SignUp4 from "./components/SignUp/SignUp4";

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
        <Route path="/signup1" element={<SignUp1 />} />
        <Route path="/signup2" element={<SignUp2 />} />
        <Route path="/signup3" element={<SignUp3 />} />
        <Route path="/signup4" element={<SignUp4 />} />
        <Route path="/teamSection" element={<TeamSection />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/footer1" element={<Footer1 />} />
        <Route path="/footer2" element={<Footer2 />} />
        <Route path="/footer3" element={<Footer3 />} />
        <Route path="/footer4" element={<Footer4 />} />
        <Route path="/footer5" element={<Footer5 />} />
        <Route path="/footer6" element={<Footer6 />} />
        <Route path="/signin" element={<SignIn />} />
        {/* <Route path="/newsletter" element={<Index />} /> */}
        <Route path="/faq" element={<FaqSection />} />
        <Route path="/pricing" element={<PricingSection />} />
        <Route path="/accordion" element={<Accordion />} />
        {/* <Route path="/newsletter1" element={<Newsletter1 />} />
        <Route path="/newsletter2" element={<Newsletter2 />} />
        <Route path="/newsletter3" element={<Newsletter3 />} />
        <Route path="/newsletter4" element={<Newsletter4 />} /> */}
      </Routes>
    </div>
  );
}
export default App;
