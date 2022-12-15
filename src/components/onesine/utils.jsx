import { useMemo, useState } from "react";
import { HiEye, HiEyeSlash } from "react-icons/hi2";

export const Input = ({ id = "", type = "text", label = "", placeholder = "" }) => {
    const [show, setShow] = useState(false);

    return (
        <>
            <label htmlFor={id} className="text-sm text-gray-700 font-semibold">
                {label}
            </label>

            <div className="relative">
                <input
                    id={id}
                    type={type === "password" ? (show ? "text" : "password") : type}
                    className={`transition-all duration-300 mt-2 py-2.5 px-4 w-full border-gray-300 rounded-md text-sm placeholder-gray-400 focus:ring focus:border-indigo-500 focus:ring-indigo-500/20 ${
                        type === "password" ? " pr-10" : ""
                    }`}
                    placeholder={placeholder}
                />

                {type === "password" && (
                    <>
                        {show ? (
                            <HiEye
                                onClick={() => setShow(!show)}
                                className="cursor-pointer right-3 top-[1.2rem] text-gray-300 h-5 w-5 absolute"
                            />
                        ) : (
                            <HiEyeSlash
                                onClick={() => setShow(!show)}
                                className="cursor-pointer right-3 top-[1.2rem] text-gray-300 h-5 w-5 absolute"
                            />
                        )}
                    </>
                )}
            </div>
        </>
    );
};

export const Checkbox = ({ id = "", label = "" }) => {
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

export const Link = ({ href = "", children }) => {
    return (
        <a
            href={href}
            className={"transition-all duration-300 text-sm text-indigo-600 hover:text-indigo-700"}
        >
            {children}
        </a>
    );
};

export const PrimaryButton = ({ type = "button", children, as = "button", href = "#" }) => {
    const Tag = as;

    const otherAttributes = useMemo(() => {
        const attributes = {};
        if (as === "button") {
            attributes.type = type;
        }

        if (as === "a") {
            attributes.href = href;
        }

        return attributes;
    }, [as, href, type]);

    return (
        <Tag
            {...otherAttributes}
            className="transition-all duration-300 px-2 w-full font-medium py-3 bg-indigo-600 text-white text-sm rounded-md focus:outline-none hover:bg-indigo-700 focus:ring focus:border-indigo-500 focus:ring-indigo-500/50"
        >
            {children}
        </Tag>
    );
};

export const SecondaryButton = ({ type = "button", children, as = "button", href = "#" }) => {
    const Tag = as;

    const otherAttributes = useMemo(() => {
        const attributes = {};
        if (as === "button") {
            attributes.type = type;
        }

        if (as === "a") {
            attributes.href = href;
        }

        return attributes;
    }, [as, href, type]);

    return (
        <Tag
            {...otherAttributes}
            className="transition-all duration-300 px-2 border py-3 rounded-md border-gray-300 w-full flex justify-center items-center space-x-2 hover:bg-gray-300"
        >
            {children}
        </Tag>
    );
};
