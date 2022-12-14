import React from "react";
import { index_1, index_2, index_3 } from "../../assets/img/exports";
const getYear = () => {
    let today = new Date();
    let year = today.getUTCFullYear();
    return year;
};

const Footer2 = () => {
    return (
        <div className="flex flex-col justify-center items-center bg-gray-800 text-white px-8 lg:px-24 py-24">
            <div className="flex justify-between items-start flex-wrap flex-row w-full text-left">
                <div className="flex flex-col w-[250px] lg:mx-4 mt-0 mx-0 my-4">
                    <p className="text-[35px] mb-1 font-extrabold">Logo</p>
                </div>
                <div className="flex justify-start flex-col w-[250px] lg:m-4 mx-0 my-4">
                    <h4 className="font-medium leading-[16px] text-[#FFFFFF] mb-6">Quick Links</h4>
                    <p className=" text-[12px] leading-[14px] hover:text-orange-500 transition cursor-pointer mb-4">
                        Home
                    </p>
                    <p className=" text-[12px] leading-[14px] hover:text-orange-500 transition cursor-pointer mb-4">
                        Products
                    </p>
                    <p className=" text-[12px] leading-[14px] hover:text-orange-500 transition cursor-pointer mb-4">
                        About
                    </p>
                    <p className=" text-[12px] leading-[14px] hover:text-orange-500 transition cursor-pointer mb-4">
                        Features
                    </p>
                    <p className=" text-[12px] leading-[14px] hover:text-orange-500 transition cursor-pointer mb-4">
                        Contact
                    </p>
                </div>
                <div className="flex justify-start flex-col w-[250px] lg:m-4 mx-0 my-4">
                    <h4 className="font-medium leading-[16px] text-[#FFFFFF] mb-6 whitespace-nowrap">
                        Resources Links
                    </h4>
                    <p className="text-[12px] leading-[14px] hover:text-orange-500 transition cursor-pointer whitespace-nowrap mb-4">
                        Download Whitepapper
                    </p>
                    <p className="text-[12px] leading-[14px] hover:text-orange-500 transition cursor-pointer mb-4">
                        Smart Token
                    </p>
                    <p className="text-[12px] leading-[14px] hover:text-orange-500 transition cursor-pointer mb-4">
                        Blockchain Explore
                    </p>
                    <p className="text-[12px] leading-[14px] hover:text-orange-500 transition cursor-pointer mb-4">
                        Crypto API
                    </p>
                    <p className="text-[12px] leading-[14px] hover:text-orange-500 transition cursor-pointer mb-4">
                        Interest
                    </p>
                </div>
                <div className="flex justify-start flex-col w-[250px] lg:m-4 mx-0 my-4">
                    <h3 className="font-medium text-center mb-5 lg:mb-10 lg:text-left whitespace-nowrap">
                        We accept following payment systems
                    </h3>
                    <div className="flex justify-between items-center gap-4">
                        <img src={index_1} alt="error" className="w-[35%]" />
                        <img src={index_2} alt="error" className="w-[35%]" />
                        <img src={index_3} alt="error" className="w-[35%]" />
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center w-full lg:flex-row justify-between text-white">
                <div className="font-medium lg:mx-4 mt-0 mx-0 my-4">
                    © {getYear()} CRAPPO. All rights reserved.
                </div>
                <div className="flex text-2xl gap-x-[2rem]">
                    <svg
                        className="cursor-pointer hover:scale-110 transform transition duration-200"
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M508.6 148.8c0-45-33.1-81.2-74-81.2C379.2 65 322.7 64 265 64h-18c-57.6 0-114.2 1-169.6 3.6C36.6 67.6 3.5 104 3.5 149 1 184.6-.1 220.2 0 255.8c-.1 35.6 1 71.2 3.4 106.9 0 45 33.1 81.5 73.9 81.5 58.2 2.7 117.9 3.9 178.6 3.8 60.8.2 120.3-1 178.6-3.8 40.9 0 74-36.5 74-81.5 2.4-35.7 3.5-71.3 3.4-107 .2-35.6-.9-71.2-3.3-106.9zM207 353.9V157.4l145 98.2-145 98.3z"></path>
                    </svg>
                    <svg
                        className="cursor-pointer hover:scale-110 transform transition duration-200"
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M260.062 32C138.605 32 40.134 129.701 40.134 250.232c0 41.23 11.532 79.79 31.559 112.687L32 480l121.764-38.682c31.508 17.285 67.745 27.146 106.298 27.146C381.535 468.464 480 370.749 480 250.232 480 129.701 381.535 32 260.062 32zm109.362 301.11c-5.174 12.827-28.574 24.533-38.899 25.072-10.314.547-10.608 7.994-66.84-16.434-56.225-24.434-90.052-83.844-92.719-87.67-2.669-3.812-21.78-31.047-20.749-58.455 1.038-27.413 16.047-40.346 21.404-45.725 5.351-5.387 11.486-6.352 15.232-6.413 4.428-.072 7.296-.132 10.573-.011 3.274.124 8.192-.685 12.45 10.639 4.256 11.323 14.443 39.153 15.746 41.989 1.302 2.839 2.108 6.126.102 9.771-2.012 3.653-3.042 5.935-5.961 9.083-2.935 3.148-6.174 7.042-8.792 9.449-2.92 2.665-5.97 5.572-2.9 11.269 3.068 5.693 13.653 24.356 29.779 39.736 20.725 19.771 38.598 26.329 44.098 29.317 5.515 3.004 8.806 2.67 12.226-.929 3.404-3.599 14.639-15.746 18.596-21.169 3.955-5.438 7.661-4.373 12.742-2.329 5.078 2.052 32.157 16.556 37.673 19.551 5.51 2.989 9.193 4.529 10.51 6.9 1.317 2.38.901 13.531-4.271 26.359z"></path>
                    </svg>
                    <svg
                        className="cursor-pointer hover:scale-110 transform transition duration-200"
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M336 96c21.2 0 41.3 8.4 56.5 23.5S416 154.8 416 176v160c0 21.2-8.4 41.3-23.5 56.5S357.2 416 336 416H176c-21.2 0-41.3-8.4-56.5-23.5S96 357.2 96 336V176c0-21.2 8.4-41.3 23.5-56.5S154.8 96 176 96h160m0-32H176c-61.6 0-112 50.4-112 112v160c0 61.6 50.4 112 112 112h160c61.6 0 112-50.4 112-112V176c0-61.6-50.4-112-112-112z"></path>
                        <path d="M360 176c-13.3 0-24-10.7-24-24s10.7-24 24-24c13.2 0 24 10.7 24 24s-10.8 24-24 24zM256 192c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64m0-32c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96z"></path>
                    </svg>
                    <svg
                        className="cursor-pointer hover:scale-110 transform transition duration-200"
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M492 109.5c-17.4 7.7-36 12.9-55.6 15.3 20-12 35.4-31 42.6-53.6-18.7 11.1-39.4 19.2-61.5 23.5C399.8 75.8 374.6 64 346.8 64c-53.5 0-96.8 43.4-96.8 96.9 0 7.6.8 15 2.5 22.1-80.5-4-151.9-42.6-199.6-101.3-8.3 14.3-13.1 31-13.1 48.7 0 33.6 17.2 63.3 43.2 80.7-16-.4-31-4.8-44-12.1v1.2c0 47 33.4 86.1 77.7 95-8.1 2.2-16.7 3.4-25.5 3.4-6.2 0-12.3-.6-18.2-1.8 12.3 38.5 48.1 66.5 90.5 67.3-33.1 26-74.9 41.5-120.3 41.5-7.8 0-15.5-.5-23.1-1.4C62.8 432 113.7 448 168.3 448 346.6 448 444 300.3 444 172.2c0-4.2-.1-8.4-.3-12.5C462.6 146 479 129 492 109.5z"></path>
                    </svg>
                    <svg
                        className="cursor-pointer hover:scale-110 transform transition duration-200"
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M417.2 64H96.8C79.3 64 64 76.6 64 93.9V415c0 17.4 15.3 32.9 32.8 32.9h320.3c17.6 0 30.8-15.6 30.8-32.9V93.9C448 76.6 434.7 64 417.2 64zM183 384h-55V213h55v171zm-25.6-197h-.4c-17.6 0-29-13.1-29-29.5 0-16.7 11.7-29.5 29.7-29.5s29 12.7 29.4 29.5c0 16.4-11.4 29.5-29.7 29.5zM384 384h-55v-93.5c0-22.4-8-37.7-27.9-37.7-15.2 0-24.2 10.3-28.2 20.3-1.5 3.6-1.9 8.5-1.9 13.5V384h-55V213h55v23.8c8-11.4 20.5-27.8 49.6-27.8 36.1 0 63.4 23.8 63.4 75.1V384z"></path>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Footer2;
