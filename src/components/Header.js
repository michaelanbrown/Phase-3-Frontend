import React from "react";
import NavBar from "./NavBar";
import './App.css';

function Header() {


  return (
    <div className="Header">
      <header>
        <h1>
        <span role="img" aria-label="plane"></span>Welcome to Michaela's Property Management System!<span role="img" aria-label="globe"></span>
        <br/>
        </h1>
          <p><em>Manage all of your properties and property finances here!</em></p>
        <div>
            <NavBar />
        </div>  
      </header>
    </div>
  );
}

export default Header;