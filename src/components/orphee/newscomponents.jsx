import React from "react";

export const Input = ({ type, placeholder, className }) => {
    return (
        <>
            <input type={type} className={className} placeholder={placeholder} required />
        </>
    );
};

export const Link = ({ className, children, href }) => {
    return (
        <a href={href} className={className}>
            {children}
        </a>
    );
};

export const Label = ({ id, className, children }) => {
    return (
        <label htmlFor={id} className={className}>
            {children}
        </label>
    );
};

export const Button = ({ type, className, children }) => {
    return (
        <button type={type} className={className}>
            {children}
        </button>
    );
};
