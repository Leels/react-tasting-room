import React from 'react';
import PropTypes from 'prop-types';
import NewWineForm from './NewWineForm';
import WineList from './WineList';

function Admin(props){
  return (
    <div>
      <h2>Admin</h2>
      <WineList wineList={props.wineList} />
    </div>
  );
}

Admin.propTypes = {
  wineList: PropTypes.array
};

export default Admin;
