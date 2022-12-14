import React from "react";

export default function Footer6() {
    return (
        <div className="mt-10">
            <footer class="p-4 bg-white rounded-lg shadow flex flex-col md:items-center md:justify-between md:p-6 dark:bg-gray-800">
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
                    <span class="text-xl text-gray-500 sm:text-center dark:text-gray-400">
                        © 2022{" "}
                        <a href="/" class="hover:underline">
                            Cisse™
                        </a>
                        . All Rights Reserved.
                    </span>
                </div>
            </footer>
        </div>
    );
}
