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
import SignIn from "./components/SignIn/SignIn";
import SignIn1 from "./components/SignIn/SignIn1";
import SignIn2 from "./components/SignIn/SignIn2";
import SignIn3 from "./components/SignIn/SignIn3";
import SignIn4 from "./components/SignIn/SignIn4";
import SignIn5 from "./components/SignIn/SignIn5";
import FaqSection from "./components/FaqSection";
import PricingSection from "./components/PricingSection";
import Accordion from "./components/Accordion";
import Index from "./components/Newsletter/index";
import Newsletter1 from "./components/Newsletter/Newsletter1";
import Newsletter2 from "./components/Newsletter/Newsletter2";
import Newsletter3 from "./components/Newsletter/Newsletter3";
import Newsletter4 from "./components/Newsletter/Newsletter4";
import Newsletter5 from "./components/Newsletter/Newsletter5";
import SignUp1 from "./components/SignUp/SignUp1";
import SignUp2 from "./components/SignUp/SignUp2";
import SignUp3 from "./components/SignUp/SignUp3";
import SignUp4 from "./components/SignUp/SignUp4";
import SignInOne from "./components/SignIn/SignInOne";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />

          // Navbar pages
        <Route path="/navbar1" element={<NavBar1 />} />
        <Route path="/navbar2" element={<NavBar2 />} />
        <Route path="/navbar3" element={<NavBar3 />} />
        <Route path="/navbar4" element={<NavBar4 />} />
        <Route path="/navbar" element={<NavBar />} />

          // Sing up pages
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/signup1" element={<SignUp1 />} />
        <Route path="/signup2" element={<SignUp2 />} />
        <Route path="/signup3" element={<SignUp3 />} />
        <Route path="/signup4" element={<SignUp4 />} />
        <Route path="/teamSection" element={<TeamSection />} />

          // Footer pages
        <Route path="/footer" element={<Footer />} />
        <Route path="/footer1" element={<Footer1 />} />
        <Route path="/footer2" element={<Footer2 />} />
        <Route path="/footer3" element={<Footer3 />} />
        <Route path="/footer4" element={<Footer4 />} />
        <Route path="/footer5" element={<Footer5 />} />
        <Route path="/footer6" element={<Footer6 />} />

          // Sign in pages
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signin1" element={<SignIn1 />} />
          <Route path="/signin2" element={<SignIn2 />} />
          <Route path="/signin3" element={<SignIn3 />} />
          <Route path="/signin4" element={<SignIn4 />} />
          <Route path="/signin5" element={<SignIn5 />} />
          <Route path="/sign-up-one" element={<SignInOne />} />

          // Newsletter pages
          <Route path="/newsletter" element={<Index />} />
          <Route path="/newsletter1" element={<Newsletter1 />} />
          <Route path="/newsletter2" element={<Newsletter2 />} />
          <Route path="/newsletter3" element={<Newsletter3 />} />
          <Route path="/newsletter4" element={<Newsletter4 />} />
          <Route path="/newsletter5" element={<Newsletter5 />} />

          // FAQ pages
        <Route path="/faq" element={<FaqSection />} />

          // Pricing pages
        <Route path="/pricing" element={<PricingSection />} />

          // Accordion pages
        <Route path="/accordion" element={<Accordion />} />
      </Routes>
    </div>
  );
}
export default App;
