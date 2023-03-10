import React, { useEffect, useState } from 'react';
import './App.css';
import { useParams } from 'react-router-dom';
import RecordCard from './RecordCard';
import NewRecordForm from './NewRecordForm';
import UpdatePropertyForm from './UpdatePropertyForm';

function Property({  properties, setProperties, end, setEnd }) {
    const [propertyData, setPropertyData] = useState({})
    const [update, setUpdate] = useState("Want to Update Any Information?")
    const [updateStatus, setUpdateStatus] = useState(false);
    const { id } = useParams();
    const [updateProperty, setUpdateProperty] = useState({
        purchase_price: "",
        square_feet: "",
        garage_spaces: "",
        link: "",
        flip_status: "",
    });
    const [recordFormData, setRecordFormData] = useState({
        mortgage_payment: "",
        hoa_payment: "",
        property_management_payment: "",
        gross_income: "",
        property: ""
    });

    useEffect(() => {
        fetch(`http://localhost:9292/properties/${id}`)
        .then(r => r.json())
        .then(data => {
            setPropertyData(data);
            setUpdateProperty({...updateProperty,
                purchase_price: data.purchase_price,
                square_feet: data.square_feet,
                garage_spaces: data.garage_spaces,
                link: data.link,
                flip_status: data.flip_status,
            })
            setRecordFormData({...recordFormData, property : data.street_address})
        })}, [id])


    const mappedRecords = propertyData.records ? propertyData.records.map(rec => {
        return (<RecordCard record={rec} key={rec.id}/>)
    }) : null

    function handleUpdateStatusClick() {
        setUpdateStatus(updateStatus => !updateStatus)
        if (updateStatus === true) {
            setUpdate("Want to Update Any Information?")
        } else if (updateStatus === false) {
            setUpdate("Done updating information?")
        }
    }

    function addRecord(newRecord) {
        const updatedRecords = [...propertyData.records, newRecord]
        setPropertyData({...propertyData, records : updatedRecords})
    }

    return (
        <div>
            <br/>
            <h2 id='h2tag'>{propertyData.street_address}</h2> 
            <p id='ptag'>{propertyData.city}, {propertyData.state}</p>
            <img className = "PropertyImg" src={propertyData.link} alt={propertyData.address} width="75%" height="75%"/> 
            <br/>
            Purchase Price: {propertyData.purchase_price ? `$${propertyData.purchase_price}` : "Pending Purchase"}
            <br/>
            Square feet: {propertyData.square_feet}
            <br/>
            Garage Spaces: {propertyData.garage_spaces ? `${propertyData.garage_spaces} garage spaces` : "No garage"}
            <br/>
            Property Type: {propertyData.type ? propertyData.type.property_type : null}
            <br/>
            <br/>
            <button className='submit' onClick={handleUpdateStatusClick}>{update}</button>
            <br/>
            <UpdatePropertyForm updateProperty={updateProperty} setUpdateProperty={setUpdateProperty} handleUpdateStatusClick={handleUpdateStatusClick} setPropertyData={setPropertyData} setEnd={setEnd} end={end} propertyData={propertyData} updateStatus={updateStatus} setUpdateStatus={setUpdateStatus} properties={properties} setProperties={setProperties}/>
            <br/>
            <h3>Finance Records:</h3>
            {mappedRecords}
            <br/>
            <NewRecordForm recordFormData={recordFormData} setRecordFormData={setRecordFormData} propertyData={propertyData} setPropertyData={setPropertyData} addRecord={addRecord}/>
        </div>
    )
}

export default Property;