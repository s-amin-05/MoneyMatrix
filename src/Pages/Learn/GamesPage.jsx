import React from "react";
import "./GamesPage.css"; // Import styling for this page
import { Link } from "react-router-dom";

const GamesPage = ({ onSelectGame }) => {
  return (
    <div className="games-page">
      <h1>Select a Game</h1>
      <div className="card-container">
        {/* Card for "Rule the Board" */}
        <Link to={'BudgetSim'}>
            <div className="game-card" onClick={() => onSelectGame("ruleTheBoard")}>
            <h2>Budget Sim</h2>
            <p>Manage your finances and make strategic decisions to succeed!</p>
        </div>
        </Link>
        

        {/* Card for "Memory Game" */}
        <Link to={'MemoryGame'}>
            <div className="game-card" onClick={() => onSelectGame("memoryGame")}>
            <h2>Memory Card Game</h2>
            <p>Test your memory by matching the cards!</p>
            </div>
        </Link>

        {/* Card for "Memory Game" */}
        <Link to={'Stock'}>
            <div className="game-card" onClick={() => onSelectGame("memoryGame")}>
            <h2>Stock Market</h2>
            <p>Powerful for interactive stock graphs with realtime updates</p>
            </div>
        </Link>

        
      </div>
    </div>
  );
};

export default GamesPage;
