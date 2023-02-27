import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { MdSpaceDashboard } from "react-icons/md";
import { TbSettings } from "react-icons/tb";
import { Link } from "react-router-dom";

import TopCards from "../cisse/TopCards";

export default function SideBar() {
    return (
        <div>
            <div className="flex">
                <div className="fixed w-20 h-screen p-4 bg-white border-r-2 flex flex-col justify-between">
                    <div className="flex flex-col items-center">
                        <Link href="/">
                            <div className="bg-purple-800 text-white p-3 rounded-lg inline-block">
                                <BiHomeAlt size={25} className="" />
                            </div>
                        </Link>
                        <span className="border-b-2 border-gray-200 w-full">Home</span>
                        <Link href="/">
                            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
                                <MdSpaceDashboard size={25} className="" />
                            </div>
                        </Link>
                        <Link href="/">
                            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
                                <BsFillPersonFill color="text-black" size={25} className="" />
                            </div>
                        </Link>
                        <Link href="/">
                            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
                                <TbSettings color="text-black" size={25} className="" />
                            </div>
                        </Link>
                    </div>
                </div>
                <h2 className="ml-32">Welcome back, Cissé</h2>
            </div>
            <div>
                <TopCards />
            </div>
        </div>
    );
}
