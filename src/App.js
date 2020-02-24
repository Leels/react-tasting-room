import React from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Tastings from './components/Tastings';
import Glasses from './components/Glasses';
import Food from './components/Food';
import About from './components/About';
import WineCellar from './components/WineCellar';
import Error404 from './components/Error404';
import EnterSiteControl from './components/EnterSiteControl';
import { Switch, Route } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div className="App">
        <Navbar />
        <Switch>
        <Route exact path='/' component={EnterSiteControl} />
        <Route exact path='/About' component={About} />
        <Route exact path='/Tastings' component={Tastings} />
        <Route exact path='/Glasses' component={Glasses} />
          <Route exact path='/WineCellar' component={WineCellar} />
          <Route exact path='/Food' component={Food} />
        <Route exact path='/About' component={About} />
        <Route component={Error404} />
        </Switch>
        <Footer />
    </div>
  );
}

export default App;
