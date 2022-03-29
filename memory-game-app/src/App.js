import { useState } from 'react';
import './App.css';
import SingleCard from './components/SingleCard';

// card array
const cardImages = [
  { "src": "/images/bowser.png" },
  { "src": "/images/donkey-kong.png" },
  { "src": "/images/luigi.png" },
  { "src": "/images/mario.png" },
  { "src": "/images/peach.png" },
  { "src": "/images/toad.png" },
  { "src": "/images/yoshi.png" },
  { "src": "/images/falcon.png"}
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  // duplicate cards once and shuffle
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

      setCards(shuffledCards)
      setTurns(0)
  }

  
  console.log(cards, turns)


  return (
    <div className="App">
      <h1>Magic Memory Game</h1>
      <button onClick={shuffleCards} >New Game</button>

      <div className='card-grid'>
        {cards.map(card => (
          <SingleCard key={card.id} />
        ))}
      </div>

    </div>
  );
}

export default App;
