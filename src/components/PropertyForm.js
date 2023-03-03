import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function PropertyForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        streetAddress: "",
        city: "",
        state: "",
        purchasePrice: "",
        sqft: "",
        garage: "",
        link: "",
        type: "",
        flipStatus: ""
    });

    function handleFormChange(e) {
        setFormData({
            ...formData,
            [e.target.id] : e.target.value
        });
    }

    function handleNewProperty(newProperty) {
        fetch("http://localhost:9292/properties", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                street_address: newProperty.mortgagePayment,
                city: newProperty.city,
                state: newProperty.state,
                purchase_price: newProperty.purchasePrice,
                square_feet: newProperty.sqft,
                garage_spaces: newProperty.garage,
                link: newProperty.link,
                type: newProperty.type,
                flip_status: newProperty.flipStatus
            }),
        }).then(r => r.json())
        navigate('/')
    }

    return (
        <div>
            <form onSubmit={handleNewProperty}>
                <p id='propertyRecordHeader'>Enter a new Property:</p>
                <br/>
                <input type="text" className="propertyFormElement" id="streetAddress" value={formData.streetAddress} onChange={handleFormChange} placeholder="Property Street Address"/>
                <br/>
                <input type="text" className="propertyFormElement" id="city" value={formData.city} onChange={handleFormChange} placeholder="City"/>
                <br/>
                <input type="text" className="propertyFormElement" id="state" value={formData.state} onChange={handleFormChange} placeholder="State"/>
                <br/>
                <input type="text" className="propertyFormElement" id="purchasePrice" value={formData.purchasePrice} onChange={handleFormChange} placeholder="Purchase Price (No dollar sign)"/>
                <br/>
                <input type="text" className="propertyFormElement" id="sqft" value={formData.sqft} onChange={handleFormChange} placeholder="Square feet"/>
                <br/>
                <input type="text" className="propertyFormElement" id="garage" value={formData.garage} onChange={handleFormChange} placeholder="Garage Spaces"/>
                <br/>
                <input type="text" className="propertyFormElement" id="link" value={formData.link} onChange={handleFormChange} placeholder="Image URL"/>
                <br/>
                <input type="text" className="propertyFormElement" id="flipStatus" value={formData.flipStatus} onChange={handleFormChange} placeholder="Flip Status"/>
                <br/>
                <select className="propertyFormElement" name="type" defaultValue="Single Family" onChange={handleFormChange}>
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