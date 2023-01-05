import React from "react";
import { Link } from "react-router-dom";

import signuppage from "../../assets/img/signup.jpg";

const style = {
    wrapper: "grid grid-cols-1 sm:grid-cols-2 w-full h-screen",
    imageContainer: "hidden sm:block",
    image: "w-full h-screen object-cover",
    container: "bg-black text-black flex flex-col justify-center",
    form: "max-w-[400px] w-full mx-auto p-8 px-8 bg-yellow-400 rounded-lg shadow-lg shadow-yellow-800/90",
    buttonSignContainer: "flex text-center font-semibold",
    buttonSignUp: "w-1/2 my-5 py-2 bg-black text-white shadow-lg hover:bg-yellow-400 rounded-l-lg",
    buttonSignIn: "w-1/2 my-5 py-2 bg-yellow-400 shadow-lg hover:bg-black rounded-r-lg text-white",
    titleH2: "text-4xl font-bold text-center pb-2",
    ConContainer: "flex pt-2",
    inputConSep: "w-1/2 rounded-lg bg-black focus:border-blue:500 focus:bg-gray:800 text-white ",
    con: "flex flex-col text-black py-2",
    inputCont: "rounded-lg bg-black mt-2 p-2 focus:border-blue:500 focus:bg-gray:800 text-white",
    policy: "text-white hover:text-black cursor:pointer",
    buttonContainer: "font-semibold hover:text-white",
    buttonGetStarted: "w-full my-5 py-2 bg-yellow-400 shadow-lg shadow-black hover:bg-black",
    span: "text-center "
};

function SignupYag() {
    return (
        <div className={style.wrapper}>
            <div className={style.imageContainer}>
                <img className={style.image} src={signuppage} alt="" />
            </div>
            <div className={style.container}>
                <form className={style.form}>
                    <div className={style.buttonSignContainer}>
                        <Link to="#" className={style.buttonSignUp}>
                            <button>Sign Up</button>
                        </Link>
                        <Link to="/signin-yag" className={style.buttonSignIn}>
                            <button>Sign In</button>
                        </Link>
                    </div>
                    <h2 className={style.titleH2}>Sign Up</h2>
                    <div className={style.ConContainer}>
                        <div className={style.conSep}>
                            <input
                                className={style.inputConSep}
                                type="text"
                                placeholder=" First Name*"
                                required
                            />
                            <input
                                className={style.inputConSep}
                                type="text"
                                placeholder=" Last Name*"
                                required
                            />
                        </div>
                    </div>
                    <div className={style.con}>
                        <input
                            className={style.inputCont}
                            type="email"
                            placeholder=" Email Address*"
                            required
                        />
                    </div>
                    <div className={style.con}>
                        <input
                            className={style.inputCont}
                            type="password"
                            placeholder=" Set A Password*"
                            required
                        />
                    </div>
                    <p>
                        <input type="checkbox" /> I agree to the{" "}
                        <Link to="#" className={style.policy}>
                            Terms of Service and Privacy Policy.
                        </Link>
                    </p>
                    <div className={style.buttonContainer}>
                        <button className={style.buttonGetStarted}>GET STARTED</button>
                    </div>
                    <div className={style.span}>
                        <span>
                            Already have an account?{" "}
                            <Link to="/signin-yag" className={style.policy}>
                                Login
                            </Link>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignupYag;
