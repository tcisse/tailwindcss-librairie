import {useMemo, useState} from "react";
import { FcGoogle } from "react-icons/fc";
import { RiFacebookCircleFill } from "react-icons/ri";
import { HiBeaker, HiEye, HiEyeSlash } from "react-icons/hi2";

const Input = ({id = "", type = "text", label = "", placeholder = ""}) => {
    const [show, setShow] = useState(false);

    return (
        <>
            <label htmlFor={id} className="text-sm text-gray-700 font-semibold">{label}</label>

            <div className="relative">
                <input
                    id={id}
                    type={type === "password" ? (show ? "text" : "password") : type}
                    className={`transition-all duration-300 mt-2 py-2.5 px-4 w-full border-gray-300 rounded-md text-sm placeholder-gray-400 focus:ring focus:border-indigo-500 focus:ring-indigo-500/20 ${type === "password" ? " pr-10" : ""}`}
                    placeholder={placeholder}
                />

                {type === "password" && (
                    <>
                        {show ? (
                            <HiEye onClick={() => setShow(!show)} className="cursor-pointer right-3 top-[1.2rem] text-gray-300 h-5 w-5 absolute"/>
                        ) : (
                            <HiEyeSlash onClick={() => setShow(!show)} className="cursor-pointer right-3 top-[1.2rem] text-gray-300 h-5 w-5 absolute"/>
                        )}
                    </>
                )}
            </div>
        </>
    );
};

const Checkbox = ({id = "", label = ""}) => {
    return (
        <label htmlFor={id} className="space-x-2 inline-block mr-2">
            <input
                id={id}
                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50"
                type="checkbox"
            />
            <span className="text-sm cursor-pointer">{label}</span>
        </label>
    );
};

const Link = ({href = "", children}) => {
    return (
        <a
            href={href}
            className={`transition-all duration-300 text-sm text-indigo-600 hover:text-indigo-700`}
        >
            {children}
        </a>
    );
};

const PrimaryButton = ({type = "button", children, as = "button", href = "#"}) => {
    const Tag = as;

    const otherAttributes = useMemo(() => {
        const attributes = {};
        if (as === "button") {
            attributes.type = type;
        }

        if (as === "a") {
            attributes.href = href
        }

        return attributes
    }, [as]);

    return (
        <Tag
            {...otherAttributes}
            className="transition-all duration-300 px-2 w-full font-medium py-3 bg-indigo-600 text-white text-sm rounded-md focus:outline-none hover:bg-indigo-700 focus:ring focus:border-indigo-500 focus:ring-indigo-500/50"
        >
            {children}
        </Tag>
    );
};

const SecondaryButton = ({type = "button", children, as = "button", href = "#"}) => {
    const Tag = as;

    const otherAttributes = useMemo(() => {
        const attributes = {};
        if (as === "button") {
            attributes.type = type;
        }

        if (as === "a") {
            attributes.href = href
        }

        return attributes
    }, [as]);

    return (
        <Tag
            {...otherAttributes}
            className="transition-all duration-300 px-2 border py-3 rounded-md border-gray-300 w-full flex justify-center items-center space-x-2 hover:bg-gray-300"
        >
            {children}
        </Tag>
    );
};

const SignInOne = () => {
    return (
        <div className="flex text-gray-800 p-4 md:py-6 md:px-32 lg:p-0">
            <div className="flex flex-col-reverse lg:flex-row w-screen lg:min-h-screen border shadow-sm rounded-lg overflow-hidden lg:border-none lg:shadow-none lg:rounded-none lg:overflow-auto">
                <div className="flex flex-col justify-between text-white lg:min-h-screen w-full lg:w-7/12 xl:w-3/5 bg-[#111827]">
                    <img
                        className="w-8/12 h-auto"
                        src="/images/auth-5.png"
                        alt=""
                    />

                    <div className="space-y-8 p-9">
                        <a href="#login" className="flex items-center space-x-3">
                            <HiBeaker className="w-9 h-9 md:w-12 md:h-12 text-indigo-600"/>
                            <div>
                                <p className="inline text-xl md:text-2xl uppercase font-bold leading-[0.5rem]">Ato<span className="font-[300]">mique</span></p>
                                <div className="flex items-center space-x-0.5 leading-[0.5rem]">
                                    <span className="text-[0.62rem] font-bold text-indigo-600 uppercase leading-[0.5rem]">React</span>
                                    <hr className="w-5 border-sky-600"/>
                                </div>
                            </div>
                        </a>

                        <div className="space-y-4">
                            <h1 className="text-2xl lg:text-4xl font-semibold">Welcome back to <br/> our community</h1>

                            <p className="font-medium">Discover how to manage Two-Factor Authentication in <br className="hidden lg:inline-block xl:hidden"/> Joomla. The two-factor <br className="hidden xl:inline-block"/> authentication in Joomla is a very <br className="hidden lg:inline-block xl:hidden"/> popular security practice.</p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center -space-x-3">
                                {[1, 2, 3, 4].map((item) => (
                                    <img
                                        key={item}
                                        className="h-7 w-8 md:h-10 md:w-10 bg-gray-800 border border-white rounded-full object-cover object-center"
                                        src={`/images/auth-${item}.jpeg`}
                                        alt=""
                                    />
                                ))}
                            </div>

                            <p className="font-medium text-sm">More than 2k people joined us, it's your turn</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-center lg:min-h-screen p-6 md:p-10 lg:p-8 xl:p-10 w-full lg:w-5/12 xl:w-2/5">
                    <h3 className="text-center text-xl font-semibold text-gray-700">Login to Account</h3>
                    <p className="text-center text-sm mt-2 mb-10">Please sign-in to your account and start the adventure.</p>

                    <form className="space-y-5">
                        <div>
                            <Input
                                label={"Email"}
                                id="email"
                                type="email"
                                placeholder="Enter email"
                            />
                        </div>

                        <div>
                            <Input
                                label={"Password"}
                                id="password"
                                type="password"
                                placeholder="Enter password"
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <Checkbox
                                id="remember"
                                label="Remember Me"
                            />

                            <Link href="#forgot-password">
                                Forgot Password?
                            </Link>
                        </div>

                        <PrimaryButton>
                            Login to account
                        </PrimaryButton>

                        <div className="flex items-center justify-center space-x-3">
                            <hr className="w-12"/>
                            <span className="font-bold uppercase text-xs text-gray-400">Or</span>
                            <hr className="w-12"/>
                        </div>

                        <div className="flex items-center space-x-4 lg:space-x-2 xl:space-x-4 text-sm font-semibold">
                            <SecondaryButton as="a" href="#auth-google">
                                <FcGoogle className="h-5 w-5 lg:w-4 lg:h-4 xl:h-5 xl:w-5"/>

                                <span className="text-[0.7rem] md:text-sm lg:text-[0.7rem] xl:text-sm">Continue with Google</span>
                            </SecondaryButton>

                            <SecondaryButton as="a" href="#auth-facebook">
                                <RiFacebookCircleFill className="h-5 w-5 lg:w-4 lg:h-4 xl:h-5 xl:w-5 text-blue-600"/>

                                <span className="text-[0.7rem] md:text-sm lg:text-[0.7rem] xl:text-sm">Continue with Facebook</span>
                            </SecondaryButton>
                        </div>

                        <p className="text-sm text-center">
                            Don't have an account? <Link href="#register">Register</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignInOne;