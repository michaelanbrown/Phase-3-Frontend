import React, { useEffect, useState } from 'react';
import './App.css';
import { useParams } from 'react-router-dom';
import RecordCard from './RecordCard';
import NewRecordForm from './NewRecordForm';
import UpdatePropertyForm from './UpdatePropertyForm';

function Property({  properties, setProperties }) {
    const [propertyData, setPropertyData] = useState({})
    const { id } = useParams();
    const [update, setUpdate] = useState("Want to Update Any Information?")
    const [updateStatus, setUpdateStatus] = useState(false);
    const purchasePrice = propertyData.purchase_price ? `$${propertyData.purchase_price}` : "Pending Purchase"
    const garageSpaces = propertyData.garage_spaces ? `${propertyData.garage_spaces} garage spaces` : "No garage"

    useEffect(() => {
        fetch(`http://localhost:9292/properties/${id}`)
        .then(r => r.json())
        .then(data => {
            setPropertyData(data);
        })}, [])

    const mappedRecords = propertyData.records ? propertyData.records.map(rec => {
        return (<RecordCard record={rec} key={rec.id}/>)
    }) : null

    function formStatus() {
        if (updateStatus === true) {
            setUpdate("Want to Update Any Information?")
        } else if (updateStatus === false) {
            setUpdate("Done updating information?")
        }
    }

    function handleUpdateStatusClick() {
        setUpdateStatus(updateStatus => !updateStatus)
        formStatus(updateStatus)
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
            Purchase Price: {purchasePrice}
            <br/>
            Square feet: {propertyData.square_feet}
            <br/>
            Garage Spaces: {garageSpaces}
            <br/>
            Property Type: {propertyData.type ? propertyData.type.property_type : null}
            <br/>
            <br/>
            <button className='submit' onClick={handleUpdateStatusClick}>{update}</button>
            <br/>
            <UpdatePropertyForm formStatus={formStatus} setPropertyData={setPropertyData} propertyData={propertyData} updateStatus={updateStatus} setUpdateStatus={setUpdateStatus} properties={properties} setProperties={setProperties}/>
            <br/>
            <h3>Finance Records:</h3>
            {mappedRecords}
            <br/>
            <NewRecordForm propertyData={propertyData} setPropertyData={setPropertyData} addRecord={addRecord}/>
        </div>
    )
}

export default Property;