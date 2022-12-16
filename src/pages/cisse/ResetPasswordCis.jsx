import React from "react";
import { Link } from "react-router-dom";

import send from "../../assets/img/send.svg";

export default function ResetPasswordCis() {
    return (
        <div>
            <div className="flex justify-center items-center space-y-10 lg:p-20">
                <form className="space-y-10" action="">
                    <div className="flex justify-center">
                        <img src={send} alt="lockimage" />
                    </div>
                    <h1 className="flex justify-center">
                        <span className="text-4xl text-blue-600 font-bold">Password reset</span>
                    </h1>
                    <div className="lg:mx-0 mx-2">
                        <p className="flex justify-center">
                            If you forgot your password, don't worry!
                        </p>
                        <p className="flex justify-center">
                            we’ll email you instructions to reset your password.
                        </p>
                    </div>
                    <div className="">
                        <div className="lg:mx-0 mx-5">
                            <label htmlFor="" className="font-bold">
                                Email
                            </label>
                        </div>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter yoour email"
                            className="px-2 lg:mx-0 mx-5 py-2 border rounded-md  lg:w-[398px] w-[350px]"
                        />
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-blue-500 lg:px-40 px-28 hover:bg-violet-600 py-2 rounded-md text-white font-bold">
                            Send reset link
                        </button>
                    </div>
                    <div className="space-x-7 flex justify-center text-blue-600 cursor-pointer">
                        <Link to="/sign-in-cis" className="ml-3">
                            Back to login
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
