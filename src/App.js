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
import './App.css';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterWineList: []
    };
    this.handleAddingNewWineToList = this.handleAddingNewWineToList.bind(this);
  }

  handleAddingNewWineToList(newWine){
    var newMasterWineList = this.state.masterWineList.slice();
    newMasterWineList.push(newWine);
    this.setState({masterWineList: newMasterWineList});
  }

  render() {
    return (
      <div className="App">
      <Navbar />
      <Header />
        <Switch>
          <Route exact path='/' component={WineList} />
          <Route exact path='/About' component={About} />
          <Route exact path='/Tastings' component={Tastings} />
          <Route exact path='/Glasses' component={Glasses} />
          <Route exact path='/WineList' render={()=><WineList wineList={this.state.masterWineList} />} />
          <Route exact path='/Food' component={Food} />
          <Route exact path='/NewWineForm' render={()=><NewWineControl onNewWineCreation={this.handleAddingNewWineList} />} />
          <Route component={Error404} />
        </Switch>
      <Footer />
      </div>
    );
  }
}
export default App;
