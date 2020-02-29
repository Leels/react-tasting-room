import React from 'react';
import PropTypes from 'prop-types';
import NewWineControl from './NewWineControl';

function NewWineButton(props){

  const buttonStyles = {
    height: "100vh",
  }

return (
  <div style={buttonStyles}>
    <button class="suit_and_tie" onClick={props.onNewWineFormButton}>Add New Wine</button>
  </div>
);
}
NewWineButton.propTypes = {
onNewWineFormButton: PropTypes.func
};

export default NewWineButton;
