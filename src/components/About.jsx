import React from 'react';
import HeaderTwo from './HeaderTwo';
import "./About.css"

function About() {

  const headerStyles = {
    backgroundImage: "url('emptyglass.jpg')",
    height: "75vh",
    backgroundAttachment: "fixed",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    marginBottom: "32px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column"
  }

    const scrollText = {
      margin: "15%",
      color: "white",
      textAlign: "center",
      fontStyle: "italic",
    }

return (
  <div style={headerStyles}>
  <div style={scrollText}>
  <h3>We are a local family owned tasting room and wine shop located in the heart of downtown Portland. We focus on fine imported, small batch wines mostly from Europe and also locally here in Oregon.</h3>
  <h3>Please stop in for a pour at 123 SE Street St Portland, OR 97215 or give us a call to hear about our rotating wine selection at 503-123-4567.</h3>
  </div>
  </div>
);
}

export default About;
