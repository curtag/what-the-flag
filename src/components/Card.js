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
      {/* <div className="card-icon">{emoji(props.country)}</div> */}
      <img className="card-icon" src={`${process.env.PUBLIC_URL}/assets/flags/${props.country.toLowerCase()}.png`} alt={emoji(props.country)}/>
      <figcaption className="card-caption">
        {(countries.getName(props.country, "en", {select: "official"})) ? 
        (countries.getName(props.country, "en", {select: "official"})) :
        countryName(props.country)}
      </figcaption>
    </figure>
  )
}