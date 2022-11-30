import React from "react";
import { Link } from "react-router-dom";

export default function index() {
  return (
    <div>
      <h1>Newletter component</h1>
      <div>
        <Link to="/newsletter1"></Link>
        <Link to="/newsletter2"></Link>
        <Link to="/newsletter3"></Link>
        <Link to="/newsletter4"></Link>
      </div>
    </div>
  );
}
