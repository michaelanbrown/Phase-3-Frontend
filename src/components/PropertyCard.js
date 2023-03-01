import React from 'react';
import { NavLink } from "react-router-dom";
import './App.css';

function PropertyCard({ property }) {
    const propertyURL = `/properties/${property.id}`
    const purchasePrice = property.purchase_price ? `$${property.purchase_price}` : "Pending Purchase"
    const garageSpaces = property.garage_spaces ? `${property.garage_spaces} garage spaces` : "No garage"

    return (
        <div className="PropertyClass">
            <br></br>
            <img className = "PropertyCardImg" src={property.link} alt={property.address} width="75%" height="75%"/>
            <p>
                {property.street_address}
                <br/>
                {property.city}
                <br/>
                {property.state}
                <br/>
                {purchasePrice}
                <br/>
                {property.square_feet} sqft
                <br/>
                {garageSpaces}
                <br/>
                {property.type.property_type}
                <br/>
                <NavLink exact to={propertyURL} activeStyle={{color: 'blue'}} style={{color: 'black'}}>View Details</NavLink>
            </p>
        </div>
    )
}

export default PropertyCard;