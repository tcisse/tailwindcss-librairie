import { Routes, Route } from "react-router-dom";
import {Home,NavBar,NavBar2,SignUp,SignIn,TeamSection,
        Footer,NewsLetter,FaqSection, PricingSection} 
from "./components/exports" 
import './App.css'

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/navbar" element={<NavBar />} />
        <Route path="/navbar2" element={<NavBar2 />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/teamSection" element={<TeamSection />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/newsletter" element={<NewsLetter />} />
        <Route path="/faq" element={<FaqSection />} />
        <Route path="/pricing" element={<PricingSection />} />
      </Routes>
    </div>
  );
}
export default App;
