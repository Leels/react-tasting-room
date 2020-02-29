import React from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Tastings from './components/Tastings';
import Glasses from './components/Glasses';
import Food from './components/Food';
import About from './components/About';
import WineList from './components/WineList';
import NewWineForm from './components/NewWineForm';
import NewWineControl from './components/NewWineControl';
import Admin from './components/Admin';
import Error404 from './components/Error404';
import { Switch, Route } from 'react-router-dom';
import Red from "./components/images/Red.png";
import Rose from "./components/images/Rose.png";
import White from "./components/images/White.png";
import Sparkling from "./components/images/Sparkling.png";
import './App.css';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterWineList: [
         {
            name: "Domaine Eric et Joel Durand Cornas Empreintes- 2016",
            image: Red,
            origin: "Rhone, France",
            cost: "15/42",
            keywords: "Red, Syrah, Bold, Structured, Pair with lamb.",
            pairing: "Pair with lamb."
         },
         {
           name: "Nino Franco Prosecco di Conegliano-Valdobbiadene Superiore Brut DOCG",
           image: Sparkling,
           origin: "Veneto, Italy",
           cost: "8/17",
           keywords: "Sparkling, Glera (Prosecco), Fresh, Youthful",
           pairing: "Pair with pork."
         },
         {
           name: "Domaine Laurent Cognard Le Vieux Chateaux- 2016",
           image: Red,
           origin: "Montagny Premier Cru, France",
           cost: "14/40",
           keywords: "Red, Chianti Blend, Savory, Classic",
           pairing: "Pair with lamb."
         },
         {
           name: "Fattoria di Petroio 'Poggio ai Grilli' Chianti Classico Gran Selezione DOCG 2015",
           image: Red,
           origin: "Tuscany, Italy",
           cost: "14/42",
           keywords: "Red, Syrah, Bold, Structured",
           pairing: "Pair with lamb."
         },
         {
           name: "Muller-Catoir Haardter Burgergarten 'Breumel in den Mauern' Riesling Auslese 2015",
           image: White,
           origin: "Pfalz, Germany",
           cost: "13/39",
           keywords: "Dessert, Riesling, Lush, Balanced",
           pairing: "Pair with fruit based desserts."
         },
         {
           name: "La Rioja Alta S.A. Gran Reserva 904, Rioja DOCa 2010",
           image: Red,
           origin: "Rioja, Spain",
           cost: "18/57",
           keywords: "Red, Rioja Red Blend, Savory, Classic",
           pairing: "Pair with lamb."
         },
         {
           name: "Chateau Miraval Cotes de Provence Rose 2017",
           origin: "Provence, France",
           image: Rose,
           cost: "8/16",
           keywords: "Rose, Cinsaut - Grenache, Crisp, Dry",
           pairing: "Pair with salads and green vegetables."
         },
         {
           name: "Boedecker Cellars Willamette Valley Pinot Noir 2015",
           image: Red,
           origin: "Willamette Valley, Oregon",
           cost: "9/21",
           keywords: "Red, Pinot Noir, Light, Perfumed",
           pairing: "Pair with chicken and turkey."
         },
         {
           name: "Pieropan Calvarino Soave Classico 2015",
           image: White,
           origin: "Veneto, Italy",
           cost: "10/31",
           keywords: "White, Soave Blend, Green, Flinty",
           pairing: "Pair with white fish."
         },
         {
           name: "Finca Flichman 'Dedicado' Gran Corte 2015",
           image: Red,
           origin: "Uco Valley, Argentina",
           cost: "11/35",
           keywords: "Red, Cabernet - Malbec - Syrah, Bold, Structured",
           pairing: "Pair with beef and venison."
         },
         {
           name: "Schramsberg Blanc de Blancs 2016",
           image: Sparkling,
           origin: "North Coast, California",
           cost: "11/36",
           keywords: "Sparkling, Chardonnay, Complex, Traditional",
           pairing: "Pair with crab and lobster."
         },
         {
           name: "Daterra Camino de la Frontera Tinto 2017",
           image: Red,
           origin: "Arribes, Spain",
           cost: "10/31",
           keywords: "Red, Rare Red Blend, Rich, Intense",
           pairing: "Pair with lamb."
         },
         {
           name: "Patricia Green Cellars 'Estate Vineyard - Etzel Block' Pinot Noir 2017",
           image: Red,
           origin: "Willamette Valley, Oregon",
           cost: "12/38",
           keywords: "Red, Pinot Noir, Light, Perfumed",
           pairing: "Pair with chicken and turkey."
         },
         {
           name: "De Morgenzon Reserve Chenin Blanc 2017",
           image: White,
           origin: "Stellenbosch, South Africa",
           cost: "13/40",
           keywords: "White, Chenin Blanc, Buttery, Complex",
           pairing: "Pair with cheddar and gruyere."
         },
         {
           name: "Daniel Bouland Morgon Les Delys 2018",
           origin: "Beaujolais, France",
           image: Red,
           cost: "13/39",
           keywords: "Red, Gamay, Light, Perfumed",
           pairing: "Pair with chicken and turkey."
         }
      ]
    };
    this.handleAddingNewWineToList = this.handleAddingNewWineToList.bind(this);
  }

  handleAddingNewWineToList(newWine){
    let newMasterWineList = this.state.masterWineList.slice();
    newMasterWineList.push(newWine);
    this.setState({masterWineList: newMasterWineList});
  }
  render(){
    return (
      <div className="App">
      <Navbar />
      <Header />
        <Switch>
          <Route exact path='/' render={()=><WineList wineList={this.state.masterWineList} />} />
          <Route exact path='/about' component={About} />
          <Route exact path='/tastings' component={Tastings} />
          <Route exact path='/glasses' component={Glasses} />
          <Route exact path='/tastings' component={Tastings} />
          <Route exact path='/food' component={Food} />
          <Route exact path='/newwineform' render={()=><NewWineControl onNewWineCreation={this.handleAddingNewWineToList} />} />
          <Route component={Error404} />
        </Switch>
      <Footer />
      </div>
    );
  }
}

export default App;
