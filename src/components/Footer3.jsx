import React from "react";
import { Link } from "react-router-dom";

export default function Footer3() {
  return (
    <footer className="w-full py-6 bg-white shadow-md px-8 flex">
      <div className="text-[25px] text-indigo-500">Logo</div>
      <div className="flex items-center flex-1 justify-center">
        <ul className="flex items-center space-x-6 ">
          <li>© 2022 My app</li>
          <li>All rights reserved</li>
          <li>About</li>
          <li>Contact</li>
          <li>Terms & Privacy</li>
        </ul>
      </div>
      <div className="flex space-x-4 items-center justify-center">
        <Link to="">F</Link>
        <Link to="">I</Link>
        <Link to="">T</Link>
      </div>
    </footer>
  );
}
