import React from 'react';
import PropTypes from 'prop-types';
import EnterSiteControl from './EnterSiteControl';
import WineCellar from './WineCellar';
import './Header.css';

function HeaderTwo(){
  let headerStyles = {
    backgroundImage: "url('winepour.jpg')",
    height: "70vh",
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

    let scrollText = {
      color: "white",
      textAlign: "center",
      fontStyle: "italic",
      paddingTop: "45px"
    }

  return (
    <div style={headerStyles}>
      <h1>The Tasting Room</h1>
      <div style={scrollText}>
        <h3>scroll down to view our menu</h3>
      </div>
    </div>
  );
}

// Header2.propTypes = {
//   onTroubleshootingConfirmation: PropTypes.func
// };

export default HeaderTwo;
