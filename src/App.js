import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';

import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact />
          <Route path='/services' exact />
          <Route path='/products' exact />
          <Route path='/sign-up' exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
