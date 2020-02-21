import React from "react";
import './Header.css';

function Header(){
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
        <button class="suit_and_tie">must be 21+ to enter</button>
      </div>
    </div>
  );
}

export default Header;
