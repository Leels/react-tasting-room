import React from "react";
import Menu from './Menu';


function Food(){
  const foodStyles = {
    alignItems: "center",
    paddingBottom: "20vh"
  }

  const title = {
    textAlign: "center",
    fontSize: "1rem",
    paddingBottom: ".5rem"
  }

  return (
    <div>
    <Menu />
    <div style={foodStyles}>
    <div style={title}>
    <h2>À la carte</h2>
    </div>
    <h3>Castelveltrano Olives</h3>
    <h4>6.5</h4>
    <h3>Baguette & Salted Butter</h3>
    <h4>7</h4>
    <h3>Mixed Artisan Cheese & Baguette</h3>
    <h4>13/23</h4>
    <h3>Charcuterie Plate (cheese, salami, almonds, olives)</h3>
    <h4>18</h4>
    <h3>Duck Liver Pate & Baguette</h3>
    <h4>16.5</h4>
    <h3>Artisan Truffle</h3>
    <h4>4</h4>
    </div>
    </div>
  );
}

export default Food;
