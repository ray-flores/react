import { useState } from "react";
//styles
import "./SingleCard.css";

export default function SingleCard({ card, handleChoice, flipped, disabled}) {
  const [cards, setCards] = useState([]);

  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  }

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" alt="card front" src={card.src} />
        <img 
        className="back" 
        onClick={ handleClick } 
        alt="card back" 
        src="/images/Mario-logo.png" 
        />
      </div>
    </div>
  );
}
