import React, { useEffect, useState } from 'react';
import './App.css';

function RecordCard({ record }) {

    return(
        <div>{record.mortgage_payment}</div>
    )
}

export default RecordCard;