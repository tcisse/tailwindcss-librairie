import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="text-2xl pt-10 mx-5 font-raleway font-bold">
      <h1>Sign Up components</h1>
      <div className="flex justify-center mt-10 space-x-10">
        <Link to="/signup1">Sign Up 1</Link>
        <Link to="/signup2">Sign Up 2</Link>
        <Link to="/signup3">Sign Up 3</Link>
        <Link to="/signup4">Sign Up 4</Link>
      </div>
    </div>
  );
}
