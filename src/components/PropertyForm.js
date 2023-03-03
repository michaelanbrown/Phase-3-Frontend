import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function PropertyForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
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

    function handleFormChange(e) {
        setFormData({
            ...formData,
            [e.target.id] : e.target.value
        });
    }

    function handleTypechange(e) {
        setFormData({
            ...formData,
            [e.target.id] : document.getElementById('type').value

        });
    }

    function handleNewProperty(e) {
        e.preventDefault();
        fetch("http://localhost:9292/properties", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(formData),
        }).then(r => r.json())
        navigate('/')
    }

    return (
        <div>
            <form onSubmit={handleNewProperty}>
                <p id='propertyRecordHeader'>Enter a new Property:</p>
                <br/>
                <input type="text" className="propertyFormElement" id="street_address" value={formData.street_address} onChange={handleFormChange} placeholder="Property Street Address"/>
                <br/>
                <input type="text" className="propertyFormElement" id="city" value={formData.city} onChange={handleFormChange} placeholder="City"/>
                <br/>
                <input type="text" className="propertyFormElement" id="state" value={formData.state} onChange={handleFormChange} placeholder="State"/>
                <br/>
                <input type="text" className="propertyFormElement" id="purchase_price" value={formData.purchase_price} onChange={handleFormChange} placeholder="Purchase Price (No dollar sign)"/>
                <br/>
                <input type="text" className="propertyFormElement" id="square_feet" value={formData.square_feet} onChange={handleFormChange} placeholder="Square feet"/>
                <br/>
                <input type="text" className="propertyFormElement" id="garage_spaces" value={formData.garage_spaces} onChange={handleFormChange} placeholder="Garage Spaces"/>
                <br/>
                <input type="text" className="propertyFormElement" id="link" value={formData.link} onChange={handleFormChange} placeholder="Image URL"/>
                <br/>
                <input type="text" className="propertyFormElement" id="flip_status" value={formData.flip_status} onChange={handleFormChange} placeholder="Flip Status"/>
                <br/>
                <select className="propertyFormElement" id="type" name="type" defaultValue="Single Family" onChange={handleFormChange}>
                    <option value="Single Family" key="SingleFamily">Single Family</option>
                    <option value="Condo/Townhouse" key="CondoTownhouse">Condo/Townhouse</option>
                    <option value="Multifamily" key="Multifamily">Multifamily</option>
                    <option value="Apartment Building" key="Apartment">Apartment Building</option>
                    <option value="Commercial/Business" key="CommercialBusiness">Commercial/Business</option>
                </select>
                <br/>
                <button className='submit'>Submit</button>
            </form>
        </div>
    )
}

export default PropertyForm;