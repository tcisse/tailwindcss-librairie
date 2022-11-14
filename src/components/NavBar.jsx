import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

export default function NavBar() {
  const [openNavbar, setOpenNavbar] = useState(true);
  const navbarMenu = useRef(null);

  const toggleNavbar = () => {
    if (navbarMenu.current.classList.contains("-left-[200%]")) {
      navbarMenu.current.classList.replace("-top-[200%]", "left-[0px]");
      setOpenNavbar(true);
    } else {
      navbarMenu.current.classList.replace("left-[0px]", "-left-[200%]");
      setOpenNavbar(false);
    }
  };

  return (
    <div className="w-full h-[70px] px-4 lg:px-8 flex items-center justify-between shadow-md dark:bg-slate-800 z-20">
      <div onClick={toggleNavbar} className="lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-[30px] h-[30px] text-slate-700 dark:text-blue-500"
        >
          <path
            fillRule="evenodd"
            d="M2 6.75A.75.75 0 012.75 6h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 6.75zm0 6.5a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="flex items-center h-full text-[20px] lg:text-[30px] text-indigo-500">
        NavBar
      </div>
      <div
        ref={navbarMenu}
        id="navbarMenu"
        className={` ${
          openNavbar ? "left-0" : "-left-[200%]"
        } fixed lg:relative lg:left-0 top-0 z-30 w-full md:w-[40%] lg:w-auto  flex flex-row h-screen lg:h-full `}
      >
        <ul className="flex flex-col items-start space-y-4 w-[80%] lg:space-y-0 lg:flex-row p-4 !pt-8 pl-8 lg:!p-0 lg:items-center lg:justify-between lg:w-full h-full lg:space-x-8 hover:[&>*]:scale-110 hover:[&>*]:text-indigo-500 dark:text-gray-200 dark:bg-slate-800 bg-white">
          <li className="hover:scale-110">
            <Link to="#">Home</Link>
          </li>
          <li>
            <Link to="#">About</Link>
          </li>
          <li>
            <Link to="#">Services</Link>
          </li>
          <li>
            <Link to="#">Our team</Link>
          </li>
          <li>
            <Link to="#">Contact-us</Link>
          </li>
        </ul>
        <div onClick={() => setOpenNavbar(false)} className="flex-1 h-[200%] bg-slate-900/50 flex justify-center pt-8 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-[30px] h-[30px] text-red-500"
          >
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </div>
      </div>
      <div className="flex items-center h-full">
        <button className="px-4 py-1 text-gray-100 bg-indigo-500 rounded-md bg-gradient-to-l from-blue-500 to-indigo-500 hover:shadow-md">
          Sign in
        </button>
      </div>
    </div>
  );
}
