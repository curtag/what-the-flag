import { useEffect, useState } from 'react';
import Card from './Card';

export default function Gameboard(props) {
  const [countries, setCountries] = useState(props.countries)

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

  useEffect(()=>{
    
  },[])
  
  return(
    <div className="gameboard">
      {countries.map((country) => (
        <Card country={country} key={country} shuffleCards={shuffleCountries} setScore={props.setScore} score={props.score}/>
      ))}
    </div>
  )
}