// Orphée work
import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const Menu = () => {
        return (
            <>
                <p className="max-[912px]:text-2xl transition-all border-b border-transparent cursor-pointer hover:border-blue-500 text-white">
                    <a href="/">Products</a>
                </p>
                <p className="max-[912px]:text-2xl transition-all border-b border-transparent cursor-pointer hover:border-blue-500 text-white">
                    <a href="/">Features</a>
                </p>
                <p className="max-[912px]:text-2xl transition-all border-b border-transparent cursor-pointer hover:border-blue-500 text-white">
                    <a href="/">About</a>
                </p>
                <p className="max-[912px]:text-2xl transition-all border-b border-transparent cursor-pointer hover:border-blue-500 text-white">
                    <a href="/">Contact</a>
                </p>
            </>
        );
    };

    return (
        <div
            className="
        max-[912px]:flex 
        max-[912px]:justify-between 
        max-[912px]:items-center
        max-[912px]:px-[10px]
        bg-gray-800"
        >
            <header className="py-5">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center lg:gap-x-[635px] lg:justify-center">
                        <p className="text-white font-bold text-[25px]">Logo</p>
                        <div className="hidden lg:flex gap-x-[55px] items-center">
                            <Menu />
                            <div className="flex items-center">
                                <NavLink to="/" className="text-white capitalize cursor-pointer">
                                    login
                                </NavLink>
                                <span className="mx-6 text-white/20"> | </span>
                                <button className="text-white bg-blue-500 rounded-3xl px-4 py-1 capitalize">
                                    register
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="lg:hidden">
                {toggleMenu ? (
                    <RiCloseLine color="#fff" size="27" onClick={() => setToggleMenu(false)} />
                ) : (
                    <RiMenu3Line color="#fff" size="27" onClick={() => setToggleMenu(true)} />
                )}
                {toggleMenu && (
                    <div className="-right-0 fixed top-0 bottom-0 z-30 w-f96 transition-all ease-in duration-500 bg-gray-800">
                        <RiCloseLine
                            color="#fff"
                            size="27"
                            style={{ marginLeft: "9px", marginTop: "15px" }}
                            onClick={() => setToggleMenu(false)}
                        />
                        <div className="flex flex-col gap-y-[15px] items-center mt-5">
                            <Menu />
                            <div className="flex items-center justify-center mt-3">
                                <NavLink
                                    to="/"
                                    className="text-white text-2xl capitalize cursor-pointer"
                                >
                                    login
                                </NavLink>
                                <span className="mx-6 text-white/20"> | </span>
                                <button className="text-white text-2xl bg-blue-500 rounded-3xl px-4 py-1 capitalize">
                                    register
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NavBar;
