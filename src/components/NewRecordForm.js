import React, { useState } from 'react';
import './App.css';

function NewRecordForm({ propertyData }) {
    const [formData, setFormData] = useState({
        street_address: "",
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

    function handleTypechange(e) {
        setFormData({
            ...formData,
            [e.target.id] : document.getElementById('occupany').value
        });
    }

    function handleNewRecord(newRecord) {
        fetch("http://localhost:9292/records", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                street_address: newRecord.street_address,
                mortgage_payment: newRecord.mortgage_payment,
                hoa_payment: newRecord.hoa_payment,
                property_management_payment: newRecord.property_management_payment,
                gross_income: newRecord.gross_income,
                occupancy: newRecord.occupancy
            }),
        }).then(r => r.json())
    }

    return (
        <div>
            <form onSubmit={handleNewRecord}>
                <p id='recordHeader'>Enter a new Finance Record:</p>
                <br/>
                <div className="formBox">
                    Street Address: <input type="text" className="recordFormElement" id="street_address" value={formData.street_address} onChange={handleFormChange} placeholder="Property Street Address"/>
                    <br/>
                    Mortgage Payment: <input type="text" className="recordFormElement" id="mortgage_payment" value={formData.mortgage_payment} onChange={handleFormChange} placeholder="Mortgage Payment"/>
                    <br/>
                    HOA Payment: <input type="text" className="recordFormElement" id="hoa_payment" value={formData.hoa_payment} onChange={handleFormChange} placeholder="HOA Payment"/>
                    <br/>
                    Property Management Payment: <input type="text" className="recordFormElement" id="property_management_payment" value={formData.property_management_payment} onChange={handleFormChange} placeholder="Property Management Payment"/>
                    <br/>
                    Income: <input type="text" className="recordFormElement" id="gross_income" value={formData.gross_income} onChange={handleFormChange} placeholder="Gross Income"/>
                    <br/>
                    Occupied?: <select className="recordFormSelect" id="occupancy" name="occupany" defaultValue="blank" onChange={handleTypechange}>
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

// function handleCompleteAdd(futureEvent) {
//     fetch("https://travel-station-data.onrender.com/travels", {
//     method: "POST",
//     headers: {
//         "Content-Type" : "application/json"
//     },
//     body: JSON.stringify({
//         city: futureEvent.city,
//         state: futureEvent.state,
//         date: futureEvent.date,
//         photo: futureEvent.photo
//     }),
//     })
//     .then(r => r.json())
//     .then(data => {
//         setTravels([...travels, data]);
//     })
// }