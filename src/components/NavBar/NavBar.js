import React from "react";
import "../../styles/style.css";
import "./NavBar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="text-wrapper-5">About Us</div>
      <div className="text-wrapper-6">Contact Us</div>
      <div className="text-wrapper-7">Log In</div>
      <div className="text-wrapper-8">Sign Up</div>
    </nav>
  );
};

export default Navbar;
