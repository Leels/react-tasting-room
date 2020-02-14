import React from "react";
import Bottle from './Bottle';
import './AvailableProduce.css';

const availableWines = [
   {
      name: "Domaine Eric et Joel Durand Cornas Empreintes- 2016",
      origin: "Rhone, France",
      grape: "Syrah",
      cost: "$42",
      about: [
         "Red",
         "Bold",
         "Structured",
         "Pair with lamb."
      ]
   },
   {
     name: "Nino Franco Prosecco di Conegliano-Valdobbiadene Superiore Brut DOCG",
     origin: "Veneto, Italy",
     grape: "Glera (Prosecco)",
     cost: "$17",
     about: [
        "Sparkling",
        "Fresh",
        "Youthful",
        "Pair with pork."
     ]
   },
   {
     name: "Domaine Laurent Cognard Le Vieux Chateaux- 2016",
     origin: "Montagny Premier Cru, France",
     grape: "Chianti Blend",
     cost: "$40",
     about: [
        "Red",
        "Savory",
        "Classic",
        "Pair with lamb."
     ]
   },
   {
     name: "Fattoria di Petroio 'Poggio ai Grilli' Chianti Classico Gran Selezione DOCG 2015",
     origin: "Tuscany, Italy",
     grape: "Syrah",
     cost: "$42",
     about: [
        "Red",
        "Bold",
        "Structured",
        "Pair with lamb."
     ]
   },
   {
     name: "Muller-Catoir Haardter Burgergarten 'Breumel in den Mauern' Riesling Auslese 2015",
     origin: "Pfalz, Germany",
     grape: "Riesling",
     cost: "$39",
     about: [
        "Dessert",
        "Lush",
        "Balanced",
        "Pair with fruit based desserts."
     ]
   },
   {
     name: "La Rioja Alta S.A. Gran Reserva 904, Rioja DOCa 2010",
     origin: "Rioja, Spain",
     grape: "Rioja Red Blend",
     cost: "$57",
     about: [
        "Red",
        "Savory",
        "Classic",
        "Pair with lamb."
     ]
   },
   {
     name: "Boedecker Cellars Willamette Valley Pinot Noir 2015",
     origin: "Willamette Valley, Oregon",
     grape: "Pinot Noir",
     cost: "$21",
     about: [
        "Red",
        "Light",
        "Perfumed",
        "Pair with chicken and turkey."
     ]
   },
   {
     name: "Finca Flichman 'Dedicado' Gran Corte 2015",
     origin: "Uco Valley, Argentina",
     grape: "Cabernet - Malbec - Syrah",
     cost: "$35",
     about: [
        "Red",
        "Bold",
        "Structured",
        "Pair with beef and venison."
     ]
   },
   {
     name: "Daterra Camino de la Frontera Tinto 2017",
     origin: "Arribes, Spain",
     grape: "Rare Red Blend",
     cost: "$31",
     about: [
        "Red",
        "Rich",
        "Intense",
        "Pair with lamb."
     ]
   },
   {
     name: "Patricia Green Cellars 'Estate Vineyard - Etzel Block' Pinot Noir 2017",
     origin: "Willamette Valley, Oregon",
     grape: "Pinot Noir",
     cost: "$38",
     about: [
        "Red",
        "Light",
        "Perfumed",
        "Pair with chicken and turkey."
     ]
   },
   {
     name: "Daniel Bouland Morgon Les Delys 2018",
     origin: "Beaujolais, France",
     grape: "Gamay",
     cost: "$39",
     about: [
        "Red",
        "Light",
        "Perfumed",
        "Pair with chicken and turkey."
     ]
   },
   {
     name: "Chateau Miraval Cotes de Provence Rose 2017",
     origin: "Provence, France",
     grape: "Cinsaut - Grenache",
     cost: "$16",
     about: [
        "Rose",
        "Crisp",
        "Dry",
        "Pair with salads and green vegetables."
     ]
   }
];

function AvailableProduce(){
  var layoutStyles = {
    display: "flex",
    flexWrap: "wrap",
  }
  return (
    <div style={layoutStyles}>
      {availableWines.map((wine, index) =>
        <Bottle
        name={wine.name}
        origin={wine.origin}
        grape={wine.grape}
        cost={wine.cost}
        about={wine.about}
        key={index}/>
      )}
    </div>
  );
}

export default WineCellar;
