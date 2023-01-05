import { Routes, Route } from "react-router-dom";

import "./App.css";
import Accordion from "./components/Accordion";
import FooterCis from "./components/cisse/FooterCis";
import NavbarCis from "./components/cisse/NavbarCis";
import NewsletterCis from "./components/cisse/NewsletterCis";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer/Footer";
import Footer3 from "./components/Footer/Footer3";
import Home from "./components/Home";
import FooterLib from "./components/libert/FooterLib";
import NavBarLib from "./components/libert/NavbarLib";
import NewsletterLib from "./components/libert/NewsletterLib";
import NavBar from "./components/NavBar/NavBar";
import NavBar3 from "./components/NavBar/NavBar3";
import Index from "./components/Newsletter/index";
import PricingSection from "./components/PricingSection";
import SignIn from "./components/SignIn/SignIn";
import SignIn3 from "./components/SignIn/SignIn3";
import SignUp from "./components/SignUp/SignUp";
import TeamSection from "./components/TeamSection";
import FooterYaG from "./components/yannGomez/FooterYaG";
import NewsletterYaG from "./components/yannGomez/NewsletterYaG";
import { FooterOrp1, FooterOrp2 } from "./exports/Footer";
import { NavBarOrp1, NavBarOrp2 } from "./exports/NavBar";
import { NewsletterOrp, NewsletterOne } from "./exports/Newslatter";
import { ResetPasswordOne, ResetPasswordOrp } from "./exports/ResetPassword";
import { SignInOne, SignInOrp } from "./exports/SignIn";
import { SignUpOne, SignUpOrp } from "./exports/SignUp";
import {
    ResetPasswordCis,
    UpdatePasswordCis,
    UpdatePasswordOne,
    UpdatePasswordOrp
} from "./exports/UpdatePassword";
import SigninCis from "./pages/cisse/SigninCis";
import SignupCis from "./pages/cisse/SignupCis";
import SignInLib from "./pages/libert/auth/SignInLib";
import SignUpLib from "./pages/libert/auth/SignUpLib";
import ResetPasswordYg from "./pages/yannGomez/ResetPasswordYg";
import SignInYg from "./pages/yannGomez/SignInYg";
import UpdatePasswordYg from "./pages/yannGomez/UpdatePasswordYg";

function App() {
    return (
        <div className="">
            <Routes>
                <Route path="/" element={<Home />} />

                {/*Navbar pages*/}
                <Route path="/navbar-orp1" element={<NavBarOrp1 />} />
                <Route path="/navbar-orp2" element={<NavBarOrp2 />} />
                <Route path="/navbar3" element={<NavBar3 />} />
                <Route path="/navbar-lib" element={<NavBarLib />} />
                <Route path="/navbar-cis" element={<NavbarCis />} />
                <Route path="/navbar" element={<NavBar />} />

                {/*Sing up pages*/}
                <Route path="/SignUp" element={<SignUp />} />
                <Route path="/sign-up-orp" element={<SignUpOrp />} />
                <Route path="/sign-up-orp" element={<SignUpLib />} />
                <Route path="/sign-up-cis" element={<SignupCis />} />
                <Route path="/sign-up-one" element={<SignUpOne />} />

                {/*Theme section page*/}
                <Route path="/teamSection" element={<TeamSection />} />

                {/*Footer pages*/}
                <Route path="/footer" element={<Footer />} />
                <Route path="/footer-orp1" element={<FooterOrp1 />} />
                <Route path="/footer-orp2" element={<FooterOrp2 />} />
                <Route path="/footer3" element={<Footer3 />} />
                <Route path="/footer-lib" element={<FooterLib />} />
                <Route path="/footer-cis" element={<FooterCis />} />
                <Route path="/footer-yag" element={<FooterYaG />} />

                {/*Sign in pages*/}
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signin-yag" element={<SignInYg />} />
                <Route path="/signin-orp" element={<SignInOrp />} />
                <Route path="/signin-orp" element={<SignIn3 />} />
                <Route path="/signin-lib" element={<SignInLib />} />
                <Route path="/sign-in-cis" element={<SigninCis />} />
                <Route path="/sign-in-one" element={<SignInOne />} />
                {/*Reset password pages*/}
                <Route path="/reset-password-one" element={<ResetPasswordOne />} />
                <Route path="/reset-password-o" element={<ResetPasswordOrp />} />
                <Route path="/reset-password-cis" element={<ResetPasswordCis />} />
                <Route path="/ResetPasswordYg" element={<ResetPasswordYg />} />

                {/*Update password page*/}
                <Route path="/update-password-one" element={<UpdatePasswordOne />} />
                <Route path="/update-password-o" element={<UpdatePasswordOrp />} />
                <Route path="/update-password-cis" element={<UpdatePasswordCis />} />
                <Route path="/UpdatePasswordYg" element={<UpdatePasswordYg />} />

                {/*Newsletter pages*/}
                <Route path="/newsletter" element={<Index />} />
                <Route path="/newsletter-orp" element={<NewsletterOrp />} />
                <Route path="/newsletter-cis" element={<NewsletterCis />} />
                <Route path="/newsletter-yag" element={<NewsletterYaG />} />
                <Route path="/newsletter-lib" element={<NewsletterLib />} />
                <Route path="/newsletter-one" element={<NewsletterOne />} />

                {/*FAQ pages*/}
                <Route path="/faq" element={<FaqSection />} />

                {/*Pricing pages*/}
                <Route path="/pricing" element={<PricingSection />} />

                {/*Accordion pages*/}
                <Route path="/accordion" element={<Accordion />} />
            </Routes>
        </div>
    );
}
export default App;
