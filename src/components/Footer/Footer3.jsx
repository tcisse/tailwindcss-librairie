import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

export default function Footer3() {
    return (
        <footer className="w-full py-6 bg-white shadow-md px-8 flex flex-col space-y-3 md:flex-row md:space-y-0 font-raleway">
            <div className="text-[25px] text-indigo-500 font-bold">Logo</div>
            <div className="flex items-center flex-1 justify-center">
                <ul className="flex items-center space-x-6 flex-row justify-center flex-wrap md:flex-nowrap [&>*]:mb-3 md:[&>*]:mb-0">
                    <li>© 2022 My app</li>
                    <li>All rights reserved</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Terms & Privacy</li>
                </ul>
            </div>
            <div className="flex space-x-8 items-center justify-center md:space-x-4">
                <Link to="">
                    <BsFacebook />
                </Link>
                <Link to="">
                    <BsInstagram />
                </Link>
                <Link to="">
                    <BsTwitter />
                </Link>
            </div>
        </footer>
    );
}
