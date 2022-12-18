import React from "react";
import { AiTwotoneLock } from "react-icons/ai";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { Input, Checkbox, Link, Button } from "../../../components/orphee/authcomponents";

const SignIn2 = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center rounded-[2px] w-[300px] lg:w-[400px] h-[500px] bg-white shadow-2xl shadow-slate-900 mt-10 m-auto">
            <div className="flex flex-col items-center justify-center text-center mt-2">
                <h3 className="mt-3 font-bold text-xl">Sign In</h3>
            </div>
            {/* Form */}
            <div className="flex flex-row mt-4 justify-center">
                <div className="flex">
                    <form className="">
                        <div className="flex mb-3">
                            <Input
                                type="text"
                                placeholder="Username"
                                className="w-[250px] lg:w-[350px] h-[50px] font-[400] rounded-[2px] border-0 border-b border-gray-200 focus:ring-0 outline-none p-1"
                            />
                        </div>
                        <div className="flex mb-3">
                            <Input
                                type="password"
                                placeholder="Password"
                                className="w-[250px] lg:w-[350px] h-[50px] font-[400] rounded-[2px] border-0 border-b border-gray-200 focus:ring-0 outline-none p-1"
                            />
                        </div>
                        <div className="flex gap-2 lg:gap-0 mt-8 mb-4 items-center justify-between">
                            <div className="flex flex-row items-center cursor-pointer gap-2">
                                <Checkbox
                                    size1={20}
                                    size2={27}
                                    className1="cursor-pointer"
                                    className2="border cursor-pointer focus:ring-0 focus:rotate-45 transition duration-100"
                                />
                                Remember me
                            </div>
                            <div className="flex flex-row items-center cursor-pointer gap-2">
                                <AiTwotoneLock />
                                <span
                                    className="hover:text-[#2cabe3]"
                                    onClick={() => navigate("/reset-password-o")}
                                >
                                    Forgot Pwd ?
                                </span>
                            </div>
                        </div>
                        <div className="flex items-stretch">
                            <Button
                                type=" "
                                className="w-full mt-3 h-[40px] bg-black text-white hover:opacity-80 transition duration-100"
                            >
                                Log In
                            </Button>
                        </div>
                        <span className="flex justify-center mt-6">or use :</span>
                        <div className="flex flex-row gap-3 items-center justify-center mt-6">
                            <Button
                                type=" "
                                className="flex justify-center items-center h-[50px] w-[50px] cursor-pointer bg-black text-white"
                            >
                                <FaFacebookF />
                            </Button>
                            <Button
                                type=" "
                                className="flex justify-center items-center h-[50px] w-[50px] cursor-pointer bg-black text-white"
                            >
                                <FaGoogle />
                            </Button>
                        </div>
                        <div className="flex items-center justify-center gap-2 mt-8">
                            Don't have an account ?
                            <Link href="/signup1" className="text-[#2cabe3]">
                                Sign Up
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn2;
