import React from "react";
import { Link } from "react-router-dom";

export default function Index() {
    return (
        <div className="text-2xl pt-10 mx-5 font-raleway font-bold">
            <h1>Newletter component</h1>
            <div className="flex justify-center mt-10 space-x-10">
                <Link to="/newsletter1">Newsletter 1</Link>
                <Link to="/newsletter2">Newsletter 2</Link>
                <Link to="/newsletter3">Newsletter 3</Link>
                <Link to="/newsletter4">Newsletter 4</Link>
            </div>
        </div>
    );
}
