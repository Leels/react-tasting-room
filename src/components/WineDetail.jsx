import React from 'react';
import PropTypes from 'prop-types';

function WineDetail(props){
  return (
    <div>
      <h1>{props.selectedWine.name}</h1>
    </div>
  );
}

WineDetail.propTypes = {
  selectedWine: PropTypes.object
};

export default WineDetail;
