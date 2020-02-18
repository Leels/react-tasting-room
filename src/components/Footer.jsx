import React from "react";
import './Footer.css';

function Footer(){
  var addressText = {
    color: "#666666",
    fontFamily: "'Open Sans', sans-serif"
  }
  var copyrightText = {
    color: "#4d4d4d"
  }
  return (
    <div className='footer'>
    <h4 style={addressText}>THE TASTING ROOM, 123 SE STREET ST PORTLAND, OR 97215</h4>
      <h4 style={addressText}>INFO@THETASTING ROOM.COM</h4>
      <p style={copyrightText}> Copyright 2020 | The Tasting Room </p>
    </div>
  );
}

export default Footer;
