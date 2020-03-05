import React from 'react';
import PropTypes from 'prop-types';
import WineList from './WineList';
import Admin from './Admin';
import WineDetail from './WineDetail';
import { Link } from 'react-router-dom';

function Delete(props){
  const deleteStyles = {
    textAlign: "center",
    color: "#990000",
    fontStyle: "italic"
  }
  let optionalSelectedWineContent = null;
    if (props.selectedWine != null){
      optionalSelectedWineContent =  <WineDetail selectedWine={props.selectedWine} onDeletingWineFromList={props.onDeletingWineFromList}/>;
    }
  return (
    <div>
      <h2 style={deleteStyles}>Select Wine to Delete</h2>
      {optionalSelectedWineContent}
       <WineList wineList={props.wineList} currentRouterPath={props.currentRouterPath}
       onWineSelection={props.onWineSelection} />
    </div>
  );
}

Delete.propTypes = {
  wineList: PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired,
  onWineSelection: PropTypes.func.isRequired,
  selectedWine: PropTypes.object
};

export default Delete;
