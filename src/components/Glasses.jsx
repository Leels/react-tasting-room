import React from "react";
import Menu from './Menu';
import HeaderTwo from './HeaderTwo';


function Glasses(){
  const glassesStyles = {
    alignItems: "center",
    minHeight: "60vh"
  }

  return (
    <div>
    <HeaderTwo />
    <Menu />
    <div style={glassesStyles}>
    <h3>6 oz. pours. Please see list of current wines.</h3>
    <h3>WHITES</h3>
    <h4>8-13</h4>
    <h3>REDS</h3>
    <h4>9-18</h4>
    </div>
    </div>
  );
}

export default Glasses;
