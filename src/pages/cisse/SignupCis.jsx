import React from "react";
import { Link } from "react-router-dom";

import lock from "../../assets/img/lock.svg";

export default function SignupCis() {
    return (
        <div className="flex justify-center h-screen items-center space-y-5 lg:p-20 p-40">
            <form className="space-y-10" action="">
                <div className="flex lg:mt-0 mt-24 justify-center">
                    <img src={lock} alt="lockimage" />
                </div>
                <h1 className="flex justify-center">
                    <span className="text-4xl text-blue-600 font-bold">Inscription</span>
                </h1>
                <div className="flex justify-center">
                    <p>Create your new account, it's free 😊</p>
                </div>
                <div className="">
                    <div className="lg:mx-0 mx-5">
                        <label htmlFor="" className="font-bold">
                            Username
                        </label>
                    </div>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter yoour username"
                        className="px-2 py-2 lg:mx-0 mx-5 border rounded-md  lg:w-[378px] w-[350px]"
                    />
                </div>
                <div className="">
                    <div className="lg:mx-0 mx-5">
                        <label htmlFor="" className="font-bold">
                            E-mail
                        </label>
                    </div>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter yoour email"
                        className="px-2 py-2 lg:mx-0 mx-5 border rounded-md  lg:w-[378px] w-[350px]"
                    />
                </div>
                <div className="">
                    <div className="lg:mx-0 mx-5">
                        <label htmlFor="" className="font-bold">
                            Password
                        </label>
                    </div>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter yoour password"
                        className="px-2 py-2 lg:mx-0 mx-5 border rounded-md lg:w-[378px] w-[350px]"
                    />
                </div>
                <div className="lg:mx-0 mx-5">
                    <input type="checkbox" name="" id="" placeholder="" className="" />
                    <span className="mx-2 cursor-pointer">I agree to privacy policy & terms</span>
                </div>
                <div className="flex justify-center">
                    <button className="bg-blue-500 lg:px-40 px-28 hover:bg-violet-600  py-2 rounded-md text-white font-bold">
                        SIGN IN
                    </button>
                </div>
                <div className="flex justify-center space-x-7 text-blue-600 cursor-pointer">
                    <span>
                        Already have an account? <Link to="/sign-in-cis">Login</Link>
                    </span>
                </div>
            </form>
        </div>
    );
}
