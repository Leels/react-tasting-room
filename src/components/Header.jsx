import React from "react";
import './Header.css';

function Header(){
  var headerStyles = {
    backgroundImage: "url('winepour.jpg')",
    height: "300px",
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
      <h1>Tasting Room</h1>
    </div>
  );
}

export default Header;
