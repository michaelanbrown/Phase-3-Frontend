import React from 'react';
import './App.css';
import PropertyCard from './PropertyCard';

function Pending({ properties, setProperties }) {

    const propertyRender = properties.map (property => {
        return (
            <PropertyCard properties={properties} setProperties={setProperties} property={property} key={property.id}/>
        )
    })

    return (
        <div>
            {propertyRender}
        </div>
    )
}

export default Pending;