import React from "react";
import Bottle from './Bottle';
import Menu from './Menu';
import Red from "./images/Red.png";
import Rose from "./images/Rose.png";
import White from "./images/White.png";
import Sparkling from "./images/Sparkling.png";
import PropTypes from 'prop-types';
import NewWineControl from './NewWineControl';
import NewWineButton from './NewWineButton';



function WineList(props){
  const layoutStyles = {
    display: "flex",
    flexWrap: "wrap",
    marginBottom: "140px",
    alignItems: "center",
    justifyContent: "center"
  }

  const title = {
    textAlign: "center",
    fontSize: "1rem",
    paddingBottom: ".5rem"
  }

  return(
    <div>
    <Menu />
    <div style={title}>
    <h2>Wine List</h2>
    </div>
    <div style={layoutStyles}>
      {props.wineList.map((wine, index) =>
        <Bottle
        name={wine.name}
        image={wine.image}
        origin={wine.origin}
        cost={wine.cost}
        keywords={wine.keywords}
        pairing={wine.pairing}
        key={wine.id}/>
      )}
    </div>
    <NewWineButton />
    </div>
  );
}

WineList.propTypes = {
wineList: PropTypes.array,
};

export default WineList;
