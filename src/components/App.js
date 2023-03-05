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
  // const [newAddition, setNewAddition] = useState(true);
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
  }, [setRecords, setProperties])

  return (
    <div>
        <Header />
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/owned/*" element={<Owned setProperties={setProperties} properties={properties.filter(t => t.purchase_price !== null)}/>} />
            <Route path="/pending/*" element={<Pending setProperties={setProperties} properties={properties.filter(t => t.purchase_price === null)}/>} />
            <Route path="/new-property" element={<PropertyForm properties={properties} setProperties={setProperties} />} />
            <Route path="/owned/:id" element={<Property properties={properties} setProperties={setProperties} records={records} setRecords={setRecords}/>} />
            <Route path="/pending/:id" element={<Property properties={properties} setProperties={setProperties} records={records} setRecords={setRecords}/>} />
        </Routes>
    </div>
  );
}

export default App;