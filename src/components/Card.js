import { useState } from 'react';
import emoji from '../scripts/emojiflag';
import '../style/card.css';
var countries = require("i18n-iso-countries");
countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

export default function Card({country, handleLogic}){
  const [clicked, setClicked] = useState(false);

  function handleMove(){
    if (clicked) {
      handleLogic(country);
    }else{
      handleLogic(country)
      setClicked(!clicked)
    }
  }

  function countryName(countryCode){
    switch (countryCode) {
      case 'AC': return 'Ascension Island';
      case 'EA': return 'Ceuta, Melilla';
      case 'DG': return 'Diego Garcia';
      case 'IC': return 'Canary Islands';
      case 'TA': return 'Tristan da Cunha';
      default:
        return countryCode;
    }

  }
  return(
    <figure className="card" onClick={handleMove}>
      {/* <div className="card-icon">{emoji(country)}</div> */}
      <img className="card-icon" src={`${process.env.PUBLIC_URL}/assets/flags/${country.toLowerCase()}.png`} alt={emoji(country)}/>
      <figcaption className="card-caption">
        {(countries.getName(country, "en", {select: "official"})) ? 
        (countries.getName(country, "en", {select: "official"})) :
        countryName(country)}
      </figcaption>
    </figure>
  )
}