import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Header />
        <Switch>
        <Route exact path='/' component={} />
        </Switch>
        <Footer />
    </div>
  );
}

export default App;
