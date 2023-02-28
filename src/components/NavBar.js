import React from 'react';
import { NavLink } from "react-router-dom";
import './App.css';

export default function NavBar ()  {


    return (
        <nav className="NavBar">
            <NavLink exact to="/" activeStyle={{color: 'blue'}} style={{color: 'black'}}>Welcome</NavLink>
            <br></br>
            <NavLink exact to="/owned" activeStyle={{color: 'blue'}} style={{color: 'black'}}>Owned</NavLink>
            <br></br>
            <NavLink exact to="/records" activeStyle={{color: 'blue'}} style={{color: 'black'}}>Property Records</NavLink>
        </nav>
    )
}