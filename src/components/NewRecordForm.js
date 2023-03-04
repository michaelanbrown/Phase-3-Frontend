import React, { useState } from 'react';
import './App.css';

function NewRecordForm({ propertyData, records, setRecords }) {
    const [formData, setFormData] = useState({
        property: propertyData.property,
        mortgage_payment: "",
        hoa_payment: "",
        property_management_payment: "",
        gross_income: "",
        occupancy: ""
    });
    
    function handleFormChange(e) {
        setFormData({
            ...formData,
            [e.target.id] : e.target.value
        });
    }

    function handleTypeChange(e) {
        if (document.getElementById('occupancy').value === "True") {
            setFormData({
                ...formData,
                [e.target.id] : true
            })
        } else if (document.getElementById('occupancy').value === "False") {
            setFormData({
                ...formData,
                [e.target.id] : false
            });
        } else {
            setFormData({
                ...formData,
                [e.target.id] : null
            })
        }
    };
  

    function handleNewRecord(e) {
        e.preventDefault();
        fetch("http://localhost:9292/records", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(formData),
        }).then(r => r.json())
        .then(r => {
            setRecords([...records]);
        })
    }

    return (
        <div>
            <form onSubmit={handleNewRecord}>
                <p id='recordHeader'>Enter a new Finance Record:</p>
                <br/>
                <div className="formBox">
                    Street Address: <input type="text" className="recordFormElement" id="property" defaultValue={propertyData.street_address} onChange={handleFormChange} placeholder="Property Street Address"/>
                    <br/>
                    Mortgage Payment: <input type="text" className="recordFormElement" id="mortgage_payment" value={formData.mortgage_payment} onChange={handleFormChange} placeholder="Mortgage Payment"/>
                    <br/>
                    HOA Payment: <input type="text" className="recordFormElement" id="hoa_payment" value={formData.hoa_payment} onChange={handleFormChange} placeholder="HOA Payment"/>
                    <br/>
                    Property Management Payment: <input type="text" className="recordFormElement" id="property_management_payment" value={formData.property_management_payment} onChange={handleFormChange} placeholder="Property Management Payment"/>
                    <br/>
                    Income: <input type="text" className="recordFormElement" id="gross_income" value={formData.gross_income} onChange={handleFormChange} placeholder="Gross Income"/>
                    <br/>
                    Occupied?: <select className="recordFormSelect" id="occupancy" name="occupancy" defaultValue="blank" onChange={handleTypeChange}>
                        <option value="blank" key="blank">{' '}</option>
                        <option value="True" key="True">True</option>
                        <option value="False" key="False">False</option>
                    </select>
                    <br/>
                    <button className='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default NewRecordForm;