import React from "react";
import Bottle from './Bottle';
import Red from "./images/Red.png";
import Rose from "./images/Rose.png";
import White from "./images/White.png";
import Sparkling from "./images/Sparkling.png";

const availableWines = [
   {
      name: "Domaine Eric et Joel Durand Cornas Empreintes- 2016",
      image: Red,
      origin: "Rhone, France",
      grape: "Syrah",
      cost: "$42",
      about: "Red, Bold, Structured, Pair with lamb."
   },
   {
     name: "Nino Franco Prosecco di Conegliano-Valdobbiadene Superiore Brut DOCG",
     image: Sparkling,
     origin: "Veneto, Italy",
     grape: "Glera (Prosecco)",
     cost: "$17",
     about: "Sparkling, Fresh, Youthful, Pair with pork."
   },
   {
     name: "Domaine Laurent Cognard Le Vieux Chateaux- 2016",
     image: Red,
     origin: "Montagny Premier Cru, France",
     grape: "Chianti Blend",
     cost: "$40",
     about: "Red, Savory, Classic, Pair with lamb."
   },
   {
     name: "Fattoria di Petroio 'Poggio ai Grilli' Chianti Classico Gran Selezione DOCG 2015",
     image: Red,
     origin: "Tuscany, Italy",
     grape: "Syrah",
     cost: "$42",
     about: "Red, Bold, Structured, Pair with lamb."
   },
   {
     name: "Muller-Catoir Haardter Burgergarten 'Breumel in den Mauern' Riesling Auslese 2015",
     image: White,
     origin: "Pfalz, Germany",
     grape: "Riesling",
     cost: "$39",
     about: "Dessert, Lush, Balanced, Pair with fruit based desserts."
   },
   {
     name: "La Rioja Alta S.A. Gran Reserva 904, Rioja DOCa 2010",
     image: Red,
     origin: "Rioja, Spain",
     grape: "Rioja Red Blend",
     cost: "$57",
     about: "Red, Savory, Classic, Pair with lamb."
   },
   {
     name: "Boedecker Cellars Willamette Valley Pinot Noir 2015",
     image: Red,
     origin: "Willamette Valley, Oregon",
     grape: "Pinot Noir",
     cost: "$21",
     about: "Red, Light, Perfumed, Pair with chicken and turkey."
   },
   {
     name: "Pieropan Calvarino Soave Classico 2015",
     image: White,
     origin: "Veneto, Italy",
     grape: "Soave Blend",
     cost: "$31",
     about: "White, Green, Flinty, Pair with white fish."
   },
   {
     name: "Finca Flichman 'Dedicado' Gran Corte 2015",
     image: Red,
     origin: "Uco Valley, Argentina",
     grape: "Cabernet - Malbec - Syrah",
     cost: "$35",
     about: "Red, Bold, Structured, Pair with beef and venison."
   },
   {
     name: "Schramsberg Blanc de Blancs 2016",
     image: Sparkling,
     origin: "North Coast, California",
     grape: "Chardonnay",
     cost: "$36",
     about: "Sparkling, Complex, Traditional, Pair with crab and lobster."
   },
   {
     name: "Daterra Camino de la Frontera Tinto 2017",
     image: Red,
     origin: "Arribes, Spain",
     grape: "Rare Red Blend",
     cost: "$31",
     about: "Red, Rich, Intense, Pair with lamb."
   },
   {
     name: "Patricia Green Cellars 'Estate Vineyard - Etzel Block' Pinot Noir 2017",
     image: Red,
     origin: "Willamette Valley, Oregon",
     grape: "Pinot Noir",
     cost: "$38",
     about: "Red, Light, Perfumed, Pair with chicken and turkey."
   },
   {
     name: "De Morgenzon Reserve Chenin Blanc 2017",
     image: White,
     origin: "Stellenbosch, South Africa",
     grape: "Chenin Blanc",
     cost: "$40",
     about: "White, Buttery, Complex, Pair with cheddar and gruyere."
   },
   {
     name: "Daniel Bouland Morgon Les Delys 2018",
     origin: "Beaujolais, France",
     image: Red,
     grape: "Gamay",
     cost: "$39",
     about: "Red, Light, Perfumed, Pair with chicken and turkey."
   },
   {
     name: "Chateau Miraval Cotes de Provence Rose 2017",
     origin: "Provence, France",
     image: Rose,
     grape: "Cinsaut - Grenache",
     cost: "$16",
     about: "Rose, Crisp, Dry, Pair with salads and green vegetables."
   }
];

function WineCellar(){
  var layoutStyles = {
    display: "flex",
    flexWrap: "wrap",
  }

  return (
    <div>
    <h1>In Our Cellar</h1>
    <div style={layoutStyles}>
      {availableWines.map((wine, index) =>
        <Bottle
        name={wine.name}
        image={wine.image}
        origin={wine.origin}
        grape={wine.grape}
        cost={wine.cost}
        about={wine.about}
        key={index}/>
      )}
    </div>
    </div>
  );
}

export default WineCellar;
