import React, { useState } from 'react';
import './App.css';

function PropertyForm() {
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

    return (
        <div>
            <form>
                <p id='propertyRecordHeader'>Enter a new Property:</p>
                <br/>
                <input type="text" className="propertyFormElement" id="streetAddress" value={formData.streetAddress} onChange={handleFormChange} placeholder="Property Street Address"/>
                <br/>
                <input type="text" className="propertyFormElement" id="city" value={formData.city} onChange={handleFormChange} placeholder="City"/>
                <br/>
                <input type="text" className="propertyFormElement" id="state" value={formData.state} onChange={handleFormChange} placeholder="State"/>
                <br/>
                <input type="text" className="propertyFormElement" id="purchasePrice" value={formData.purchasePrice} onChange={handleFormChange} placeholder="Purchase Price (if Applicable)"/>
                <br/>
                <input type="text" className="propertyFormElement" id="sqft" value={formData.sqft} onChange={handleFormChange} placeholder="Square feet"/>
                <br/>
                <input type="text" className="propertyFormElement" id="garage" value={formData.garage} onChange={handleFormChange} placeholder="Garage Spaces"/>
                <br/>
                <input type="text" className="propertyFormElement" id="link" value={formData.link} onChange={handleFormChange} placeholder="Image URL"/>
                <br/>
                <input type="text" className="propertyFormElement" id="type" value={formData.type} onChange={handleFormChange} placeholder="Property Type"/>
                <br/>
                <input type="text" className="propertyFormElement" id="flipStatus" value={formData.flipStatus} onChange={handleFormChange} placeholder="Flip Status"/>
                <br/>
                <button className='submit'>Submit</button>
            </form>
        </div>
    )
}

export default PropertyForm;