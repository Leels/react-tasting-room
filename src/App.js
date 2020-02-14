import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Events from './components/Events';
import WineCellar from './components/WineCellar';
import TastingRoom from './components/TastingRoom';
import { Switch, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Header />
        <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/About' component={About} />
        <Route exact path='/Events' component={Events} />
        <Route exact path='/WineCellar' component={WineCellar} />
        <Route exact path='/TastingRoom' component={TastingRoom} />
        </Switch>
        <Footer />
    </div>
  );
}

export default App;
