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
      cost: "$42",
      about: "Red, Syrah, Bold, Structured, Pair with lamb.",
      pairing: "Pair with lamb."
   },
   {
     name: "Nino Franco Prosecco di Conegliano-Valdobbiadene Superiore Brut DOCG",
     image: Sparkling,
     origin: "Veneto, Italy",
     cost: "$17",
     about: "Sparkling, Glera (Prosecco), Fresh, Youthful",
     pairing: "Pair with pork."
   },
   {
     name: "Domaine Laurent Cognard Le Vieux Chateaux- 2016",
     image: Red,
     origin: "Montagny Premier Cru, France",
     cost: "$40",
     about: "Red, Chianti Blend, Savory, Classic",
     pairing: "Pair with lamb."
   },
   {
     name: "Fattoria di Petroio 'Poggio ai Grilli' Chianti Classico Gran Selezione DOCG 2015",
     image: Red,
     origin: "Tuscany, Italy",
     cost: "$42",
     about: "Red, Syrah, Bold, Structured",
     pairing: "Pair with lamb."
   },
   {
     name: "Muller-Catoir Haardter Burgergarten 'Breumel in den Mauern' Riesling Auslese 2015",
     image: White,
     origin: "Pfalz, Germany",
     cost: "$39",
     about: "Dessert, Riesling, Lush, Balanced",
     pairing: "Pair with fruit based desserts."
   },
   {
     name: "La Rioja Alta S.A. Gran Reserva 904, Rioja DOCa 2010",
     image: Red,
     origin: "Rioja, Spain",
     cost: "$57",
     about: "Red, Rioja Red Blend, Savory, Classic",
     pairing: "Pair with lamb."
   },
   {
     name: "Chateau Miraval Cotes de Provence Rose 2017",
     origin: "Provence, France",
     image: Rose,
     cost: "$16",
     about: "Rose, Cinsaut - Grenache, Crisp, Dry",
     pairing: "Pair with salads and green vegetables."
   },
   {
     name: "Boedecker Cellars Willamette Valley Pinot Noir 2015",
     image: Red,
     origin: "Willamette Valley, Oregon",
     cost: "$21",
     about: "Red, Pinot Noir, Light, Perfumed",
     pairing: "Pair with chicken and turkey."
   },
   {
     name: "Pieropan Calvarino Soave Classico 2015",
     image: White,
     origin: "Veneto, Italy",
     cost: "$31",
     about: "White, Soave Blend, Green, Flinty",
     pairing: "Pair with white fish."
   },
   {
     name: "Finca Flichman 'Dedicado' Gran Corte 2015",
     image: Red,
     origin: "Uco Valley, Argentina",
     cost: "$35",
     about: "Red, Cabernet - Malbec - Syrah, Bold, Structured",
     pairing: "Pair with beef and venison."
   },
   {
     name: "Schramsberg Blanc de Blancs 2016",
     image: Sparkling,
     origin: "North Coast, California",
     cost: "$36",
     about: "Sparkling, Chardonnay, Complex, Traditional",
     pairing: "Pair with crab and lobster."
   },
   {
     name: "Daterra Camino de la Frontera Tinto 2017",
     image: Red,
     origin: "Arribes, Spain",
     cost: "$31",
     about: "Red, Rare Red Blend, Rich, Intense",
     pairing: "Pair with lamb."
   },
   {
     name: "Patricia Green Cellars 'Estate Vineyard - Etzel Block' Pinot Noir 2017",
     image: Red,
     origin: "Willamette Valley, Oregon",
     cost: "$38",
     about: "Red, Pinot Noir, Light, Perfumed",
     pairing: "Pair with chicken and turkey."
   },
   {
     name: "De Morgenzon Reserve Chenin Blanc 2017",
     image: White,
     origin: "Stellenbosch, South Africa",
     cost: "$40",
     about: "White, Chenin Blanc, Buttery, Complex",
     pairing: "Pair with cheddar and gruyere."
   },
   {
     name: "Daniel Bouland Morgon Les Delys 2018",
     origin: "Beaujolais, France",
     image: Red,
     cost: "$39",
     about: "Red, Gamay, Light, Perfumed",
     pairing: "Pair with chicken and turkey."
   }
];

function WineCellar(){
  var layoutStyles = {
    display: "flex",
    flexWrap: "wrap",
  }
  var title = {
    textAlign: "center",
    fontSize: "3rem"
  }
  return (
    <div>
    <h2 style={title}>In Our Cellar</h2>
    <div style={layoutStyles}>
      {availableWines.map((wine, index) =>
        <Bottle
        name={wine.name}
        image={wine.image}
        origin={wine.origin}
        cost={wine.cost}
        about={wine.about}
        pairing={wine.pairing}
        key={index}/>
      )}
    </div>
    </div>
  );
}

export default WineCellar;
