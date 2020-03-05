import React from 'react';
import "./About.css"

function About() {

  const aboutStyles = {
    backgroundImage: "url('emptyglass.jpg')",
    height: "100vh",
    backgroundAttachment: "fixed",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    marginBottom: "18vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",

  }

    const scrollText = {
      margin: "15%",
      textAlign: "center",
      fontStyle: "italic",
    }

return (
  <div style={aboutStyles}>
  <div class="textBackground" style={scrollText}>
  <h1>Our Story</h1>
  <h3>We are a local family owned tasting room and wine shop located in the heart of downtown Portland. We focus on fine imported, small batch wines mostly from Europe and also locally here in Oregon.</h3>
  <h3> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </h3>
  <h3>Please stop in for a pour at 123 SE Street St Portland, OR 97215 or give us a call to hear about our rotating wine selection at 503-123-4567.</h3>
  </div>
  </div>
);
}

export default About;
