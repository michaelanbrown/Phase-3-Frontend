import './App.css';
import React, { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom";
import Header from "./Header"
import Home from "./Home"
import Owned from './Owned';
import Pending from './Pending';
import Property from './Property';
import PropertyForm from './PropertyForm';

function App() {
  const [properties, setProperties] = useState([]);
  const [newAddition, setNewAddition] = useState(true);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/properties")
    .then(r => r.json())
    .then(data => {
      setProperties(data);
    })
    fetch("http://localhost:9292/records")
    .then(r => r.json())
    .then(data => {
      setRecords(data)
    })
  }, [newAddition, setNewAddition])

  return (
    <div>
        <Header />
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/owned/*" element={<Owned newAddition={newAddition} setNewAddition={setNewAddition} properties={properties.filter(t => t.purchase_price !== null)}/>} />
            <Route path="/pending/*" element={<Pending newAddition={newAddition} setNewAddition={setNewAddition} properties={properties.filter(t => t.purchase_price === null)}/>} />
            <Route path="/new-property" element={<PropertyForm properties={properties} setProperties={setProperties} newAddition={newAddition} setNewAddition={setNewAddition}/>} />
            <Route path="/owned/:id" element={<Property properties={properties} newAddition={newAddition} setNewAddition={setNewAddition}/>} />
            <Route path="/pending/:id" element={<Property properties={properties} newAddition={newAddition}  setNewAddition={setNewAddition}/>} />
        </Routes>
    </div>
  );
}

export default App;