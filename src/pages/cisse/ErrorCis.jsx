import React from "react";

import error from "../../assets/img/error.png";

export default function ErrorCis() {
    return (
        <div className="bg-black h-screen block">
            <div className="">
                <div className="flex justify-center">
                    <img src={error} width={300} className="mt-14" />
                </div>
                <h1 className="text-white text-center text-3xl font-bold mt-10">404</h1>
                <p className="text-center text-white font-bold text-3xl mt-8">
                    This page could not be found.
                </p>
            </div>
            <div className="flex justify-center mt-5">
                <p className="text-justify lg:w-1/3 md:w-2/3 w-3/4 text-white text-xl">
                    The earthquake was not good to the bike lane on your way to work. A large gap in
                    the pavement (too big to be called a pothole) had swallowed three oblivious
                    bikers whole. So the city had put up two pylons and yellow caution tape. Pretty
                    frustrating for you given your propensity to do 360 jumps over the gap.
                </p>
            </div>
        </div>
    );
}
