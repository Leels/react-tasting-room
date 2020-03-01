import React from "react";
import PropTypes from 'prop-types';
import './Bottle.css';

function Bottle(props){
  const bottleStyles = {
    padding: "0px 20px 20px 20px",
    margin: "16px",
    width: "200px",
    height: "200px",
    overflow: "auto",
    backgroundColor: "white",
    color: "black",
    alignItems: "center"
  }

  const wineInformation =
  <div>
    <h3>{props.name}</h3>
    <img src={props.image} />
    <h4>{props.origin}</h4>
    <h4>{props.grape}</h4>
    <h4>{props.cost}</h4>
    <h4>{props.keywords}</h4>
    <h4>{props.pairing}</h4>
    </div>;

    if (props.currentRouterPath === '/admin'){
    return (
      <div style={bottleStyles} className="bottle" onClick={() => {alert('hey, you just clicked the ticket belonging to ' + props.names);}}>
        {wineInformation}
      </div>
    );
  } else {
    return (
      <div style={bottleStyles} className="bottle">
        {wineInformation}
      </div>
    );
  }
}

Bottle.propTypes = {
  name: PropTypes.string,
  image: PropTypes.object,
  origin: PropTypes.string,
  cost: PropTypes.string,
  keywords: PropTypes.string,
  pairing: PropTypes.string,
  currentRouterPath: PropTypes.string
};

export default Bottle;
