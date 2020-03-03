import React from 'react';
import PropTypes from 'prop-types';

function WineDetail(props){
  return (
    <div>
      <h3>{props.selectedWine.name}</h3>
      <img src={props.selectedWine.image} />
      <h4>{props.selectedWine.origin}</h4>
      <h4>{props.selectedWine.cost}</h4>
      <h4>{props.selectedWine.keywords}</h4>
      <h4>{props.selectedWine.pairing}</h4>
    </div>
  );
}

WineDetail.propTypes = {
  selectedWine: PropTypes.object
};

export default WineDetail;
