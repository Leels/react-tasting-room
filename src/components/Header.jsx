import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

function Header(){
  const headerStyles = {
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

    const scrollText = {
      color: "white",
      textAlign: "center",
      fontStyle: "italic",
      paddingTop: "10px"
    }

  return (
    <div style={headerStyles}>
      <h1>The Tasting Room</h1>
      <div style={scrollText}>
        <h2>"Wine is the only artwork you can drink" - Luis Fernando Olaverris.</h2>
        <h3>Scroll down to view our current collection of wines.</h3>
      </div>
    </div>
  );
}

export default Header;
