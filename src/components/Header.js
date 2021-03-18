import qFlag from "../images/qflag.png";
import '../style/header.css'

export default function Header(props) {
  return(
    <div className="header">
      <div className="brand">
        <img className="brand-logo" src={qFlag} alt="flag with question mark"></img>
        <div className="brand-title">What The Flag</div>
      </div>
      <div className="scores">
        <p className="scores-level">Level <span>{props.level}</span></p>
        <p className="scores-score">Score: <span>{props.score}</span></p>
        <p className="scores-best-score">Best Score: <span>{props.bestScore}</span></p>
      </div>
    </div>
  )
}