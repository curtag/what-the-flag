import { useLayoutEffect, useEffect, useState } from 'react';
import Header from './components/Header';
import Gameboard from './components/Gameboard';
import './style/index.css'
import randomCountries from './scripts/randomcountries';

export default function App() {

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  //253 max number of coutnries with chance.js
  const [countries, setCountries] = useState([...randomCountries(6)]);

  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score);
    }
  },[score])

  useEffect(() => {
    console.log('something happened')
    if (score === 0 && bestScore > 0){
      setCountries([...randomCountries(6)])
      console.log(countries)
    }
    
  }, [score])

  // useEffect(() => {
  //   if (score === 0){
  //     console.log("did we do this?")
  //     setCountries([...randomCountries(6)])
  //     console.log(countries);
  //   }
  // },[countries, score])
  return (
    <div>
      <Header score={score} bestScore={bestScore}/>
      <Gameboard countries={countries} setScore={setScore} score={score}/>
    </div>
  );
}
