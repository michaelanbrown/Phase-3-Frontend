import React from 'react';
import './App.css';
import PropertyCard from './PropertyCard';

function Pending({ properties, handleAddition }) {

    const propertyRender = properties.map (property => {
        return (
            <PropertyCard property={property} key={property.id} handleAddition={handleAddition}/>
        )
    })

    return (
        <div>
            {propertyRender}
        </div>
    )
}

export default Pending;