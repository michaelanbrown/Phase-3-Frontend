import React from 'react';
import { Link, Route, Routes } from "react-router-dom";
import './App.css';
import Property from './Property';

function PropertyCard({ property }) {
    const propertyURL = property.purchase_price ? `/owned/${property.id}` : `/pending/${property.id}`
    const match = property.purchase_price ? '/owned' : '/pending'
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
                <Link to={propertyURL}>View Details</Link>
                <Routes>
                    <Route path={`${match}/*`} element={<Property property={property}/>} />
                </Routes>
            </p>
        </div>
    )
}

export default PropertyCard;