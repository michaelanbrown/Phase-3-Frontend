import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function PropertyCard({ property }) {
    const propertyURL = `localhost:9292/properties/${property.id}`

    return (
        <div>
            <br></br>
            <img className = "PropertyCardImg" src={property.link} alt={property.address} width="75%" height="75%"/>
            <p>{property.city}<br></br>{property.state}</p>
            <Link href={propertyURL}>View More</Link>
        </div>
    )
}

export default PropertyCard;