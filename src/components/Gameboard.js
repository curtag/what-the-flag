import { useEffect, useState } from 'react';
import Card from './Card';
import randomCountries from '../scripts/randomcountries';


export default function Gameboard(props) {
  const [difficulty, setDifficulty] = useState(4)
  const [countries, setCountries] = useState(randomCountries(difficulty));
  const [cards, setCards] = useState([]);

  const shuffleCountries = () => {
    //fisher algorithm
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
    }
    //make copy of array to prevent writing to countries directly
    const shuffledCountries = [...countries];
    shuffleArray(shuffledCountries)
    setCountries(shuffledCountries)
  }

  const handleCard = (card) => {
    if (!cards.includes(card)){
      setCards((prevCards) => [...prevCards, card])
    }
  }

  const reset = () => {
    props.setScore(0);
    setCards([]);
    setDifficulty(4);
    props.setLevel(1);
    setCountries(randomCountries(4));
  }

  useEffect(()=>{
    shuffleCountries()
    if (cards.length === difficulty){
      props.setLevel(props.level + 1);
      setDifficulty(difficulty + 2)
      setCountries(randomCountries(difficulty + 2))
      setCards([]);
    }
  },[props.score])
  
  return(
    <div className="gameboard">
      {countries.map((country) => (
        <Card country={country} key={country + difficulty} reset={reset} setScore={props.setScore} score={props.score} maxScore={difficulty} handleCard={handleCard}/>
      ))}
    </div>
  )
}