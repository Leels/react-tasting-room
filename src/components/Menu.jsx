import React from "react";
import PropTypes from 'prop-types';
import MenuControl from './MenuControl';
import TastingsControl from './TastingsControl';
import HeaderTwo from './HeaderTwo';
import WineCellar from './WineCellar';
import './Menu.css';
import { Link } from 'react-router-dom';

function Menu(props){
  var menuStyles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: "15%",
    paddingLeft: "15%",
  }

  return (
    <div>
    <div style={menuStyles}>
    <h3 onClick={props.onTastingsTroubleshootingConfirmation}>TASTINGS</h3>
    <h3>GLASSES</h3>
    <h3 onClick={props.onWinesTroubleshootingConfirmation}>CURRENT WINES</h3>
    <h3>FOOD</h3>
    </div>
    </div>
  );
}

Menu.propTypes = {
  onWinesTroubleshootingConfirmation: PropTypes.func,
};

Menu.propTypes = {
  onTastingsTroubleshootingConfirmation: PropTypes.func,
};

export default Menu;
