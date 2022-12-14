import React, { useState } from "react";
import { BsCheck } from "react-icons/bs";
import { AiTwotoneLock } from "react-icons/ai";

const SignIn2 = () => {
  const [checked, setChecked] = useState(false);

  const handleChecked = () => {
    setChecked(!checked);
  };

  return (
    <div className="flex flex-col items-center rounded-[2px] w-[300px] lg:w-[400px] h-[400px] bg-white shadow-2xl shadow-slate-900 mt-10 m-auto">
      <div className="flex flex-col items-center justify-center text-center mt-2">
        <h3 className="mt-3 font-bold text-xl">Sign In</h3>
      </div>
      {/* Form */}
      <div className="flex flex-row mt-4 justify-center">
        <div className="flex">
          <form className="">
            <div className="flex mb-3">
              <input
                type="text"
                className="w-[250px] lg:w-[350px] h-[50px] font-[400] rounded-[2px] border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-gray-500 outline-none p-1"
                placeholder="Username"
                required
              />
            </div>
            <div className="flex mb-3">
              <input
                type="password"
                className="w-[250px] lg:w-[350px] h-[50px] font-[400] rounded-[2px] border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-gray-500 outline-none p-1"
                placeholder="Password"
                required
              />
            </div>
            <div className="flex gap-2 lg:gap-0 mt-8 mb-4 items-center justify-between">
              <div className="flex flex-row items-center cursor-pointer gap-2">
                {checked === true ? (
                  <BsCheck
                    size={20}
                    className="cursor-pointer"
                    onClick={() => setChecked(false)}
                  />
                ) : (
                  <input
                    size={27}
                    type="checkbox"
                    className="border-none cursor-pointer focus:rotate-45 transition duration-100"
                    onClick={handleChecked}
                  />
                )}
                Remember me
              </div>
              <div className="flex flex-row items-center cursor-pointer gap-2">
                <AiTwotoneLock />
                <span className="hover:text-[#2cabe3]">Forgot Pwd ?</span>
              </div>
            </div>
            <div className="flex items-stretch">
              <button className="w-full mt-3 h-[40px] bg-black text-white hover:opacity-80 transition duration-100">
                Log In
              </button>
            </div>
            <div className="flex items-center justify-center gap-2 mt-8">
              Don't have an account ?
              <a href="/" className="text-[#2cabe3]">
                Sign Up
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn2;
