import React from "react";
import './Footer.css';

function Footer(){
  var footerText = {
    color: "#FFFCE8"
  }
  return (
    <div className='footer'>
      <p style={footerText}> &copy; 2020 </p>
    </div>
  );
}

export default Footer;
