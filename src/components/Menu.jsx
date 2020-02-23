import React from "react";
import './Menu.css';
import { Link } from 'react-router-dom';

function Menu(){
  var menuStyles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: "15%",
    paddingLeft: "15%",
  }

  return (
    <div style={menuStyles}>
    <h3>TASTINGS</h3>
    <h3>GLASSES</h3>
    <h3>CURRENT WINES</h3>
    <h3>FOOD</h3>
    </div>
  );
}



export default Menu;
