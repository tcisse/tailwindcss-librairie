import React from "react";

export default function Footer6() {
  return (
    <div className="mt-10">
      <footer class="p-4 bg-white rounded-lg shadow flex flex-col md:items-center md:justify-between md:p-6 dark:bg-gray-800">
        <ul className="flex flex-wrap justify-center  items-center mt-3 text-2xl font-bold text-gray-500 dark:text-gray-400 sm:mt-0 lg:space-x-10">
          <li>
            <a href="/" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="/" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/" className="mr-4 hover:underline md:mr-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="/" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
        <div className="mt-5">
          <span class="text-xlsd text-gray-500 sm:text-center dark:text-gray-400">
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
