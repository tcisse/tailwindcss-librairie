import React from "react";

import { Input, Link } from "../../../components/orphee/authcomponents";

const ResetPasswordO = () => {
    return (
        <div className="flex flex-col items-center rounded-[2px] w-[300px] lg:w-[400px] h-[260px] bg-white shadow-2xl shadow-slate-900 mt-10 m-auto">
            <div className="flex flex-col items-center justify-center text-center mt-2">
                <h3 className="mt-3 font-bold text-xl">Reset Password</h3>
            </div>
            {/* Form */}
            <div className="flex flex-row mt-4 justify-center">
                <div className="flex">
                    <form className="">
                        <span className="flex justify-center w-full max-w-[250px] lg:max-w-[350px] mt-2 ">
                            Enter your Email and instructions will be sent to you!
                        </span>
                        <div className="flex mb-3">
                            <Input
                                type="email"
                                placeholder="Email"
                                className="w-[250px] lg:w-[350px] h-[50px] font-[400] rounded-[2px] border-0 border-b border-gray-200 focus:ring-0 outline-none p-1"
                            />
                        </div>
                        <div className="flex items-center justify-center w-full mt-3 h-[40px] bg-black text-white hover:opacity-80 transition duration-100">
                            <Link href="/update-password-o" className=" ">
                                RESET
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ResetPasswordO;
