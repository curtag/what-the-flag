import { useEffect, useState } from 'react';
import Header from './components/Header';
import Gameboard from './components/Gameboard';
import './style/index.css'
import './style/alert.css'

export default function App() {

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [level, setLevel] = useState(1);

  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score);
    }
  },[score, bestScore])

  return (
    <div>
      <Header score={score} bestScore={bestScore} level={level}/>
      <Gameboard setScore={setScore} score={score} bestScore={bestScore} setLevel={setLevel} level={level}/>
    </div>
  );
}
