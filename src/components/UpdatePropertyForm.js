import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './App.css';

function UpdatePropertyForm({ updateStatus }) {
    const { id } = useParams();
    const [updateProperty, setUpdateProperty] = useState({
        street_address: "",
        city: "",
        state: "",
        purchase_price: "",
        square_feet: "",
        garage_spaces: "",
        link: "",
        flip_status: "",
        type: ""
    });

    console.log(updateProperty)

    useEffect(() => {
        fetch(`http://localhost:9292/properties/${id}`)
        .then(r => r.json())
        .then(r => {
            setUpdateProperty({...updateProperty,
                street_address : r.street_address,
                city: r.city,
                state: r.state,
                purchase_price: r.purchase_price,
                square_feet: r.square_feet,
                garage_spaces: r.garage_spaces,
                link: r.link,
                flip_status: r.flip_status,
                type: r.type
        })
        })
    },[id])

    function handleFormChange(e) {
        setUpdateProperty({
            ...updateProperty,
            [e.target.id] : e.target.value,
        });
    }

    return (updateStatus ? (
        <div>
            <form >
                Enter Updates Here:
                <br></br>
                Street Address: <input type="text" className="recordFormElement" id="updateAddress" value={updateProperty.street_address} onChange={handleFormChange} placeholder="Property Street Address"/>
                <br/>
                City: <input type="text" className="recordFormElement" id="updateCity" value={updateProperty.city} onChange={handleFormChange} placeholder="Mortgage Payment"/>
                <br/>
                State: <input type="text" className="recordFormElement" id="updateState" value={updateProperty.state} onChange={handleFormChange} placeholder="HOA Payment"/>
                <br/>
                Purchase Price: <input type="text" className="recordFormElement" id="updatePrice" value={updateProperty.purchase_price} onChange={handleFormChange} placeholder="Property Management Payment"/>
                <br/>
                Square Feet: <input type="text" className="recordFormElement" id="updateSqft" value={updateProperty.square_feet} onChange={handleFormChange} placeholder="Gross Income"/>
                <br/>
                Garage Spaces: <input type="text" className="recordFormElement" id="updateGarage" value={updateProperty.garage_spaces} onChange={handleFormChange} placeholder="Gross Income"/>
                <br/>
                Flip Status: <input type="text" className="recordFormElement" id="updateFlip" value={updateProperty.flip_status} onChange={handleFormChange} placeholder="Gross Income"/>
                <br/>
                Image URL: <input type="text" className="recordFormElement" id="updateLink" value={updateProperty.link} onChange={handleFormChange} placeholder="Gross Income"/>
                <br/>
                Property Type: <input type="text" className="recordFormElement" id="updateType" value={updateProperty.type.property_type} onChange={handleFormChange} placeholder="Gross Income"/>
                <br/>
                <button className='submit'>Submit Changes</button>
            </form>
        </div>) : null
    )
}

export default UpdatePropertyForm;