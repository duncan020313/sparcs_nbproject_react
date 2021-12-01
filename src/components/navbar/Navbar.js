import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () =>
  <div className="navbar">
        <Link className = "navbaritem" to="/">Login</Link>
        <Link className = "navbaritem" to="/createaccount">CreateAccount</Link>
        <Link className = "navbaritem" to="/home">Home</Link>
        <Link className = "navbaritem" to="/mkroom">mkroom</Link>
        <Link className = "navbaritem" to="/roomlist">roomlist</Link>
        <Link className = "navbaritem" to="/myroomlist">myroomlist</Link>
        <Link className = "navbaritem" to="/joinroom">joinroom</Link>
  </div>

export default Navbar;
