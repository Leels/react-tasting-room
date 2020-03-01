import React from 'react';
import PropTypes from 'prop-types';
import NewWineControl from './NewWineControl';
import './NewWineButton.css'

function NewWineButton(props){

return (
  <div class="variation-a">
    <button class="suit_and_tie" onClick={props.onNewWineFormButton}>Add New Wine</button>
  </div>
);
}
NewWineButton.propTypes = {
onNewWineFormButton: PropTypes.func
};

export default NewWineButton;
