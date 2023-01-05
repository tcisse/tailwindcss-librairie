import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="text-2xl pt-10 mx-5 font-raleway font-bold">
            <h1 className="">Footer component</h1>
            <div className="flex justify-center mt-10 space-x-10">
                <Link className="hover:text-blue-600" to="/footer1">
                    Footer 1
                </Link>
                <Link className="hover:text-blue-600" to="/footer2">
                    Footer 2
                </Link>
                <Link className="hover:text-blue-600" to="/footer3">
                    Footer 3
                </Link>
                <Link className="hover:text-blue-600" to="/footer4">
                    Footer 4
                </Link>
                <Link className="hover:text-blue-600" to="/footer5">
                    Footer 5
                </Link>
                <Link className="hover:text-blue-600" to="/footer6">
                    Footer 6
                </Link>
                <Link className="hover:text-blue-600" to="/footer7">
                    Footer 7
                </Link>
            </div>
        </div>
    );
}
