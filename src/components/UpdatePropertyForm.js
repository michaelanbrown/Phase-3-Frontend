import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './App.css';

function UpdatePropertyForm({ updateProperty, setUpdateProperty, handleUpdateStatusClick, updateStatus, end, setEnd, properties, setProperties, propertyData, setPropertyData }) {
    const navigate = useNavigate();
    const { id } = useParams();

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
            state: propertyData.state,
            records: propertyData.records})
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
        .then(setEnd(!end))
        handleUpdateStatusClick()
        navigate(`/${updateProperty.purchase_price ? "owned" : "pending"}/${id}`)
    }

    return (updateStatus ? (
        <div>
            <form onSubmit={handleUpdatingProperty}>
                Enter Updates Here:
                <br></br>
                Purchase Price: <input type="text" className="recordFormElement" id="purchase_price" value={updateProperty.purchase_price ? updateProperty.purchase_price : ""} onChange={handleFormChange} placeholder="Purchase Price"/>
                <br/>
                Square Feet: <input type="text" className="recordFormElement" id="square_feet" value={updateProperty.square_feet} onChange={handleFormChange} placeholder="Square Feet"/>
                <br/>
                Garage Spaces: <input type="text" className="recordFormElement" id="garage_spaces" value={updateProperty.garage_spaces} onChange={handleFormChange} placeholder="Garage Spaces"/>
                <br/>
                Flip Status: <input type="text" className="recordFormElement" id="flip_status" value={updateProperty.flip_status ? updateProperty.flip_status : ""} onChange={handleFormChange} placeholder="Flip Status"/>
                <br/>
                Image URL: <input type="text" className="recordFormElement" id="link" value={updateProperty.link} onChange={handleFormChange} placeholder="Image URL"/>
                <br/>
                <button className='submit'>Submit Changes</button>
            </form>
        </div>) : null
    )
}

export default UpdatePropertyForm;