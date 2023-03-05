import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './App.css';

function UpdatePropertyForm({ updateStatus }) {
    const { id } = useParams();
    const [updateProperty, setupdateProperty] = useState({
        street_address: "",
        city: "",
        state: "",
        purchase_price: "",
        square_feet: "",
        garage_spaces: "",
        link: "",
        flip_status: "",
        type: ""
    });

    useEffect(() => {
        fetch(`http://localhost:9292/properties/${id}`)
        .then(r => r.json())
        .then(r => {
            setupdateProperty({...updateProperty,
                street_address : r.street_address,
                city: r.city,
                state: r.state,
                purchase_price: r.purchase_price,
                square_feet: r.square_feet,
                garage_spaces: r.garage_spaces,
                link: r.link,
                flip_status: r.flip_status,
                type:{property_type: r.type}
        })
        })
    },[id])


    return (updateStatus ? (
        <div>
            <form >
                Enter Updates Here:
                <br></br>
                
                <button className='submit'>Submit Changes</button>
            </form>
        </div>) : null
    )
}

export default UpdatePropertyForm;