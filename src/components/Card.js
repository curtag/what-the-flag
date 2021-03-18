import { useState } from 'react';
import emoji from '../scripts/emojiflag';
import '../style/card.css';
import Swal from 'sweetalert2';
var countries = require("i18n-iso-countries");
countries.registerLocale(require("i18n-iso-countries/langs/en.json"));


export default function Card(props){
  const [clicked, setClicked] = useState(false);

  function handleMove(){
    if (clicked) {
      Swal.fire({
        title: "Game Over!",
        text: `You earned a score of ${props.score}.`,
        customClass: {
          title: 'alertTitle',
          popup: 'alertPopup',
          content: 'alertContent',
          confirmButton: 'alertConfirm'
        }
      })
      props.reset()
    }else{
      props.handleCard(props.country)
      setClicked(!clicked)
      props.setScore(props.score + 1)
    }
    console.log("we clicked");
  }

  return(
    <figure className="card" onClick={handleMove}>
      <img className="card-icon" alt={emoji(props.country)}></img>
      <figcaption className="card-caption">
        {(countries.getName(props.country, "en", {select: "official"})) ? 
        (countries.getName(props.country, "en", {select: "official"})) :
        props.country}
      </figcaption>
    </figure>
  )
}