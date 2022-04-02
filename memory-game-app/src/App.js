import { useEffect, useState } from 'react';
import './App.css';
import SingleCard from './components/SingleCard';

// card array
const cardImages = [
  { "src": "/images/bowser.png", matched: false },
  { "src": "/images/donkey-kong.png", matched: false },
  { "src": "/images/luigi.png", matched: false },
  { "src": "/images/mario.png", matched: false },
  { "src": "/images/peach.png", matched: false },
  { "src": "/images/toad.png", matched: false },
  { "src": "/images/yoshi.png", matched: false },
  { "src": "/images/falcon.png", matched: false}
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  // duplicate cards once and shuffle
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

      setChoiceOne(null);
      setChoiceTwo(null);
      setCards(shuffledCards);
      setTurns(0);
  }
  
  // handle a choice
  const handleChoice = (card) => {
    //console.log(card);
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  //compare two choices from user
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        //console.log('match');
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return {...card, matched: true}
            } else {
              return card;
            }
          })
        })
        resetTurn();
      } else {
        //console.log('not a match');
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo])


  // reset choices and incr turn
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1);
    setDisabled(false);
  }

  // start a new game automatically
  useEffect(() => {
    shuffleCards();
  }, [])

  return (
    <div className="App">
      <h1>Mario Memory Game</h1>
      <button onClick={shuffleCards} >New Game</button>

      <div className='card-grid'>
        {cards.map(card => (
          <SingleCard 
          handleChoice={ handleChoice }
          key={card.id} 
          card={card}
          flipped={ card === choiceOne || card === choiceTwo || card.matched } 
          disabled={disabled}
          />
        ))}
      </div>
      <p>Turns: {turns}</p>  
    </div>
  );
}

export default App;
