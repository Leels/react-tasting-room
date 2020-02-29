import React from 'react';
import PropTypes from 'prop-types';

function NewWineButton(props){
return (
  <div>
    <button class="suit_and_tie" onClick={props.onNewWineFormButton}>Add New Wine</button>
  </div>
);
}
NewWineButton.propTypes = {
onNewWineFormButton: PropTypes.func
};

export default NewWineButton;
