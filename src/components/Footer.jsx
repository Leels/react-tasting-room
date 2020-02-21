import React from "react";
import './Footer.css';

function Footer(){
  var addressText = {
    color: "#666666",
    fontFamily: "Raleway",
    textAlign: "center",
    paddingTop: "1rem"
  }
  var copyrightText = {
    color: "#4d4d4d",
    fontFamily: "Raleway",
    textAlign: "center",
    padding: "1rem"
  }
  return (
    <div className='footer'>
    <p style={addressText}>THE TASTING ROOM, 123 SE STREET ST PORTLAND, OR 97215</p>
      <p style={addressText}>INFO@THETASTING ROOM.COM</p>
      <p style={copyrightText}> Copyright 2020 | The Tasting Room </p>
    </div>
  );
}

export default Footer;
