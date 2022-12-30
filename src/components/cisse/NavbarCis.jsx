import React from "react";
export default function NavbarCis() {
    return (
        <div className="font-raleway">
            {/* First Navbar */}
            <nav className="w-full bg-gray-50 px-2 sm:px-4 py-2.5 fixed top-0 left-0 border-b border-gray-200">
                <div className="flex flex-wrap justify-between items-center mx-auto">
                    <div className="">
                        <a href="/">Logo</a>
                    </div>
                    <div className="flex md:order-2">
                        <button
                            type="button"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Get started
                        </button>
                        <button
                            data-collapse-toggle="navbar-sticky"
                            type="button"
                            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-sticky"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-6 h-6"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
                        id="navbar-sticky"
                    >
                        <ul className="flex p-4 mt-4 rounded-lg space-x-10">
                            <li>
                                <a href="/" className="block py-2 pr-4 pl-3 text-gray-700 md:p-0">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                                >
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                                >
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                                >
                                    About
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="mt-44 bg-black py-10 text-white flex items-center px-5 font-bold">
                <nav className="fixed w-full shadow">
                    <div className="container m-auto flex justify-between">
                        <h1 className="pl-8 text-xl font-bold">
                            <a href="/">Logo</a>
                        </h1>
                        <ul className="hidden md:flex items-center pr-10 space-x-9">
                            <li>
                                <a href="/">Acceuil</a>
                            </li>
                            <li>
                                <a href="/">Services</a>
                            </li>
                            <li>
                                <a href="/">Skills</a>
                            </li>
                            <li>
                                <a href="/">Contact</a>
                            </li>
                            <li>
                                <a href="/">About</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            {/*3ème */}
            <nav className="fixed mt-44 bg-[#3235ce]  w-full shadow text-white font-semibold">
                <div className="container m-auto flex justify-between items-center">
                    <h1 className="pl-8 py-4 text-xl font-bold">
                        <a href="/">Logo</a>
                    </h1>
                    <ul className="hidden md:flex items-center pr-10 text-base font-semibold cursor-pointer text-white">
                        <li className="py-4 px-6">
                            <a href="/">Acceuil</a>
                        </li>
                        <li className="py-4 px-6">
                            <a href="/">Nos cours</a>
                        </li>
                        <li className="py-4 px-6">
                            <a href="/">Actualité</a>
                        </li>
                        <li className="py-4 px-6">
                            <a href="/">Dictionnaire</a>
                        </li>
                        <li className="py-4 px-6">
                            <a href="/">Devenir rédacteur</a>
                        </li>
                        <li className="py-2 px-4 ml-20 bg-[#02FF84] text-black rounded-lg hover:bg-amber-500">
                            <a href="/">S'inscrire/Se connecter</a>
                        </li>
                    </ul>
                    <button className="block md:hidden py-3 px-4 mx-2 rounded focus:outline-none hover:bg-gray-200 group text-black">
                        <div className="w-5 h-1 bg-gray-600 mb-1"></div>
                        <div className="w-5 h-1 bg-gray-600 mb-1"></div>
                        <div className="w-5 h-1 bg-gray-600"></div>
                        <div className="absolute top-0 -right-full opacity-0 h-80 w-8/12 bg-white border transform group-focus:right-0 group-focus:opacity-100 transition-all duration-300">
                            <ul className="flex flex-col items-center w-full text-base cursor-pointer pt-1 font-bold">
                                <li className="close_window ml-44">
                                    <button className="text-2xl">X</button>
                                </li>
                                <li className="hover:bg-gray-200 py-2 px-6 w-full">
                                    <a href="/">Acceuil</a>
                                </li>
                                <li className="hover:bg-gray-200 py-2 px-6 w-full">
                                    <a href="/">Nos cours</a>
                                </li>
                                <li className="hover:bg-gray-200 py-2 px-6 w-full">
                                    <a href="/">Actualité</a>
                                </li>
                                <li className="hover:bg-gray-200 py-2 px-6 w-full">
                                    <a href="/">Dictionnaire</a>
                                </li>
                                <li className="hover:bg-gray-200 py-2 px-6">
                                    <a href="/">Devenir rédacteur</a>
                                </li>
                                <li className="py-2 px-6 bg-[#02FF84] rounded-lg hover:bg-amber-500">
                                    <a href="/">S'inscrire/Se connecter</a>
                                </li>
                            </ul>
                        </div>
                    </button>
                </div>
            </nav>
        </div>
    );
}
