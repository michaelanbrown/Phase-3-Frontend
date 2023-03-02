import React from 'react';
import './App.css';

function RecordCard({ record }) {

    return(
        <div className="recordBody">
            <p>
            Occupied: {record.occupancy ? "Occupied" : "Vacant"}{'  '}
            Mortgage Payment: {record.mortgage_payment}{'  '}
            HOA: {record.hoa_payment ? record.hoa_payment : "No HOA"}{'  '}
            Property Management: {record.property_management_payment ? record.property_management_payment : "No Property Manager"}
            </p>
        </div>
    )
}

export default RecordCard;