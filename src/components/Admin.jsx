import React from 'react';
import PropTypes from 'prop-types';
import WineList from './WineList';
import NewWineButton from './NewWineButton';
import WineDetail from './WineDetail';

function Admin(props){
  const adminStyles = {
    textAlign: "center",
    backgroundColor: "yellow"
  }

  return (
    <div>
      <h2 style={adminStyles}>Admin Account</h2>
      <WineDetail />
      <NewWineButton />
       <WineList wineList={props.wineList} currentRouterPath={props.currentRouterPath}/>
    </div>
  );
}

Admin.propTypes = {
  wineList: PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired
};

export default Admin;
