import React from "react";
import "./App.css";
import Planet from "./components/planet/planet";
// import Card from "./Cards.jsx";

export default function App() {
  return (
    <div className='app'>
      <h1>Solar System Sounds</h1>
      <Planet name='jupiter' />
    </div>
  );
}
