import React from "react";
import { Link } from "react-router-dom";

export default function Index() {
    return (
        <div className="text-2xl pt-10 mx-5 font-raleway font-bold">
            <h1>Newletter component</h1>
            <div className="flex justify-center mt-10 space-x-10">
                <Link to="/newsletter-orp">Newsletter 1</Link>
                <Link to="/newsletter-cis">Newsletter 2</Link>
                <Link to="/newsletter-yag">Newsletter 3</Link>
                <Link to="/newsletter-lib">Newsletter 4</Link>
                <Link to="/newsletter-one">Newsletter 5</Link>
                <Link to="/newsletter6">Newsletter 6</Link>
            </div>
        </div>
    );
}
