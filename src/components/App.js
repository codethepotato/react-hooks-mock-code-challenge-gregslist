import React from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import {useState, useEffect} from "react";

function App() {
  const [listings, setListings]= useState([]);
  
  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then ((r) => r.json())
    .then((listings) => setListings(listings))
  },[])
  return (
    <div className="app">
      <Header />
      <ListingsContainer listings={listing} />
    </div>
  );
}

export default App;


