import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="links">
        <Link
          to="/"
          style={{
            background: "orange",
            border: 5,
            padding: 8,
            margin: 10,
          }}
          // onClick={() => handleHomeClick("Yasir")}
        >
          Home
        </Link>

        <Link
          to="/login"
          style={{
            background: "beige",
            border: 5,
            padding: 8,
            fontFamily: "sans-serif",
            margin: 10,
          }}
        >
          Login
        </Link>
        <Link to="/create">Create New</Link>
        <div className="create-new"></div>
      </div>
    </nav>
  );
};

export default Navbar;
