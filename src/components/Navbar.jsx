import React from "react";
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar(){
  var navbarStyles = {
    height: "60px",
    color: "#f2f2f2",
    backgroundColor: "black",
    padding: "0 16px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Raleway"

  }
  var titleStyles = {
    fontFamily: "Charmonman",
    fontWeight: "bold",
  }
  var linkStyles = {
    padding: "0 8px"
  }
  return (
    <div style={navbarStyles}>
    <p style={titleStyles}>The Tasting Room</p>
    <div style={linkStyles}>
    <Link to="/Home">Home</Link>
    <Link to="/About">About</Link>
    <Link to="/Events">Events</Link>
    <Link to="/WineCellar">Wine Cellar</Link>
    <Link to="/TastingRoom">Tasting Room</Link>
    </div>
    </div>
  );
}

export default Navbar;
