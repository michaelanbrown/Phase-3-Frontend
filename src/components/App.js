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

  useEffect(() => {
    fetch("http://localhost:9292/properties")
    .then(r => r.json())
    .then(data => {
      setProperties(data);
    })}, [])

  return (
    <div>
        <Header />
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/owned/*" element={<Owned properties={properties.filter(t => t.purchase_price !== null)}/>} />
            <Route path="/pending/*" element={<Pending properties={properties.filter(t => t.purchase_price === null)}/>} />
            <Route path="/new-property" element={<PropertyForm/>} />
            <Route path="/owned/:id" element={<Property properties={properties}/>} />
            <Route path="/pending/:id" element={<Property properties={properties}/>} />
        </Routes>
    </div>
  );
}

export default App;