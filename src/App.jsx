import React from 'react'
import './App.css'
import Header from './Components/Header'
import {Slider} from "./Components/Slider.jsx";
import {ProductionHouses} from "./Components/ProductionHouses.jsx";
import {GenreMovieList} from "./Components/GenreMovieList.jsx";
import {GenresList} from "./Constant/GenresList.jsx";
function App() {


  return (
    <div className="App">
      <Header/>
        <Slider/>
        <ProductionHouses/>
      <GenreMovieList/>
       {/*<GenresList/>*/}
    </div>
  )
}

export default App
