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
            <form>
                <p id='recordHeader'>Enter a new Finance Record:</p>
                <br/>
                <input type="text" id="property" value={formData.property} onChange={handleFormChange} placeholder="Property Street Address"/>
                <br/>
                <input type="text" id="mortgage" value={formData.mortgagePayment} onChange={handleFormChange} placeholder="Mortgage Payment"/>
                <br/>
                <input type="text" id="hoa" value={formData.hOAPayment} onChange={handleFormChange} placeholder="HOA Payment"/>
                <br/>
                <input type="text" id="propertyManagement" value={formData.propertyManagementPayment} onChange={handleFormChange} placeholder="Property Management Payment"/>
                <br/>
                <input type="text" id="grossIncome" value={formData.grossIncome} onChange={handleFormChange} placeholder="Gross Income"/>
                <br/>
                <input type="text" id="occupancy" value={formData.occupancy} onChange={handleFormChange} placeholder="Gross Income"/>
                <br/>
                <button class='submit'>Submit</button>
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