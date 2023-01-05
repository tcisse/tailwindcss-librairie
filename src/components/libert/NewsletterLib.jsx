import React, { useRef } from "react";

function NewsletterLib() {
    const email = useRef(null);
    const name = useRef(null);

    const handleSubmit = () => {
        console.log(email.current.value);
        if (email.current.value && name.current.value) {
            alert("You've submitted well");
        } else {
            alert("Verify fields");
        }
    };
    return (
        <div className="w-full flex justify-center font-raleway min-h-screen px-4 py-4 md:py-0">
            {/* Newsletter and  form */}
            <div className="shadow-xl w-full py-10 px-4 flex flex-col space-y-10  items-center bg-cyan-700 my-auto h-fit md:w-[90%] lg:w-2/3 md:flex-row md:space-y-0 md:space-x-10 md:px-8">
                <div className="text-[18px] font-semibold text-white  h-full flex flex-col space-y-4 md:w-[60%]">
                    <p className="text-[30px] font-black">
                        BMW is getting better every day — don’t miss out on all the action.
                    </p>
                    <p className="font-normal">
                        Join the BMW newsletter and stay updated on new releases.
                    </p>
                </div>
                <div className="w-full md:w-[40%] h-full">
                    <form
                        onSubmit={e => {
                            e.preventDefault();
                            handleSubmit();
                        }}
                        action=""
                        className="flex w-full flex-col space-y-4 items-center"
                    >
                        <input
                            ref={name}
                            type="text"
                            name="name"
                            id="name"
                            className="border-2 h-[40px] px-4 w-full"
                            placeholder="Your name"
                        />
                        <input
                            ref={email}
                            type="email"
                            name="email"
                            id="email"
                            className="border-2 h-[40px] px-4 w-full"
                            placeholder="Your email"
                        />
                        <button className="h-[40px] bg-black text-gray-100 px-4 w-full">
                            Subscribe to newsletter
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default NewsletterLib;
