import { Link } from "react-router-dom";

import lock from "../../assets/img/lock.svg";

export default function SigninCis() {
    return (
        <div className="flex justify-center items-center space-y-10 lg:p-20">
            <form className="space-y-10" action="">
                <div className="flex justify-center">
                    <img src={lock} alt="lockimage" />
                </div>
                <h1 className="flex justify-center">
                    <span className="text-4xl text-blue-600 font-bold">Sign in</span>
                </h1>
                <div className="flex justify-center text-lg">
                    <p>Enter your identifiant ton sign in</p>
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
                        className="px-2 lg:mx-0 mx-5 py-2 border rounded-md  lg:w-[378px] w-[350px]"
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
                        className="px-2 lg:mx-0 mx-5 py-2 border rounded-md  lg:w-[378px] w-[350px]"
                    />
                </div>
                <div className="lg:mx-0 mx-5 lg:text-base text-sm">
                    <input type="checkbox" name="" id="" />
                    <span className="mx-2">Remember me</span>
                    <span className="ml-24 text-blue-600">
                        <Link to="/reset-password-cis">Forgot password ?</Link>
                    </span>
                </div>
                <div className="flex justify-center">
                    <button className="bg-blue-500 lg:px-40 px-28 hover:bg-violet-600 py-2 rounded-md text-white font-bold">
                        SIGN IN
                    </button>
                </div>
                <div className="space-x-7 flex justify-center text-blue-600 cursor-pointer">
                    Don't have account ?
                    <Link to="/sign-up-cis" className="ml-3">
                        Sign up
                    </Link>
                </div>
            </form>
        </div>
    );
}
