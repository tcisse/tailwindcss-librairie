import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

export default function NavBar() {
  return (
    <div className="w-full h-[70px] px-8 flex items-center justify-between shadow-md">
      <div className="flex items-center h-full text-[30px] text-indigo-500">NavBar</div>
      <div className="flex h-full">
        <ul className="flex items-center justify-between w-full h-full space-x-8 hover:[&>*]:scale-110 hover:[&>*]:text-indigo-500">
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
      </div>
      <div className="flex items-center h-full">
        <button className="px-4 py-1 text-gray-100 bg-indigo-500 rounded-md bg-gradient-to-l from-blue-500 to-indigo-500 hover:shadow-md">
          Sign in
        </button>
      </div>
    </div>
  );
}
