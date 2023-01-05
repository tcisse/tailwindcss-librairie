import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div className="text-2xl pt-10 mx-5 font-raleway font-bold">
            <h1 className="">NavBar component</h1>
            <div className="flex justify-center mt-10 space-x-10">
                <Link className="hover:text-blue-600" to="/navbar-orp1">
                    NavBar 1
                </Link>
                <Link className="hover:text-blue-600" to="/navbar-orp2">
                    NavBar 2
                </Link>
                <Link className="hover:text-blue-600" to="/navbar-lib">
                    NavBar 3
                </Link>
                <Link className="hover:text-blue-600" to="/navbar-cis">
                    NavBar 4
                </Link>
                <Link className="hover:text-blue-600" to="/navbar-yag">
                    NavBar 5
                </Link>
                <Link className="hover:text-blue-600" to="/navbar7">
                    NavBar 6
                </Link>
            </div>
        </div>
    );
}
