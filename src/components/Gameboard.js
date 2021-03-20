import { useEffect, useState } from 'react';
import _ from 'lodash';
import Swal from 'sweetalert2';
import Card from './Card';
import randomCountries from '../scripts/randomcountries';

export default function Gameboard({setScore, score, setLevel, level}) {
  const [difficulty, setDifficulty] = useState(4)
  const [countries, setCountries] = useState(randomCountries(difficulty));
  const [cards, setCards] = useState([]);

  const handleLogic = (card) => {
    shuffleCountries();
    //card hasn't been clicked yet
    if (!cards.includes(card)){
      setCards((prevCards) => [...prevCards, card])
      setScore(score + 1)
    }else{
      Swal.fire({
        title: "Game Over!",
        text: `You earned a score of ${score}.`,
        customClass: {
          title: 'alertTitle',
          popup: 'alertPopup',
          content: 'alertContent',
          confirmButton: 'alertConfirm'
        }
      })
      reset()
    }
  }

  const reset = () => {
    setScore(0);
    setCards([]);
    setDifficulty(4);
    setLevel(1);
    setCountries(randomCountries(4));
  }
  const shuffleCountries = () => {
    //fisher algorithm
    function shuffleArray(array) {
      const oldArray = [...array];
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
      //prevent same order from rerendering
      if (_.isEqual(oldArray, array)){
        shuffleArray(array);
      }
    }
    //make copy of array to prevent writing to countries directly
    const shuffledCountries = [...countries];
    shuffleArray(shuffledCountries)
    setCountries(shuffledCountries)
  }

  useEffect(()=>{
    if (cards.length === difficulty){
      setLevel(level + 1);
      setDifficulty(difficulty + 4)
      setCountries(randomCountries(difficulty + 4))
      setCards([]);
    }
  },[score, cards.length, difficulty, level, setLevel])
  
  return(
    <div className="gameboard">
      {countries.map((country) => (
        <Card country={country} key={country + difficulty} handleLogic={handleLogic}/>
      ))}
    </div>
  )
}