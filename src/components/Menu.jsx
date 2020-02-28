import React from "react";
import PropTypes from 'prop-types';
import HeaderTwo from './HeaderTwo';
import WineList from './WineList';
import './Menu.css';
import { Link } from 'react-router-dom';

function Menu(props){
  const menuStyles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: "15%",
    paddingLeft: "15%",
  }

  return (
    <div>
    <div style={menuStyles}>
    <Link to="/Tastings">
    <h3 class="underline">TASTINGS</h3>
    </Link>
    <Link to="/Glasses">
    <h3 class="underline">GLASSES</h3>
    </Link>
    <Link to="/WineList">
    <h3 class="underline">CURRENT WINES</h3>
    </Link>
    <Link to="/Food">
    <h3 class="underline">FOOD</h3>
    </Link>
    </div>
    </div>
  );
}


export default Menu;
