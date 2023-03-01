import React from 'react';
import { NavLink } from "react-router-dom";
import './App.css';

function PropertyCard({ property }) {
    const propertyURL = `/properties/${property.id}`

    return (
        <div>
            <br></br>
            <img className = "PropertyCardImg" src={property.link} alt={property.address} width="75%" height="75%"/>
            <p>{property.city}<br></br>{property.state}</p>
            <NavLink exact to={propertyURL} activeStyle={{color: 'blue'}} style={{color: 'black'}}>Owned</NavLink>
        </div>
    )
}

export default PropertyCard;