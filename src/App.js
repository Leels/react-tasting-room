import React from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/Home';
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
        <Route component={Error404} />
        </Switch>
        <Footer />
    </div>
  );
}

export default App;
