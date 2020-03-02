import React from 'react';
import PropTypes from 'prop-types';
import NewWineControl from './NewWineControl';
import './NewWineButton.css'

function NewWineButton(props){

  const pageStyles = {
    textAlign: "center",
    minHeight: "100vh"
  }

return (
  <div style={pageStyles}>
  <h2> What would you like to do? </h2>
  <div class="variation-a">
    <button class="suit_and_tie" onClick={props.onNewWineFormButton}>Add New Wine</button>
  </div>
  </div>
);
}
NewWineButton.propTypes = {
onNewWineFormButton: PropTypes.func
};

export default NewWineButton;
