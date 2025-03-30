import React from 'react'
import './App.css'
import Header from './Components/Header'
import {Slider} from "./Components/Slider.jsx";
import {ProductionHouses} from "./Components/ProductionHouses.jsx";
function App() {


  return (
    <div className="App">
      <Header/>
        <Slider/>
        <ProductionHouses/>
       
    </div>
  )
}

export default App
