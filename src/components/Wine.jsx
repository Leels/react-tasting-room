import React from "react";
import PropTypes from 'prop-types';
import './Wine.css';

function Wine(props){
  const wineStyles = {
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
    <h4>{props.cost}</h4>
    <h4>{props.keywords}</h4>
    <h4>{props.pairing}</h4>
    </div>;

    if (props.currentRouterPath === '/admin'){
    return (
      <div style={wineStyles} className="wine" onClick={() => {props.onWineSelection({name: props.name, image: props.image, origin: props.origin, cost: props.cost, keywords: props.keywords, pairing: props.pairing});}}>
        {wineInformation}
      </div>
    );
  } else {
    return (
      <div style={wineStyles} className="wine">
        {wineInformation}
      </div>
    );
  }
}

Wine.propTypes = {
  name: PropTypes.string,
  image: PropTypes.object,
  origin: PropTypes.string,
  cost: PropTypes.string,
  keywords: PropTypes.string,
  pairing: PropTypes.string,
  currentRouterPath: PropTypes.string,
  onWineSelection: PropTypes.func
};

export default Wine;
