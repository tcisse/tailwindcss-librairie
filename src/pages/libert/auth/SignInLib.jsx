import React, { useRef } from "react";

import bmw_logo from "../../../../src/assets/img/logo_bmw.png";

export default function SignInLib() {
    const email = useRef(null);
    const password = useRef(null);
    const accept = useRef(null);

    const handleSubmit = () => {
        console.log(email.current.value);
        if (email.current.value && password.current.value) {
            alert("You've logged well");
        } else {
            alert("Verify fields");
        }
    };

    return (
        <div className="w-full min-h-screen flex items-center py-10 md:py-0 px-4 md:px-[4%] lg:px-[10%] justify-center bg-gray-100 font-raleway font-bold">
            <div className="w-full md:w-[90%] lg:w-[80%] flex flex-col justify-center md:flex-row md:items-center bg-white shadow-xl">
                <div className="w-full md:w-1/3 md:min-h-[450px] p-4 bg-cyan-700 text-gray-100 flex flex-col space-y-4 md:justify-around items-center">
                    <h1>Welcome back to BMW Corp</h1>
                    <div className="w-[80px] md:w-[50%] overflow-hidden ">
                        <img src={bmw_logo} alt="" className="h-full object-cover" />
                    </div>
                </div>
                <div className="w-full md:w-2/3 md:min-h-[450px]  p-4 md:px-10 flex flex-col space-y-4 justify-center">
                    <h2 className="text-center text-[20px] md:text-[25px]">Log In</h2>
                    <form
                        onSubmit={e => {
                            e.preventDefault();
                            handleSubmit();
                        }}
                        action=""
                        className="flex flex-col space-y-4"
                    >
                        <div className="w-full flex flex-col">
                            <label htmlFor="email">Email</label>
                            <input
                                ref={email}
                                type="email"
                                name=""
                                id="email"
                                className="h-[35px] border px-4"
                            />
                        </div>

                        <div className="w-full flex flex-col">
                            <label htmlFor="password">Password</label>
                            <input
                                ref={password}
                                type="password"
                                name=""
                                id="password"
                                className="h-[35px] border px-4"
                                required
                            />
                        </div>

                        <div className="w-full flex space-x-2">
                            <input
                                ref={accept}
                                type="checkbox"
                                name=""
                                id="accept"
                                className="border"
                            />
                            <label htmlFor="accept">Remember me</label>
                        </div>

                        <button className="w-full bg-black text-gray-100 py-2">Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
