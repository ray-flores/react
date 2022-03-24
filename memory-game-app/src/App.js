import { useState } from 'react';
import './App.css';

// card array
const cardImages = [
  { "src": "/images/bowser.png" },
  { "src": "/images/donkey-kong.png" },
  { "src": "/images/luigi.png" },
  { "src": "/images/mario.png" },
  { "src": "/images/peach.png" },
  { "src": "/images/toad.png" },
  { "src": "/images/yoshi.png" }
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  // duplicate cards once and shuffle
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

  setCards(shuffleCards)
  setTurns(0)
  

  }



  return (
    <div className="App">
      <h1>Magic Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>
    </div>
  );
}

export default App;
