import { useState } from "react";
//styles
import "./SingleCard.css";

export default function SingleCard() {
  const [cards, setCards] = useState([]);

  return (
    <div className="card">
      <div>
        <img className="front" alt="card front" src={card.src} />
        <img className="back" alt="card back" src="/images/Mario-logo.png" />
      </div>
    </div>
  );
}
