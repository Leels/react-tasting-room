import React from 'react';
import PropTypes from 'prop-types';
import EnterSiteControl from './EnterSiteControl';
import WineCellar from './WineCellar';
import './Header.css';

function Header(props){
  var headerStyles = {
    backgroundImage: "url('winepour.jpg')",
    height: "75vh",
    backgroundAttachment: "fixed",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    padding: "32px 0px",
    marginBottom: "32px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column"
  }
  return (
    <div style={headerStyles}>
      <h1>The Tasting Room</h1>
      <div class="variation-b">
        <button class="suit_and_tie" onClick={props.onTroubleshootingConfirmation}>must be 21+ to enter</button>
      </div>
    </div>
  );
}

Header.propTypes = {
  onTroubleshootingConfirmation: PropTypes.func
};

export default Header;
