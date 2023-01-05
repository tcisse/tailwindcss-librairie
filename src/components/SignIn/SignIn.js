import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
    return (
        <div className="text-2xl pt-10 mx-5 font-raleway font-bold">
            <h1>Sign In components</h1>
            <div className="flex justify-center mt-10 space-x-10">
                <Link to="/signin-yag">Sign In 1</Link>
                <Link to="/signin-orp">Sign In 2</Link>
                <Link to="/signin-lib">Sign In 3</Link>
                <Link to="/sign-in-cis">Sign In 4</Link>
                <Link to="/sign-in-one">Sign In 5</Link>
            </div>
        </div>
    );
}
