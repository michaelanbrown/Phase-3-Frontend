import React from 'react';
import { NavLink } from "react-router-dom";
import './App.css';

export default function NavBar ()  {


    return (
        <nav className="NavBar">
            <NavLink to="/">Welcome</NavLink>
            <br></br>
            <NavLink to="/owned">Owned</NavLink>
            <br></br>
            <NavLink to="/pending">Pending</NavLink>
        </nav>
    )
}