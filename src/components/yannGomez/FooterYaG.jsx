import React from "react";

const style = {
    footer7: "bg-[#000] text-white",
    wraper: "md:flex md:justify-between md:items-center sm:px-12 px-7 bg-[#ffffff19] py-10 w-full flex flex-col",
    container: "flex flex-wrap flex-row w-full text-left justify-between items-start",
    bloc1: "flex flex-col w-[250px] lg:mx-4 mt-0 mx-0 my-4",
    logoConatainer: "text-2xl mb-1 font-bold",
    localisation: "text-xs leading-lg",
    h4Title: "text-2xl leading-4 font-extrabold mb-6",
    bloc2Container: "text-xs leading-4 cursor-pointer mb-4 hover:text-yellow-500",
    coporate: "mt-5 flex items-end justify-end",
    coporateSpan: "text-1.5xl sm:text-center",
    coporateSpanA: "hover:text-yellow-500 cursor-pointer"
};

const Footer = () => {
    return (
        <footer className={style.footer7}>
            <div className={style.wraper}>
                <div className={style.container}>
                    <div className={style.bloc1}>
                        <a className={style.logoConatainer} href="/">
                            LOGO container
                        </a>
                        <p className={style.localisation}>Position Benin, Avenue Jean Paul II </p>
                    </div>
                    <div className={style.bloc1}>
                        <h4 className={style.h4Title}>About</h4>
                        <a className={style.bloc2Container} href="/">
                            Privacy Notice
                        </a>
                        <a className={style.bloc2Container} href="/">
                            Additional Choices
                        </a>
                        <a className={style.bloc2Container} href="/">
                            Do Not Track
                        </a>
                    </div>
                    <div className={style.bloc1}>
                        <h4 className={style.h4Title}>CONTACT</h4>
                        <a className={style.bloc2Container} href="/">
                            Careers
                        </a>
                        <a className={style.bloc2Container} href="/">
                            Contact Us
                        </a>
                        <a className={style.bloc2Container} href="/">
                            commercil@gmail.com
                        </a>
                    </div>
                    <div className={style.bloc1}>
                        <h4 className={style.h4Title}>More</h4>
                        <a className={style.bloc2Container} href="/">
                            Our Company
                        </a>
                        <a className={style.bloc2Container} href="/">
                            Terms of Use
                        </a>
                        <a className={style.bloc2Container} href="/">
                            +450953268743
                        </a>
                    </div>
                </div>
                <div className={style.coporate}>
                    <span className={style.coporateSpan}>
                        © 2023{" "}
                        <a className={style.coporateSpanA} href="https://github.com/Yanngomez">
                            Yann_Gomez.{" "}
                        </a>
                        All rigths reserved
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
