import React, { useEffect, useState } from 'react';
import './App.css';
import { useParams } from 'react-router-dom';

function Property() {
    const [propertyData, setPropertyData] = useState([])
    const { id } = useParams();
    const purchasePrice = propertyData.purchase_price ? `$${propertyData.purchase_price}` : "Pending Purchase"
    const garageSpaces = propertyData.garage_spaces ? `${propertyData.garage_spaces} garage spaces` : "No garage"

    useEffect(() => {
        fetch(`http://localhost:9292/properties/${id}`)
        .then(r => r.json())
        .then(data => {
            setPropertyData(data);
        })}, [])

    return (
        <div>
            <h1>{propertyData.street_address}</h1> 
            <p>{propertyData.city}, {propertyData.state}</p>
            <img className = "PropertyImg" src={propertyData.link} alt={propertyData.address} width="75%" height="75%"/> 
            <br/>
            Purchase Price: {purchasePrice}
            <br/>
            Square feet: {propertyData.square_feet}
            <br/>
            Garage Spaces: {garageSpaces}
            <br/>
            Property Type: {propertyData.type ? propertyData.type.property_type : null}
        </div>
    )
}

export default Property;