import React from 'react';
import './App.css';

function PropertyCard({ property }) {
    

    return (
        <div>
            <br></br>
            <img src={property.link} alt={property.address} width="75%" height="75%"/>
            <p>{property.city}<br></br>{property.state}</p>
            <br></br>
            <br></br>
        </div>
    )
}

export default PropertyCard;