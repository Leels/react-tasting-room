import React from "react";
import PropTypes from 'prop-types';
import Menu from './Menu';
import HeaderTwo from './HeaderTwo';


function Tastings(){
  const tastingsStyles = {
    alignItems: "center",
    minHeight: "100vh"
  }

  return (
    <div>
    <HeaderTwo />
    <Menu />
    <div style={tastingsStyles}>
    <h2>Tastings are 1 oz. each</h2>
    <h3>8 Wines</h3>
    <h4>23</h4>
    <h3>6 Wines</h3>
    <h4>19</h4>
    <h3>4 Wines</h3>
    <h4>13</h4>
    <h3>2 Wines</h3>
    <h4>6.5</h4>
    <h3>1 Wine</h3>
    <h4>3.5</h4>
    </div>
    </div>
  );
}


export default Tastings;
