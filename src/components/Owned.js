import React from 'react';
import './App.css';
import PropertyCard from './PropertyCard';

function Owned({ properties, setProperties }) {
    
    const propertyRender = properties.map (property => {
        return (
            <PropertyCard properties={properties} setProperties={setProperties} property={property} key={property.id} />
        )
    })

    return (
        <div>
            {propertyRender}
        </div>
    )
}

export default Owned;