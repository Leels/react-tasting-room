import React from 'react';
import PropTypes from 'prop-types';
import NewWineControl from './NewWineControl';
import './Admin.css';
import { Link } from 'react-router-dom';

function Admin(props){

  const pageStyles = {
    textAlign: "center",
    paddingBottom: "20vh"
  }

return (
  <div style={pageStyles}>
  <h2> What would you like to do? </h2>
  <div class="variation-a">
    <button class="suit_and_tie" onClick={props.onNewWineFormButton}>Add New Wine</button>
    <Link to="/Delete" class="suit_and_tie">Delete Wine</Link>
  </div>
  </div>
);
}
Admin.propTypes = {
onNewWineFormButton: PropTypes.func
};

export default Admin;
