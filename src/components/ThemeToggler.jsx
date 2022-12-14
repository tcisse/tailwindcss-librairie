import React, { useContext } from "react";
import { ThemeContext } from "../utils/context/ThemeProvider";

function ThemeToggler() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <>
            <button
                onClick={() => toggleTheme()}
                className="fixed bottom-0 z-30 flex items-center px-4 py-1 h-[50px] shadow-lg right-8 bg-gradient-to-tl from-blue-600 to-violet-600 hover:scale-95"
            >
                <div className="flex items-center space-x-3">
                    {theme === "dark" ? (
                        <span className="text-[18px] text-gray-100 flex space-x-2 items-center">
                            <i className="bi bi-moon-stars-fill"></i>
                            <span className="text-[14px]">Dark</span>
                        </span>
                    ) : (
                        <span className="text-[18px] text-gray-100 flex space-x-2 items-center">
                            <i className="bi bi-brightness-high-fill"></i>
                            <span className="text-[14px]">Light</span>
                        </span>
                    )}
                </div>
            </button>
        </>
    );
}

export default ThemeToggler;
