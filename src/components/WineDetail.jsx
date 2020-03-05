import React from 'react';
import PropTypes from 'prop-types';


function WineDetail(props){
  let image = {
    display: "block",
    width: "25%",
    marginLeft: "auto",
    marginRight: "auto"
  }

  let button = {
    marginTop: "-28px"
  }

  return (
    <div>
      <h3>{props.selectedWine.name}</h3>
      <div style={image}>
      <img src={props.selectedWine.image} />
      </div>
      <div style={button} class="variation-a">
        <button onClick={() => props.onDeletingWineFromList(props.selectedWine)} class="suit_and_tie">Delete</button>
        </div>
    </div>
  );
}

WineDetail.propTypes = {
  selectedWine: PropTypes.object,
  onDeletingWineFromList: PropTypes.func
};

export default WineDetail;
