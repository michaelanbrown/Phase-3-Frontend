import './App.css';
import React, { useEffect, useState } from "react"
import { Switch, Route } from "react-router-dom";
import Header from "./Header"
import Properties from "./Properties"

function App() {
  return (
    <div>
        <Header />
        <Switch>
            <Route exact path="/">
                <Properties/>
            </Route>
        </Switch>
    </div>
  );
}

export default App;
