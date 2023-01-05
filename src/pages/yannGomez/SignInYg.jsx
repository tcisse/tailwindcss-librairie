import React from "react";
import { RiSafe2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

import signinpage from "../../assets/img/signinpage.jpg";

const style = {
    wrapper: "grid grid-cols-1 sm:grid-cols-2 w-full h-screen",
    imageContainer: "hidden sm:block",
    image: "w-full h-screen object-cover",
    container: "bg-black text-black flex flex-col justify-center",
    form: "max-w-[400px] w-full mx-auto p-8 px-8 bg-yellow-400 rounded-lg shadow-lg shadow-yellow-800/90",
    titleH2: "text-4xl font-bold text-center",
    con: "flex flex-col text-black py-2",
    inputCont: "rounded-lg bg-black mt-2 p-2 focus:border-blue:500 focus:bg-gray:800",
    passwordContainer: "flex justify-between text-black py-2",
    checkboxContainer: "flex items-center",
    checkbox: "mr-2",
    safeCon: "flex hover:text-white",
    safe: "mt-1.5",
    buttonContainer: "font-semibold hover:text-white",
    buttonSignIn: "w-full my-5 py-2 bg-yellow-400 shadow-lg shadow-black hover:bg-black"
};

function SignInYg() {
    return (
        <div className={style.wrapper}>
            <div className={style.imageContainer}>
                <img className={style.image} src={signinpage} alt="" />
            </div>
            <div className={style.container}>
                <form className={style.form}>
                    <h2 className={style.titleH2}>SIGN IN</h2>
                    <div className={style.con}>
                        <label>Email</label>
                        <input className={style.inputCont} type="email" placeholder=" Email" />
                    </div>
                    <div className={style.con}>
                        <label>Password</label>
                        <input
                            className={style.inputCont}
                            type="password"
                            placeholder=" Password"
                        />
                    </div>
                    <div className={style.passwordContainer}>
                        <p className={style.checkboxContainer}>
                            <input type="checkbox" className={style.checkbox} />
                            Remenber Me
                        </p>
                        <Link to="/ResetPasswordYg" className={style.safeCon}>
                            <RiSafe2Fill className={style.safe} />
                            Forgot password
                        </Link>
                    </div>
                    <div className={style.buttonContainer}>
                        <button className={style.buttonSignIn}>Sign in</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignInYg;
