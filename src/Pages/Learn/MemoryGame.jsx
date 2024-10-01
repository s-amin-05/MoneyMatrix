import React, { useState, useEffect } from "react";
import "./MemoryGame.css"; // Import CSS for styling

function MemoryGame() {
  const [cards, setCards] = useState([]);
  const [firstChoice, setFirstChoice] = useState(null);
  const [secondChoice, setSecondChoice] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [budgetStatus, setBudgetStatus] = useState(true);
  const [investStatus, setInvestStatus] = useState(false);
  const [stockStatus, setStockStatus] = useState(false);

  // Shuffle cards and set up the game
  useEffect(() => {
    shuffleCards(budgetCards); // Initial shuffle for Budget cards
  }, []);

  const shuffleCards = (cardsData) => {
    const shuffledCards = cardsData
      .flatMap((pair) => [
        { type: pair.type, text: pair.term, matched: false, id: Math.random() },
        {
          type: pair.type,
          text: pair.definition,
          matched: false,
          id: Math.random(),
        },
      ])
      .sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
  };

  // Handle card click
  const handleChoice = (card) => {
    firstChoice ? setSecondChoice(card) : setFirstChoice(card);
  };

  // Compare two selected cards
  useEffect(() => {
    if (firstChoice && secondChoice) {
      setDisabled(true);
      if (firstChoice.type === secondChoice.type) {
        setCards((prevCards) =>
          prevCards.map((card) => {
            if (card.type === firstChoice.type) {
              return { ...card, matched: true };
            }
            return card;
          })
        );
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [firstChoice, secondChoice]);

  // Change card sets based on selected category
  useEffect(() => {
    if (budgetStatus) {
      shuffleCards(budgetCards);
    } else if (stockStatus) {
      shuffleCards(stockMarketCards);
    } else if (investStatus) {
      shuffleCards(investingCards);
    }
  }, [budgetStatus, stockStatus, investStatus]);

  // Reset choices & enable interaction again
  const resetTurn = () => {
    setFirstChoice(null);
    setSecondChoice(null);
    setDisabled(false);
  };

  return (
    <div className="memory-game">
      <h1>Memory Card Game</h1>
      <form className="category-selector">
        <input
          type="checkbox"
          id="budget"
          name="budget"
          checked={budgetStatus}
          onChange={() => {
            setBudgetStatus(true);
            setStockStatus(false);
            setInvestStatus(false);
          }}
        />
        <label htmlFor="budget">Budget</label>
        <input
          type="checkbox"
          id="stock-market"
          checked={stockStatus}
          onChange={() => {
            setStockStatus(true);
            setBudgetStatus(false);
            setInvestStatus(false);
          }}
        />
        <label htmlFor="stock-market">Stock market</label>
        <input
          type="checkbox"
          id="investing"
          checked={investStatus}
          onChange={() => {
            setInvestStatus(true);
            setBudgetStatus(false);
            setStockStatus(false);
          }}
        />
        <label htmlFor="investing">Investing</label>
      </form>
      <div className="card-grid ">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={
              card === firstChoice || card === secondChoice || card.matched
            }
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
}

function Card({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled && !flipped && !card.matched) {
      handleChoice(card);
    }
  };

  return (
    <div className="card" onClick={handleClick}>
      <div className={flipped ? "flipped" : ""}>
        <div className="front flex text-center p-5">{card.text}</div>
        <div className="back"></div>
      </div>
    </div>
  );
}

export default MemoryGame;

const budgetCards = [
  {
    type: "A",
    term: "Budget",
    definition: "A plan for spending money",
    matched: false,
  },
  {
    type: "B",
    term: "Bank",
    definition: "A financial institution",
    matched: false,
  },
  { type: "C", term: "Credit", definition: "Borrowed money", matched: false },
  { type: "D", term: "Debt", definition: "Money owed", matched: false },
  { type: "E", term: "Expense", definition: "Money spent", matched: false },
  {
    type: "F",
    term: "Finance",
    definition: "Management of money",
    matched: false,
  },
];

const stockMarketCards = [
  {
    type: "A",
    term: "Asset",
    definition: "Something of value",
    matched: false,
  },
  {
    type: "B",
    term: "Bear",
    definition: "Investor who expects prices to fall",
    matched: false,
  },
  {
    type: "C",
    term: "Bull",
    definition: "Investor who expects prices to rise",
    matched: false,
  },
  {
    type: "D",
    term: "Dividend",
    definition: "Payment to shareholders",
    matched: false,
  },
  {
    type: "E",
    term: "Equity",
    definition: "Ownership interest in a company",
    matched: false,
  },
  {
    type: "F",
    term: "Index",
    definition: "Measure of stock market performance",
    matched: false,
  },
];

const investingCards = [
  {
    type: "A",
    term: "Asset",
    definition: "Something of value",
    matched: false,
  },
  {
    type: "B",
    term: "Bear",
    definition: "Investor who expects prices to fall",
    matched: false,
  },
  {
    type: "C",
    term: "Bull",
    definition: "Investor who expects prices to rise",
    matched: false,
  },
  {
    type: "D",
    term: "Dividend",
    definition: "Payment to shareholders",
    matched: false,
  },
  {
    type: "E",
    term: "Equity",
    definition: "Ownership interest in a company",
    matched: false,
  },
  {
    type: "F",
    term: "Index",
    definition: "Measure of stock market performance",
    matched: false,
  },
];
