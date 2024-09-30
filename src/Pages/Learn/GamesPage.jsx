import React from "react";
import "./GamesPage.css"; // Import styling for this page

const GamesPage = ({ onSelectGame }) => {
  return (
    <div className="games-page">
      <h1>Select a Game</h1>
      <div className="card-container">
        {/* Card for "Rule the Board" */}
        <div className="game-card" onClick={() => onSelectGame("ruleTheBoard")}>
          <h2>Rule the Board</h2>
          <p>Manage your finances and make strategic decisions to succeed!</p>
        </div>

        {/* Card for "Memory Game" */}
        <div className="game-card" onClick={() => onSelectGame("memoryGame")}>
          <h2>Memory Card Game</h2>
          <p>Test your memory by matching the cards!</p>
        </div>
      </div>
    </div>
  );
};

export default GamesPage;
