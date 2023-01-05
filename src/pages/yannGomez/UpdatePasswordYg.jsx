import React from "react";
import { Link } from "react-router-dom";

import passwordLogo from "../../assets/img/password.jpg";
const style = {
    wrapper: "grid grid-cols-1 sm:grid-cols-2 w-full h-screen",
    imageContainer: "hidden sm:block",
    image: "w-full h-screen object-cover",
    container: "bg-black text-black flex flex-col justify-center",
    form: "max-w-[400px] w-full mx-auto p-8 px-8 bg-yellow-400 rounded-lg shadow-lg shadow-yellow-800/90",
    titleH2: "text-4xl font-bold text-center",
    titleH4: "text-1xl text-center mt-2",
    con: "flex flex-col text-gray-400 py-2",
    inputCont: "rounded-lg bg-black mt-2 p-2 focus:border-blue:500 focus:bg-gray:800",
    buttonContainer: "flex text-center font-semibold",
    buttonBack: "w-1/2 my-5 py-2 bg-black text-white shadow-lg hover:bg-yellow-400 rounded-l-lg",
    buttonReset: "w-1/2 my-5 py-2 bg-yellow-400 shadow-lg hover:bg-black rounded-r-lg text-white"
};
function ResetPasswordYg() {
    return (
        <div className={style.wrapper}>
            <div className={style.imageContainer}>
                <img className={style.image} src={passwordLogo} alt="" />
            </div>
            <div className={style.container}>
                <form className={style.form}>
                    <h2 className={style.titleH2}>Reset Password</h2>
                    <h4 className={style.titleH4}>Choose a new passord</h4>
                    <div className={style.con}>
                        <input
                            className={style.inputCont}
                            type="password"
                            placeholder="Current Password"
                        />
                    </div>
                    <div className={style.con}>
                        <input
                            className={style.inputCont}
                            type="password"
                            placeholder="New Password"
                        />
                    </div>
                    <div className={style.con}>
                        <input
                            className={style.inputCont}
                            type="password"
                            placeholder="Confirm New Password"
                        />
                    </div>
                    <div className={style.buttonContainer}>
                        <Link to="/ResetPasswordYg" className={style.buttonBack}>
                            <button>Back</button>
                        </Link>
                        <Link to="/Signin1" className={style.buttonReset}>
                            <button>Change</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ResetPasswordYg;
