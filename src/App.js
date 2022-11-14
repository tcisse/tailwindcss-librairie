import React from "react";
import Footer from "./components/Footer/index";
import Navbar from "./components/Navbar/index";
import SignIn from "./components/SignIn/index";
import SignUp from "./components/SignUp/index";
import TeamSection from "./components/TeamSection/index";

export default function App() {
  return (
    <div>
      <Footer />
      <Navbar />
      <SignIn />
      <SignUp />
      <TeamSection />
    </div>
  );
}
