import React from "react";

import lock from "../../assets/img/lock.svg";

import SigninCis from "./SigninCis";

export default function SignupCis() {
    return (
        <div className="flex justify-center h-screen items-center space-y-5 p-20">
            <form className="space-y-10" action="">
                <div className="flex justify-center">
                    <img src={lock} alt="lockimage" />
                </div>
                <h1 className="flex justify-center">
                    <span className="text-4xl text-blue-600 font-bold">Inscription</span>
                </h1>
                <div className="flex justify-center">
                    <p>Create your new account, it's free 😊</p>
                </div>
                <div className="">
                    <div>
                        <label htmlFor="" className="font-bold">
                            Username
                        </label>
                    </div>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter yoour username"
                        className="px-2 py-2 border rounded-md w-[378px]"
                    />
                </div>
                <div className="">
                    <div>
                        <label htmlFor="" className="font-bold">
                            E-mail
                        </label>
                    </div>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter yoour email"
                        className="px-2 py-2 border rounded-md w-[378px]"
                    />
                </div>
                <div className="">
                    <div>
                        <label htmlFor="" className="font-bold">
                            Password
                        </label>
                    </div>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter yoour password"
                        className="px-2 py-2 border rounded-md w-[378px]"
                    />
                </div>
                <div className="">
                    <input type="checkbox" name="" id="" placeholder="Remember me" className="" />
                    <span className="mx-2 cursor-pointer">I agree to privacy policy & terms</span>
                </div>
                <div>
                    <button className="bg-blue-500 px-40 py-2 rounded-md text-white font-bold">
                        SIGN IN
                    </button>
                </div>
                <div className="flex justify-center space-x-7 text-blue-600 cursor-pointer">
                    <span>
                        Don't have account ? <a href={<SigninCis />}>Sign Up</a>
                    </span>
                </div>
            </form>
        </div>
    );
}
