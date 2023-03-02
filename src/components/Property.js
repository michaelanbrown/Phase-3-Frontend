import React, { useEffect, useState } from 'react';
import './App.css';
import { useParams } from 'react-router-dom';

function Property({  }) {
    const [propertyData, setPropertyData] = useState([])
    const { id } = useParams();
    
    useEffect(() => {
        fetch(`http://localhost:9292/properties/${id}`)
        .then(r => r.json())
        .then(data => {
            setPropertyData(data);
        })}, [])

        console.log(propertyData)

    return (
        <div>
            <h1>hello</h1>  
        </div>
    )
}

export default Property;