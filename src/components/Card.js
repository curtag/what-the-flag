import { useState } from 'react';
import emoji from '../scripts/emojiflag';
import '../style/card.css';
var countries = require("i18n-iso-countries");
countries.registerLocale(require("i18n-iso-countries/langs/en.json"));


export default function Card(props){
  const [clicked, setClicked] = useState(false);

  function handleClick(){
    if (clicked) {
      alert("done");
      props.setScore(0);
    }else{
      setClicked(!clicked)
      props.setScore(props.score + 1)
      props.shuffleCards();
    }
  }

  return(
    <figure className="card" onClick={handleClick}>
      <img className="card-icon" alt={emoji(props.country)}></img>
      <figcaption className="card-caption">
        {(countries.getName(props.country, "en", {select: "official"})) ? 
        (countries.getName(props.country, "en", {select: "official"})) :
        props.country}
      </figcaption>
    </figure>
  )
}