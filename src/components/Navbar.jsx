import React from "react";
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar(){
  const navbarStyles = {
    height: "7vh",
    color: "#f2f2f2",
    backgroundColor: "black",
    padding: "0 16px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Raleway",

  }
  const titleStyles = {
    fontFamily: "Charmonman",
    fontWeight: "bold",
    fontSize: "120%"
  }
  var linkStyles = {
    padding: "0 8px"
  }
  return (
    <div style={navbarStyles}>
    <div class="underline">
    <Link to="/" style={titleStyles}>The Tasting Room</Link>
    </div>
    <div style={linkStyles}>
    <div class="underline">
    <Link to="/About">About</Link>
    </div>
    </div>
    </div>
  );
}

export default Navbar;
