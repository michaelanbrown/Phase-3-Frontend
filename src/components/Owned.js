import React from 'react';
import './App.css';
import PropertyCard from './PropertyCard';

function Owned({ properties, newAddition, setNewAddition }) {
    
    const propertyRender = properties.map (property => {
        return (
            <PropertyCard property={property} key={property.id} newAddition={newAddition} setNewAddition={setNewAddition}/>
        )
    })

    return (
        <div>
            {propertyRender}
        </div>
    )
}

export default Owned;