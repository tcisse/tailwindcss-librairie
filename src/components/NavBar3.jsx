//LibertAssogba work
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import userProfil from "../assets/img/user-profil.jpg";
export default function NavBar() {
  const [openNavbar1, setOpenNavbar1] = useState(false);
  const [openNavbar2, setOpenNavbar2] = useState(false);
  const navbarMenu1 = useRef(null);
  const navbarMenu2 = useRef(null);
  const dropdownMenu = useRef(null);
  const [openDropdown, setOpenDropdown] = useState(false);

  const toggleNavbar1 = () => {
    if (navbarMenu1.current.classList.contains("-left-[200%]")) {
      navbarMenu1.current.classList.replace("-top-[200%]", "left-[0px]");
      setOpenNavbar1(true);
    } else {
      navbarMenu1.current.classList.replace("left-[0px]", "-left-[200%]");
      setOpenNavbar1(false);
    }
  };

  const toggleNavbar2 = () => {
    if (navbarMenu2.current.classList.contains("-left-[200%]")) {
      navbarMenu2.current.classList.replace("-top-[200%]", "left-[0px]");
      setOpenNavbar2(true);
    } else {
      navbarMenu2.current.classList.replace("left-[0px]", "-left-[200%]");
      setOpenNavbar2(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 font-raleway">
      <h1 className="py-3 mb-6 text-[25px] text-center">Navbar component</h1>

      <div className="flex flex-col w-full space-y-10">
        <div className="flex flex-col w-full space-y-4">
          {/* Navbar without icons and dropdown menu */}
          <div className="px-4 text-center text-indigo-500">
            Simple navbar without icons
          </div>
          <div className="w-full h-[70px] px-4 lg:px-8 flex items-center justify-between shadow-md dark:bg-slate-800 bg-white z-40">
            <div onClick={toggleNavbar1} className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-[30px] h-[30px] text-slate-700 dark:text-blue-500"
              >
                <path
                  fillRule="evenodd"
                  d="M2 6.75A.75.75 0 012.75 6h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 6.75zm0 6.5a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="flex items-center h-full text-[20px] lg:text-[30px] text-indigo-500">
              NavBar
            </div>
            <div
              ref={navbarMenu1}
              id="navbarMenu"
              className={` ${
                openNavbar1 ? "left-0" : "-left-[200%]"
              } fixed lg:relative lg:left-0 top-0 z-50 w-full md:w-[40%] lg:w-auto  flex flex-row h-screen lg:h-full `}
            >
              <ul className="flex flex-col items-start space-y-4 w-[80%] lg:space-y-0 lg:flex-row p-4 !pt-8 pl-8 lg:!p-0 lg:items-center lg:justify-between lg:w-full h-full lg:space-x-8 hover:[&>*]:scale-110 hover:[&>*]:text-indigo-500 dark:text-gray-200 dark:bg-slate-800 bg-white">
                <li className="hover:scale-110">
                  <Link to="#">Home</Link>
                </li>
                <li>
                  <Link to="#">About</Link>
                </li>
                <li>
                  <Link to="#">Services</Link>
                </li>
                <li>
                  <Link to="#">Our team</Link>
                </li>
                <li>
                  <Link to="#">Contact-us</Link>
                </li>
              </ul>
              <div
                onClick={() => setOpenNavbar1(false)}
                className="flex-1 h-[200%] bg-slate-900/50 flex justify-center pt-8 lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-[30px] h-[30px] text-red-500"
                >
                  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                </svg>
              </div>
            </div>
            <div className="flex items-center h-full">
              <button className="px-4 py-1 text-gray-100 bg-indigo-500 rounded-md bg-gradient-to-l from-blue-500 to-indigo-500 hover:shadow-md">
                Sign in
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full space-y-4">
          {/* Navbar with icons and dropdown menu */}
          <div className="px-4 text-center text-indigo-500">
            Navbar with icons and dropdown menu
          </div>
          <div className="w-full h-[60px] text-slate-700 md:h-[70px] px-4 lg:px-8 flex items-center justify-between shadow-md dark:bg-slate-800 bg-white z-30">
            <div onClick={toggleNavbar2} className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-[30px] h-[30px] text-slate-700 dark:text-blue-500"
              >
                <path
                  fillRule="evenodd"
                  d="M2 6.75A.75.75 0 012.75 6h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 6.75zm0 6.5a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="flex items-center h-full text-[20px] lg:text-[30px] text-indigo-500">
              NavBar
            </div>
            <div
              ref={navbarMenu2}
              id="navbarMenu"
              className={` ${
                openNavbar2 ? "left-0" : "-left-[200%]"
              } fixed lg:relative lg:left-0 top-0 !z-50 w-full md:w-[40%] lg:w-auto flex flex-row  h-screen lg:h-full `}
            >
              <ul className="flex  flex-col items-start space-y-4 w-[80%] lg:space-y-0 lg:flex-row p-4 !pt-8 pl-8 lg:!p-0 lg:items-center lg:justify-between lg:w-full h-full lg:space-x-8 hover:[&>*]:scale-110 hover:[&>*]:text-indigo-500 dark:text-gray-200 dark:bg-slate-800 bg-white">
                <li className="hover:scale-110">
                  <Link to="#" className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-[20px]"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
                        clip-rule="evenodd"
                      />
                    </svg>

                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-[20px]"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
                        clip-rule="evenodd"
                      />
                    </svg>

                    <span>About</span>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-[20px]"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6 3.75A2.75 2.75 0 018.75 1h2.5A2.75 2.75 0 0114 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 016 4.193V3.75zm6.5 0v.325a41.622 41.622 0 00-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25zM10 10a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V11a1 1 0 00-1-1H10z"
                        clip-rule="evenodd"
                      />
                      <path d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 01-9.274 0C3.985 17.585 3 16.402 3 15.055z" />
                    </svg>

                    <span>Services</span>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-[20px]"
                    >
                      <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM16.44 15.98a4.97 4.97 0 002.07-.654.78.78 0 00.357-.442 3 3 0 00-4.308-3.517 6.484 6.484 0 011.907 3.96 2.32 2.32 0 01-.026.654zM18 8a2 2 0 11-4 0 2 2 0 014 0zM5.304 16.19a.844.844 0 01-.277-.71 5 5 0 019.947 0 .843.843 0 01-.277.71A6.975 6.975 0 0110 18a6.974 6.974 0 01-4.696-1.81z" />
                    </svg>

                    <span>Our team</span>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="flex items-center space-x-2 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-[20px]"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 2c-2.236 0-4.43.18-6.57.524C1.993 2.755 1 4.014 1 5.426v5.148c0 1.413.993 2.67 2.43 2.902.848.137 1.705.248 2.57.331v3.443a.75.75 0 001.28.53l3.58-3.579a.78.78 0 01.527-.224 41.202 41.202 0 005.183-.5c1.437-.232 2.43-1.49 2.43-2.903V5.426c0-1.413-.993-2.67-2.43-2.902A41.289 41.289 0 0010 2zm0 7a1 1 0 100-2 1 1 0 000 2zM8 8a1 1 0 11-2 0 1 1 0 012 0zm5 1a1 1 0 100-2 1 1 0 000 2z"
                        clip-rule="evenodd"
                      />
                    </svg>

                    <span>Contact-us</span>
                  </Link>
                </li>
              </ul>
              <div
                onClick={() => setOpenNavbar2(false)}
                className="flex-1 h-[200%] bg-slate-900/50 flex justify-center pt-8 lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-[30px] h-[30px] text-red-500"
                >
                  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                </svg>
              </div>
            </div>
            <div className="relative flex items-center h-full">
              <div
                id="dropdown-button"
                onClick={() => setOpenDropdown(!openDropdown)}
                className="relative h-[35px] w-[35px] overflow-hidden rounded-full bg-blue-600"
              >
                <img src={userProfil} alt="" className="object-cover" />
              </div>

              <div
                ref={dropdownMenu}
                id="dropdownMenu"
                className={` ${
                  openDropdown ? "scale-100" : "scale-0"
                } w-[150px] absolute z-30 top-[75px] md:top-[85px] -right-[10px]`}
              >
                <div className="flex pt-4  relative w-full h-full border border-slate-200 bg-white dark:bg-slate-700 rounded-md rounded-tr-[8px] shadow-md">
                  <div className="h-0 w-0 absolute -z-20 -top-[10px] right-[15px] border-b-[12px] border-l-[7px] border-b-white shadow-lg dark:border-b-slate-700 border-r-[7px] border-l-transparent border-r-transparent"></div>

                  <div className="text-[13px] flex flex-col overflow-hidden space-y-4 w-full text-slate-500 dark:text-gray-200">
                    <ul className="flex flex-col w-full px-3 space-y-4 hover:[&>*]:text-indigo-500">
                      <li>
                        <Link to="#" className="flex items-center space-x-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className="h-[14px]"
                          >
                            <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
                          </svg>

                          <span>Profil</span>
                        </Link>
                      </li>

                      <li>
                        <Link to="#" className="flex items-center space-x-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className="h-[14px]"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M3.43 2.524A41.29 41.29 0 0110 2c2.236 0 4.43.18 6.57.524 1.437.231 2.43 1.49 2.43 2.902v5.148c0 1.413-.993 2.67-2.43 2.902a41.202 41.202 0 01-5.183.501.78.78 0 00-.528.224l-3.579 3.58A.75.75 0 016 17.25v-3.443a41.033 41.033 0 01-2.57-.33C1.993 13.244 1 11.986 1 10.573V5.426c0-1.413.993-2.67 2.43-2.902z"
                              clip-rule="evenodd"
                            />
                          </svg>

                          <span>Message</span>
                        </Link>
                      </li>

                      <li>
                        <Link to="#" className="flex items-center space-x-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className="h-[14px]"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 2a6 6 0 00-6 6c0 1.887-.454 3.665-1.257 5.234a.75.75 0 00.515 1.076 32.91 32.91 0 003.256.508 3.5 3.5 0 006.972 0 32.903 32.903 0 003.256-.508.75.75 0 00.515-1.076A11.448 11.448 0 0116 8a6 6 0 00-6-6zM8.05 14.943a33.54 33.54 0 003.9 0 2 2 0 01-3.9 0z"
                              clip-rule="evenodd"
                            />
                          </svg>

                          <span>Notifications</span>
                        </Link>
                      </li>

                      <li>
                        <Link to="#" className="flex items-center space-x-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className="h-[14px]"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8.34 1.804A1 1 0 019.32 1h1.36a1 1 0 01.98.804l.295 1.473c.497.144.971.342 1.416.587l1.25-.834a1 1 0 011.262.125l.962.962a1 1 0 01.125 1.262l-.834 1.25c.245.445.443.919.587 1.416l1.473.294a1 1 0 01.804.98v1.361a1 1 0 01-.804.98l-1.473.295a6.95 6.95 0 01-.587 1.416l.834 1.25a1 1 0 01-.125 1.262l-.962.962a1 1 0 01-1.262.125l-1.25-.834a6.953 6.953 0 01-1.416.587l-.294 1.473a1 1 0 01-.98.804H9.32a1 1 0 01-.98-.804l-.295-1.473a6.957 6.957 0 01-1.416-.587l-1.25.834a1 1 0 01-1.262-.125l-.962-.962a1 1 0 01-.125-1.262l.834-1.25a6.957 6.957 0 01-.587-1.416l-1.473-.294A1 1 0 011 10.68V9.32a1 1 0 01.804-.98l1.473-.295c.144-.497.342-.971.587-1.416l-.834-1.25a1 1 0 01.125-1.262l.962-.962A1 1 0 015.38 3.03l1.25.834a6.957 6.957 0 011.416-.587l.294-1.473zM13 10a3 3 0 11-6 0 3 3 0 016 0z"
                              clip-rule="evenodd"
                            />
                          </svg>

                          <span>Settings</span>
                        </Link>
                      </li>
                    </ul>
                    <div className="w-full py-2 text-center border-t">
                      <Link
                        to="#"
                        className="flex items-center justify-center w-full space-x-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-[14px]"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M13.75 7h-3V3.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0L6.2 4.74a.75.75 0 001.1 1.02l1.95-2.1V7h-3A2.25 2.25 0 004 9.25v7.5A2.25 2.25 0 006.25 19h7.5A2.25 2.25 0 0016 16.75v-7.5A2.25 2.25 0 0013.75 7zm-3 0h-1.5v5.25a.75.75 0 001.5 0V7z"
                            clip-rule="evenodd"
                          />
                        </svg>

                        <span>Sign out</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
