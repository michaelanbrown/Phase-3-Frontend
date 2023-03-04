import React, { useState } from 'react';
import './App.css';

function NewRecordForm({ propertyData, handleAddition }) {
    const [recordFormData, setRecordFormData] = useState({
        mortgage_payment: "",
        hoa_payment: "",
        property_management_payment: "",
        gross_income: "",
        occupancy: "",
        property: ""
    });

    console.log(recordFormData)

    function handleFormChange(e) {
        setRecordFormData({
            ...recordFormData,
            [e.target.id] : e.target.value,
            property : document.getElementById('property').value
        });
    }

    function handleTypeChange(e) {
        if (document.getElementById('occupancy').value === "True") {
            setRecordFormData({
                ...recordFormData,
                [e.target.id] : true,
                property : document.getElementById('property').value
            })
        } else if (document.getElementById('occupancy').value === "False") {
            setRecordFormData({
                ...recordFormData,
                [e.target.id] : false,
                property : document.getElementById('property').value
            });
        }
    };

    function handleNewRecord(e) {
        e.preventDefault();
        fetch("http://localhost:9292/records", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(recordFormData)
        }).then(r => r.json())
        .then(r => {
            handleAddition();
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
                    Mortgage Payment: <input type="text" className="recordFormElement" id="mortgage_payment" value={setRecordFormData.mortgage_payment} onChange={handleFormChange} placeholder="Mortgage Payment"/>
                    <br/>
                    HOA Payment: <input type="text" className="recordFormElement" id="hoa_payment" value={setRecordFormData.hoa_payment} onChange={handleFormChange} placeholder="HOA Payment"/>
                    <br/>
                    Property Management Payment: <input type="text" className="recordFormElement" id="property_management_payment" value={setRecordFormData.property_management_payment} onChange={handleFormChange} placeholder="Property Management Payment"/>
                    <br/>
                    Income: <input type="text" className="recordFormElement" id="gross_income" value={setRecordFormData.gross_income} onChange={handleFormChange} placeholder="Gross Income"/>
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