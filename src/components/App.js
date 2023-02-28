import './App.css';
// import React, { useEffect, useState } from "react"
import { Switch, Route } from "react-router-dom";
import Header from "./Header"
import Home from "./Home"
import Properties from './Properties';
import Records from './Records';

function App() {
  return (
    <div>
        <Header />
        <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/properties">
              <Properties/>
            </Route>
            <Route exact path="/records">
              <Records/>
            </Route>
        </Switch>
    </div>
  );
}

export default App;
