import React from "react";
import { Link } from "react-router-dom";

import refresh from "../../assets/img/refresh.svg";

export default function UpdatePasswordCis() {
    return (
        <div className="">
            <div className="flex justify-center items-center space-y-10 lg:p-20">
                <form className="space-y-10" action="">
                    <div className="flex justify-center">
                        <img src={refresh} alt="lockimage" />
                    </div>
                    <h1 className="flex justify-center">
                        <span className="lg:text-4xl text-2xl text-blue-600 font-bold">
                            Update your Password
                        </span>
                    </h1>
                    <div className="lg:mx-0 mx-auto text-center">
                        <p className="">Enter and confirm the new password to make the change.</p>
                    </div>
                    <div className="">
                        <div className="lg:mx-0 mx-5">
                            <label htmlFor="" className="font-bold">
                                New password
                            </label>
                        </div>
                        <input
                            type="password"
                            id="new_password"
                            placeholder="Enter your new password"
                            className="px-2 lg:mx-0 mx-5 py-2 border rounded-md  lg:w-[398px] w-[350px]"
                        />
                    </div>
                    <div className="">
                        <div className="lg:mx-0 mx-5">
                            <label htmlFor="" className="font-bold">
                                Confirm password
                            </label>
                        </div>
                        <input
                            type="password"
                            id="confirm_password"
                            placeholder="Confirm password"
                            className="px-2 lg:mx-0 mx-5 py-2 border rounded-md  lg:w-[398px] w-[350px]"
                        />
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-blue-500 lg:px-28 px-28 hover:bg-violet-600 py-2 rounded-md text-white font-bold">
                            Update password
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
