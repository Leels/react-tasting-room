import React from 'react';
import PropTypes from 'prop-types';
import WineList from './WineList';
import NewWineButton from './NewWineButton';
import WineDetail from './WineDetail';
import { Link } from 'react-router-dom';

function Admin(props){
  const adminStyles = {
    textAlign: "center",
    backgroundColor: "yellow"
  }
  let optionalSelectedWineContent = null;
    if (props.selectedWine != null){
      optionalSelectedWineContent =  <WineDetail selectedWine={props.selectedWine}/>;
    }
  return (
    <div>
      <h2 style={adminStyles}>Admin Account</h2>
      <Link to="/NewWine">
      <div class="variation-a">
        <button class="suit_and_tie">
    Access Admin Options</button>
    </div>
      </Link>
      {optionalSelectedWineContent}
       <WineList wineList={props.wineList} currentRouterPath={props.currentRouterPath}
       onWineSelection={props.onWineSelection}/>
    </div>
  );
}

Admin.propTypes = {
  wineList: PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired,
  onWineSelection: PropTypes.func.isRequired,
  selectedWine: PropTypes.object
};

export default Admin;
