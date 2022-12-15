import React from "react";

export default function Footer5() {
    return (
        <div className="bg-purple-200 w-full flex flex-col justify-center items-center lg:px-20 px-7 py-10 font-raleway">
            <div>
                <div className="flex justify-between items-start flex-wrap flex-row w-full text-left">
                    <div className="flex flex-col w-[250px] lg:mx-4 mt-0 mx-0 my-4">
                        <p className="text-3xl mb-1 font-extrabold">Logo</p>
                        <p className="text-xs leading-lg">
                            Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
                        </p>
                    </div>
                    <div className="flex justify-start flex-col w-[250px] lg:m-4 mx-0 my-4">
                        <h4 className="text-2xl leading-5 font-extrabold mb-6">Links</h4>
                        <p className="text-xs leading-lg cursor-pointer mb-4 hover:text-violet-500">
                            <a href="/">Overons</a>
                        </p>
                        <p className="text-xs leading-4 cursor-pointer mb-4 hover:text-violet-500">
                            <a href="/">Social Media</a>
                        </p>
                        <p className="text-xs leading-4 cursor-pointer mb-4 hover:text-violet-500">
                            <a href="/">Counters</a>
                        </p>
                        <p className="text-xs leading-4 cursor-pointer mb-4 hover:text-violet-500">
                            <a href="/">Contact</a>
                        </p>
                    </div>
                    <div className="flex justify-start flex-col w-[250px] lg:m-4 mx-0 my-4">
                        <h4 className="text-2xl leading-4 font-bold mb-6">Company</h4>
                        <p className="text-xs leading-4 cursor-pointer mb-4 hover:text-violet-500">
                            <a href="/">Terms & Conditions</a>
                        </p>
                        <p className="text-xs leading-4 cursor-pointer mb-4 hover:text-violet-500">
                            <a href="/">Privacy Policy</a>
                        </p>
                        <p className="text-xs leading-4 cursor-pointer mb-4 hover:text-violet-500">
                            <a href="/">Contact</a>
                        </p>
                    </div>
                    <div className="flex justify-start flex-col w-[250px] lg:m-4 mx-0 my-4">
                        <h4 className="text-2xl leading-4 font-bold mb-6">Contact</h4>
                        <p className="text-xs leading-lg mb-4">Crechterwoord K12 182 DK Alknjkcb</p>
                        <p className="text-xs leading-5 mb-4">085-132567</p>
                        <a className="text-xs leading-5" href="mailto:example@gmail.com">
                            example@gmail.com
                        </a>
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <footer className="p-4 bg-white rounded-lg shadow flex flex-col md:items-center md:justify-between md:p-6 dark:bg-gray-800">
                    <ul className="flex flex-wrap justify-center  items-center mt-3 text-2xl font-bold text-gray-500 dark:text-gray-400 sm:mt-0 lg:space-x-10">
                        <li>
                            <a href="/" className="mr-4 hover:text-blue-400 md:mr-6 ">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="/" className="mr-4 hover:text-blue-400 md:mr-6">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="/" className="mr-4 hover:text-blue-400 md:mr-6">
                                Licensing
                            </a>
                        </li>
                        <li>
                            <a href="/" className="hover:text-blue-400">
                                Contact
                            </a>
                        </li>
                    </ul>
                    <div className="mt-5 flex items-center justify-center">
                        <span className="text-xl text-gray-500 sm:text-center dark:text-gray-400">
                            © 2022{" "}
                            <a href="/" className="hover:underline">
                                Cisse™
                            </a>
                            . All Rights Reserved.
                        </span>
                    </div>
                </footer>
            </div>
        </div>
    );
}
