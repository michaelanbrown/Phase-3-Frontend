import React from 'react';
import './App.css';
import { useParams } from 'react-router-dom';

function Property({ property }) {
    const { id } = useParams();
    console.log(useParams())
    

    return (
        <div>
            <h1>hello</h1>  
        </div>
    )
}

export default Property;