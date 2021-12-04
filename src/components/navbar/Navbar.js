import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css"

const Navbar = (props) =>{
  const navigate = useNavigate();
  const logoutFunc = () => {
    props.setId(false)
    navigate('/')
  }
  return (
    <div className="navbar">
      <Link className = "navbaritem" to="/mkroom">mkroom</Link>
      <Link className = "navbaritem" to="/roomlist">roomlist</Link>
      <Link className = "navbaritem" to="/myroomlist">myroomlist</Link>
      <button className = "logoutitem" to="/" onClick={logoutFunc}>Logout</button>
    </div>
  )  
} 

export default Navbar;
