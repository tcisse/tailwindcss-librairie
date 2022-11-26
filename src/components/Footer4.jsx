import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowSmallRightIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";

export default function Footer4() {
  return (
    <footer className="w-full pt-6 bg-white shadow-md flex flex-col">
      {/* Newsletter and  form */}

      <div className="w-full flex justify-center space-x-8 mb-6">
        <div className="text-[18px] font-semibold text-slate-500">
          NEWSLETTER
        </div>
        <div className="">
          <form action="" className="flex space-x-4">
            <input
              type="text"
              name=""
              id=""
              className="border-2 rounded-md h-[40px] px-4 min-w-[250px]"
              placeholder="Your name"
            />
            <input
              type="email"
              name=""
              id=""
              className="border-2 rounded-md h-[40px] px-4 min-w-[250px]"
              placeholder="Your email"
            />
            <button className="h-[40px] bg-indigo-500 text-gray-100 rounded-md px-4">
              Subscribe to newsletter
            </button>
          </form>
        </div>
      </div>

      <hr className="w-[90%] mx-auto" />
      <div className="w-full py-4 px-8 flex justify-center">
        <div className="text-[25px] text-indigo-500 font-bold">Logo</div>
        <div className="flex flex-1 justify-evenly">
          <div className="flex flex-col space-y-2">
            <div className="text-slate-500">PRODUCT</div>
            <ul className="font-semibold text-[18px] flex flex-col space-y-3 text-slate-700">
              <li>All products</li>
              <li>Categories</li>
              <li>Top rated</li>
              <li>Most wanted</li>
            </ul>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="text-slate-500">PATNERS</div>
            <ul className="font-semibold text-[18px] flex flex-col space-y-3 text-slate-700">
              <li>Become a patner</li>
              <li className="flex items-center space-x-2">
                <span>See our patners</span>
                <span>
                  <ArrowSmallRightIcon className="w-4 h-4" />
                </span>
              </li>
              <li>Why become our patner ?</li>
            </ul>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="text-slate-500">CONTACTS</div>
            <ul className="font-semibold text-[18px] flex flex-col space-y-3 text-slate-700">
              <li className="flex items-center space-x-2">
                <PhoneIcon className="w-4 h-4" />
                <span>+229 65 25 78 XX</span>{" "}
              </li>
              <li className="flex items-center space-x-2">
                <EnvelopeIcon className="w-4 h-4" />
                <span>youremail@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>F D E</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="w-full flex bg-slate-600 py-4 px-8 text-gray-100">
        <div className="flex items-center flex-1 justify-center">
          <ul className="flex items-center space-x-6 ">
            <li>© 2022 My app , All rights reserved</li>
            <li>About</li>
            <li>Terms & Privacy</li>
          </ul>
        </div>
        <div className="flex space-x-4 items-center justify-center">
          <Link to="">F</Link>
          <Link to="">I</Link>
          <Link to="">T</Link>
        </div>
      </div>
    </footer>
  );
}
