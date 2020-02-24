import React from "react";
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar(){
  const navbarStyles = {
    // position: "fixed",
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
  }
  var linkStyles = {
    padding: "0 8px"
  }
  return (
    <div style={navbarStyles}>
    <Link to="/">
    <h2 style={titleStyles}>The Tasting Room</h2>
    </Link>
    <div style={linkStyles}>
    <Link to="/About">About</Link>
    </div>
    </div>
  );
}

export default Navbar;
