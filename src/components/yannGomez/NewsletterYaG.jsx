import React from "react";
import { HiOutlineMailOpen } from "react-icons/hi";
import { Link } from "react-router-dom";

const style = {
    wrapper: "h-screen items-center justify-center flex bg-zinc-900",
    container: "bg-slate-400 rounded-2xl border shadow-x1 p-10 max-w-lg",
    containerH1: "flex flex-col items-center space-y-4",
    h1Title: "font-bold text-6xl text-center text-black ",
    pText: "text-sm text-black text-center w-5/6",
    inputContainer: "flex max-w-lg w-full",
    buttonEmail: "bg-yellow-400 px-3 hover:bg-slate-500 rounded-l-lg",
    input: "border-solid border-2 border-yellow-400 rounded-r-lg w-full h-12 px-4",
    button: "bg-yellow-400 text-black text-2xl hover:bg-slate-500 rounded-lg font-semibold px-4 py-3 place-self-end",
    policy: "hover:text-yellow-200 cursor:pointer"
};

function NewsletterYaG() {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <div className={style.containerH1}>
                    <h1 className={style.h1Title}>Newsletters</h1>
                    <p className={style.pText}>
                        Hello, please enter your email address to subscibe our newsletter.
                    </p>
                    <div className={style.inputContainer}>
                        <button className={style.buttonEmail}>
                            <HiOutlineMailOpen />
                        </button>
                        <input type="text" placeholder="Email address" className={style.input} />
                    </div>
                    <button className={style.button}> SUBSCRITE</button>
                    <p>
                        We care about the protection of your data.{" "}
                        <Link href="/" className={style.policy}>
                            Read our Privacy Policy.
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default NewsletterYaG;
