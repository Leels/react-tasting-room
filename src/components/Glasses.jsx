import React from "react";
import Menu from './Menu';
import HeaderTwo from './HeaderTwo';


function Glasses(){
  const glassesStyles = {
    alignItems: "center",
    minHeight: "100vh"
  }

  const title = {
    textAlign: "center",
    fontSize: "1rem",
    paddingBottom: ".5rem"
  }

  return (
    <div>
    <Menu />
    <div style={glassesStyles}>
    <div style={title}>
    <h2>6 oz. pours. Please see list of current wines.</h2>
    </div>
    <h3>WHITES</h3>
    <h4>8-13</h4>
    <h3>REDS</h3>
    <h4>9-18</h4>
    </div>
    </div>
  );
}

export default Glasses;
