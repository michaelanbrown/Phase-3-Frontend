import React, { useState } from 'react';
import './App.css';

function NewRecordForm() {
    const [formData, setFormData] = useState({
        mortgagePayment: "",
        hOAPayment: "",
        propertyManagementPayment: "",
        grossIncome: "",
        occupancy: "",
        property: ""
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

    function handleNewRecord(newRecord) {
        fetch("http://localhost:9292/records", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                mortgage_payment: newRecord.mortgagePayment,
                hoa_payment: newRecord.hOAPayment,
                property_management_payment: newRecord.propertyManagementPayment,
                gross_income: newRecord.grossIncome,
                occupancy: newRecord.occupancy,
                property: newRecord.property
            }),
        }).then(r => r.json())
    }

    return (
        <div>
            <form onSubmit={handleNewRecord}>
                <p id='recordHeader'>Enter a new Finance Record:</p>
                <br/>
                <div className="formBox">
                    Street Address: <input type="text" className="recordFormElement" id="property" value={formData.property} onChange={handleFormChange} placeholder="Property Street Address"/>
                    <br/>
                    Mortgage Payment: <input type="text" className="recordFormElement" id="mortgage" value={formData.mortgagePayment} onChange={handleFormChange} placeholder="Mortgage Payment"/>
                    <br/>
                    HOA Payment: <input type="text" className="recordFormElement" id="hoa" value={formData.hOAPayment} onChange={handleFormChange} placeholder="HOA Payment"/>
                    <br/>
                    Property Management Payment: <input type="text" className="recordFormElement" id="propertyManagement" value={formData.propertyManagementPayment} onChange={handleFormChange} placeholder="Property Management Payment"/>
                    <br/>
                    Income: <input type="text" className="recordFormElement" id="grossIncome" value={formData.grossIncome} onChange={handleFormChange} placeholder="Gross Income"/>
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