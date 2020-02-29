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


function App() {

    return (
      <div className="App">
      <Navbar />
      <Header />
        <Switch>
          <Route exact path='/' component={Tastings} />
          <Route exact path='/about' component={About} />
          <Route exact path='/tastings' component={Tastings} />
          <Route exact path='/glasses' component={Glasses} />
          <Route exact path='/food' component={Food} />
          <Route exact path='/winelist' component={NewWineControl} />
          <Route component={Error404} />
        </Switch>
      <Footer />
      </div>
    );
  }

export default App;
