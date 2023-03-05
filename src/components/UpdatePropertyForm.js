import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './App.css';

function UpdatePropertyForm({ updateStatus, properties, setProperties }) {
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

    function handleTypechange(e) {
        setUpdateProperty({
            ...updateProperty,
            [e.target.id] : document.getElementById('type').value
        });
    }

    function handleUpdatingProperty(e) {
        e.preventDefault();
        fetch(`http://localhost:9292/properties/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(updateProperty)
        })
        .then(r => r.json())
        .then(r => setProperties([...properties,
            {street_address: r.street_address,
            city: r.city,
            state: r.state,
            purchase_price: r.purchase_price,
            square_feet: r.square_feet,
            garage_spaces: r.garage_spaces,
            link: r.link,
            flip_status: r.flip_status,
            type:{property_type: r.type}}]))
        .then(setUpdateProperty({
            street_address: "",
            city: "",
            state: "",
            purchase_price: "",
            square_feet: "",
            garage_spaces: "",
            link: "",
            flip_status: "",
            type: ""
        }))
    }

    return (updateStatus ? (
        <div>
            <form >
                Enter Updates Here:
                <br></br>
                Street Address: <input type="text" className="recordFormElement" id="street_address" value={updateProperty.street_address} onChange={handleFormChange} placeholder="Property Street Address"/>
                <br/>
                City: <input type="text" className="recordFormElement" id="city" value={updateProperty.city} onChange={handleFormChange} placeholder="Mortgage Payment"/>
                <br/>
                State: <input type="text" className="recordFormElement" id="state" value={updateProperty.state} onChange={handleFormChange} placeholder="HOA Payment"/>
                <br/>
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
                Property Type: <select className="recordFormElement" id="type" name="type" defaultValue={updateProperty.type.property_type} onChange={handleTypechange}>
                        <option value="Single family" key="SingleFamily">Single family</option>
                        <option value="Condo/Townhouse" key="CondoTownhouse">Condo/Townhouse</option>
                        <option value="Multifamily" key="Multifamily">Multifamily</option>
                        <option value="Apartment Building" key="Apartment">Apartment Building</option>
                        <option value="Commercial/Business" key="CommercialBusiness">Commercial/Business</option>
                </select>
                <br/>
                <button className='submit' onSubmit={handleUpdatingProperty}>Submit Changes</button>
            </form>
        </div>) : null
    )
}

export default UpdatePropertyForm;