import React from "react";
import PropTypes from 'prop-types';
import './Bottle.css';

function Produce(props){
  var bottleStyles = {
    padding: "0 16px 16px 16px",
    margin: "16px",
    width: "200px",
    height: "200px",
    overflow: "auto",
    backgroundColor: "#3E363F",
    color: "#FFFCE8"
  }
  return (
    <div>
      <h4>{props.name}</h4>
      <h3>{props.origin}</h3>
      <h3>{props.grape}</h3>
      <h3>{props.cost}</h3>
      <div style={bottleStyles} className="bottle">
        {props.about.map(item => <p>{item}</p>)}
      </div>
    </div>
  );
}

Produce.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  grape: PropTypes.string,
  cost: PropTypes.string,
  about: PropTypes.array

}

export default Bottle;
