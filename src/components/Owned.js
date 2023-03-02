import React from 'react';
import './App.css';
import PropertyCard from './PropertyCard';

function Owned({ properties }) {
    
    const propertyRender = properties.map (property => {
        return (
            <PropertyCard property={property} key={property.id}/>
        )
    })

    return (
        <div>
            {propertyRender}
        </div>
    )
}

export default Owned;