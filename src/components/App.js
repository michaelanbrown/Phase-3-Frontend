import './App.css';
// import React, { useEffect, useState } from "react"
import { Switch, Route } from "react-router-dom";
import Header from "./Header"
import Home from "./Home"

function App() {
  return (
    <div>
        <Header />
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
        </Switch>
    </div>
  );
}

export default App;
