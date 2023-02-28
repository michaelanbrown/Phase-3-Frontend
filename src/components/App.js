import './App.css';
import React, { useEffect, useState } from "react"
import { Switch, Route } from "react-router-dom";
import Header from "./Header"
import Home from "./Home"
import Owned from './Owned';
import Pending from './Pending';

function App() {
  return (
    <div>
        <Header />
        <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/owned">
              <Owned/>
            </Route>
            <Route exact path="/pending">
              <Pending/>
            </Route>
        </Switch>
    </div>
  );
}

export default App;
