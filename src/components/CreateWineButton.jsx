
import React from 'react';
import PropTypes from 'prop-types';

export default function CreateWineButton(props){
return (
  <div>
    <button class="suit_and_tie" onClick={props.onTroubleshootingConfirmation}>Show new wine form</button>
  </div>
);
}
CreateWineButton.propTypes = {
onCreateNewWine: PropTypes.func
};
