import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './App.css';

function UpdatePropertyForm({ updateStatus, properties, setProperties, propertyData, setPropertyData }) {
    const { id } = useParams();
    const [updateProperty, setUpdateProperty] = useState({
        purchase_price: "",
        square_feet: "",
        garage_spaces: "",
        link: "",
        flip_status: "",
    });

    useEffect(() => {
        fetch(`http://localhost:9292/properties/${id}`)
        .then(r => r.json())
        .then(r => {
            setUpdateProperty({...updateProperty,
                purchase_price: r.purchase_price,
                square_feet: r.square_feet,
                garage_spaces: r.garage_spaces,
                link: r.link,
                flip_status: r.flip_status,
        })
        })
    },[id])

    function handleFormChange(e) {
        setUpdateProperty({
            ...updateProperty,
            [e.target.id] : e.target.value,
        });
    }

    function updatePropertiesArray(updatedProperty) {
        const updatingProperty = properties.map((prop) => {
            if (prop.id === updatedProperty.id) {
                return updatedProperty
            } else {
                return prop
            }
        })
        setProperties(updatingProperty)
        setPropertyData({...updatedProperty,
            type: propertyData.type,
            street_address: propertyData.street_adress,
            city: propertyData.city,
            state: propertyData.state})
    }

    function handleUpdatingProperty(e) {
        e.preventDefault();
        fetch(`http://localhost:9292/properties/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json",
                "Accept" : "application/json"
            },
            body: JSON.stringify(updateProperty)
        })
        .then(r => r.json())
        .then(r => updatePropertiesArray(r))
    }

    return (updateStatus ? (
        <div>
            <form onSubmit={handleUpdatingProperty}>
                Enter Updates Here:
                <br></br>
                Purchase Price: <input type="text" className="recordFormElement" id="purchase_price" value={updateProperty.purchase_price} onChange={handleFormChange} placeholder="Property Management Payment"/>
                <br/>
                Square Feet: <input type="text" className="recordFormElement" id="square_feet" value={updateProperty.square_feet} onChange={handleFormChange} placeholder="Gross Income"/>
                <br/>
                Garage Spaces: <input type="text" className="recordFormElement" id="garage_spaces" value={updateProperty.garage_spaces} onChange={handleFormChange} placeholder="Gross Income"/>
                <br/>
                Flip Status: <input type="text" className="recordFormElement" id="flip_status" value={updateProperty.flip_status} onChange={handleFormChange} placeholder="Gross Income"/>
                <br/>
                Image URL: <input type="text" className="recordFormElement" id="link" value={updateProperty.link} onChange={handleFormChange} placeholder="Gross Income"/>
                <br/>
                <button className='submit'>Submit Changes</button>
            </form>
        </div>) : null
    )
}

export default UpdatePropertyForm;