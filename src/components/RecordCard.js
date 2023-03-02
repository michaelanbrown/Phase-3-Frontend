import React from 'react';
import './App.css';

function RecordCard({ record }) {

    return(
        <div className="recordBody">
            <p>
            <a style={{ marginLeft: '2rem' }}/>Occupied: {record.occupancy ? "Occupied" : "Vacant"}<a style={{ marginLeft: '5rem' }}/>
            Mortgage Payment: {record.mortgage_payment}<a style={{ marginLeft: '5rem' }}/>
            HOA: {record.hoa_payment ? record.hoa_payment : "No HOA"}<a style={{ marginLeft: '5rem' }}/>
            Property Management: {record.property_management_payment ? record.property_management_payment : "No Property Manager"}<a style={{ marginRight: '2rem' }}/>
            </p>
        </div>
    )
}

export default RecordCard;