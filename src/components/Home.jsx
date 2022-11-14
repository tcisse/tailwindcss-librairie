import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="font-raleway">
      <div className="">
        <h1 className="text-4xl font-semibold flex items-center justify-center my-20 text-[#02c3f4]">
          TailwindCss Libraire
        </h1>
        <span className="flex justify-center text-4xl">
          Liste de mes composants
        </span>
      </div>
      <div className="mt-5">
        <ul className="space-x-10 mx-10 text-lg font-extrabold">
          <Link className="hover:text-blue-500" to="/footer">
            Footer
          </Link>
          <Link className="hover:text-blue-500" to="/navbar">
            NavBar
          </Link>
          <Link className="hover:text-blue-500" to="/signup">
            Sign Up
          </Link>
          <Link className="hover:text-blue-500" to="/signin">
            Sign In
          </Link>
          <Link className="hover:text-blue-500" to="/teamsection">
            Team Section
          </Link>
        </ul>
      </div>
    </div>
  );
}
