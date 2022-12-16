import React from "react";

import { Input, Checkbox, Link, Button } from "../../../components/orphee/authcomponents";

const SignUp1 = () => {
    return (
        <div className="flex flex-col items-center rounded-[2px] w-[300px] lg:w-[400px] h-[450px] bg-white shadow-2xl shadow-slate-900 mt-10 m-auto">
            <div className="flex flex-col items-center justify-center text-center mt-2">
                <h3 className="mt-3 font-bold text-xl">Sign Up</h3>
            </div>
            {/* Form */}
            <div className="flex flex-row mt-4 justify-center">
                <div className="flex">
                    <form className="">
                        <div className="flex mb-3">
                            <Input
                                type="text"
                                placeholder="Full Name"
                                className="w-[250px] lg:w-[350px] h-[50px] font-[400] rounded-[2px] border-0 border-b border-gray-200 focus:ring-0 outline-none p-1"
                            />
                        </div>
                        <div className="flex mb-3">
                            <Input
                                type="email"
                                placeholder="Email"
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
                        <div className="flex mb-3">
                            <Input
                                type="password"
                                placeholder="Repeat Password"
                                className="w-[250px] lg:w-[350px] h-[50px] font-[400] rounded-[2px] border-0 border-b border-gray-200 focus:ring-0 outline-none p-1"
                            />
                        </div>
                        <div className="flex gap-2  mt-8 mb-4 items-center">
                            <div className="flex flex-row items-center cursor-pointer gap-2">
                                <Checkbox
                                    size1={20}
                                    size2={27}
                                    className1="cursor-pointer"
                                    className2="border cursor-pointer focus:ring-0 focus:rotate-45 transition duration-100"
                                />
                                I agree to all{" "}
                                <Link href="/" className="text-[#2cabe3]">
                                    Terms
                                </Link>
                            </div>
                        </div>
                        <div className="flex items-stretch">
                            <Button
                                type=" "
                                className="w-full mt-3 h-[40px] bg-black text-white hover:opacity-80 transition duration-100"
                            >
                                Sign Up
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp1;
