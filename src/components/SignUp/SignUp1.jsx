import React, { useState } from "react";
import { github } from "../../assets/img/exports";
import { BsCheck } from "react-icons/bs";

const SignUp1 = () => {
    const [checked, setChecked] = useState(false);

    const handleChecked = () => {
        setChecked(!checked);
    };

    return (
        <div className="flex flex-col items-center rounded-[2px] w-[300px] lg:w-[400px] h-[500px] bg-slate-300 mt-10 m-auto">
            <div className="flex flex-col items-center justify-center text-center">
                <span className="mt-8">
                    {" "}
                    <img src={github} className="w-[35px]" alt="error" />
                </span>
                <h4 className="mt-3 font-medium">Sign Up to Github</h4>
            </div>
            {/* Form */}
            <div className="flex flex-row mt-4 justify-center">
                <div className="flex">
                    <form className="">
                        <div className="flex mb-3">
                            <input
                                type="text"
                                className="w-[250px] lg:w-[350px] h-[50px] font-[400] leading-[1.5] border-[black] rounded-[2px] outline-none p-3"
                                placeholder="Full Name"
                                required
                            />
                        </div>
                        <div className="flex mb-3">
                            <input
                                type="email"
                                className="w-[250px] lg:w-[350px] h-[50px] font-[400] leading-[1.5] border-[black] rounded-[2px] outline-none p-3"
                                placeholder="Email"
                                required
                            />
                        </div>
                        <div className="flex mb-3">
                            <input
                                type="password"
                                className="w-[250px] lg:w-[350px] h-[50px] font-[400] leading-[1.5] border-[black] rounded-[2px] outline-none p-3"
                                placeholder="Password"
                                required
                            />
                        </div>
                        <div className="flex mb-3">
                            <input
                                type="password"
                                className="w-[250px] lg:w-[350px] h-[50px] font-[400] leading-[1.5] border-[black] rounded-[2px] outline-none p-3"
                                placeholder="Repeat Password"
                                required
                            />
                        </div>
                        <div className="flex gap-x-3 mb-4 items-center">
                            {checked === true ? (
                                <BsCheck
                                    size={27}
                                    className="cursor-pointer mt-[8px]"
                                    onClick={() => setChecked(false)}
                                />
                            ) : (
                                <input
                                    size={27}
                                    type="checkbox"
                                    className="border-none cursor-pointer mt-[0.4rem] focus:rotate-45 transition duration-100"
                                    onClick={handleChecked}
                                />
                            )}
                            <label className="mt-2">
                                I agree to all{" "}
                                <a href="/" className="text-[#2cabe3]">
                                    Terms
                                </a>
                            </label>
                        </div>
                        <div className="flex items-stretch">
                            <button className="w-full mt-3 h-[40px] bg-black text-white hover:scale-90 transform transition duration-100">
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp1;
