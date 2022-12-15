import { ArrowSmallRightIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Footer4() {
    return (
        <footer className="w-full pt-6 bg-white shadow-md flex flex-col font-raleway">
            {/* Newsletter and  form */}
            <div className="w-full flex flex-col px-4 md:px-8 items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-6 md:flex-row">
                <div className="text-[18px] font-semibold text-slate-500">NEWSLETTER</div>
                <div className="w-full md:w-auto">
                    <form
                        action=""
                        className="flex w-full flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row"
                    >
                        <input
                            type="text"
                            name=""
                            id=""
                            className="border-2 rounded-md h-[40px] px-4 w-full md:w-auto md:min-w-[250px]"
                            placeholder="Your name"
                        />
                        <input
                            type="email"
                            name=""
                            id=""
                            className="border-2 rounded-md h-[40px] px-4 w-ful md:w-autol md:min-w-[250px]"
                            placeholder="Your email"
                        />
                        <button className="h-[40px] bg-indigo-500 text-gray-100 rounded-md px-4">
                            Subscribe to newsletter
                        </button>
                    </form>
                </div>
            </div>

            <hr className="w-[90%] mx-auto" />

            {/* Middle */}
            <div className="w-full py-4 px-4 md:px-8 flex flex-col space-y-4 md:space-y-0 md:flex-row justify-center">
                <div className="text-[25px] text-indigo-500 font-bold">Logo</div>
                <div className="flex flex-1 flex-col space-y-8 md:space-y-0 md:flex-row justify-evenly">
                    <div className="flex flex-col space-y-2">
                        <div className="text-slate-500">PRODUCT</div>
                        <ul className="font-semibold text-[18px] flex flex-col space-y-3 text-slate-700">
                            <li>All products</li>
                            <li>Categories</li>
                            <li>Top rated</li>
                            <li>Most wanted</li>
                        </ul>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <div className="text-slate-500">PATNERS</div>
                        <ul className="font-semibold text-[18px] flex flex-col space-y-3 text-slate-700">
                            <li>Become a patner</li>
                            <li className="flex items-center space-x-2">
                                <span>See our patners</span>
                                <span>
                                    <ArrowSmallRightIcon className="w-4 h-4" />
                                </span>
                            </li>
                            <li>Why become our patner ?</li>
                        </ul>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <div className="text-slate-500">CONTACTS</div>
                        <ul className="font-semibold text-[18px] flex flex-col space-y-3 text-slate-700">
                            <li className="flex items-center space-x-2">
                                <PhoneIcon className="w-4 h-4" />
                                <span>+229 65 25 78 XX</span>{" "}
                            </li>
                            <li className="flex items-center space-x-2">
                                <EnvelopeIcon className="w-4 h-4" />
                                <span>youremail@gmail.com</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Link to="" className="flex space-x-2 items-center">
                                    <BsFacebook />
                                    <span>Your facebook</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="w-full py-6 bg-gray-600 text-gray-100 shadow-md px-4 md:px-8 flex flex-col space-y-3 md:flex-row md:space-y-0">
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
            </div>
        </footer>
    );
}
