import React, { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

export default function AccordionCis() {
    const [expand, setExpand] = useState(false);
    const expandClass = expand ? "display" : "hidden";
    const ansClass = `${expandClass} p-4`;
    return (
        <div className="shadow rounded border border-gray-100 border-t-0">
            <div className="p-4 text-xl relative font-medium">
                <div className="w-5/6">Are you cat</div>
                <button
                    aria-label="question-expander"
                    className="absolute text-xl top-0 right-0 focus:outline-none"
                    onClick={() => setExpand(!expand)}
                >
                    {expand ? <AiOutlineUp size={20} /> : <AiOutlineDown size={20} />}
                </button>
            </div>
            <div className={ansClass}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam provident soluta
                natus illo aspernatur voluptatem totam voluptatum fuga illum accusamus nesciunt
                architecto repudiandae distinctio quod sed, earum doloribus obcaecati delectus!
            </div>
        </div>
    );
}
